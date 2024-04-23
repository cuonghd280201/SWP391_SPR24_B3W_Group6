package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.OrderStatus;
import tourbooking.common.TourVisitorType;
import tourbooking.dto.*;
import tourbooking.entity.Orders;
import tourbooking.entity.Payment;
import tourbooking.entity.Tour.Tour;
import tourbooking.entity.Tour.TourSchedule;
import tourbooking.entity.Tour.TourTime;
import tourbooking.entity.Tour.TourVisitor;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.*;
import tourbooking.service.OrderService;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final TourTimeRepository tourTimeRepository;
    private final TourVisitorRepository tourVisitorRepository;
    private final PaymentRepository paymentRepository;
    private final PaymentServiceImpl paymentService;
    private final TourServiceImpl tourService;
    private final ModelMapper modelMapper;
    @Override
    public ResponseEntity<BaseResponseDTO> createOrder(Principal principal, UUID tourTimeId, BigDecimal paid, List<TourVisitorForm> tourVisitorFormList) {
        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
        TourTime tourTime = tourTimeRepository.findById(tourTimeId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
        Tour tour = tourTime.getTour();
        Orders orders = new Orders();
        LocalDate dateNow = LocalDate.now();
        Set<TourVisitor> tourVisitorSet = new HashSet<>();
        orders.setUser(user);
        orders.setTourTime(tourTime);
        orders.setPaid(paid);
        //Tính giá tiền cho trẻ em
        BigDecimal tourPrice = tourTime.getTour().getPrice();
        long babyNumber = tourVisitorFormList.stream().filter(tourVisitorForm -> tourVisitorForm.getType().equals("BABY")).count();
        BigDecimal babyPrice = tourPrice.multiply(new BigDecimal("0.5")).multiply(BigDecimal.valueOf(babyNumber));
        //Tính giá tiền cho người lớn
        long adultNumber = tourVisitorFormList.stream().filter(tourVisitorForm -> tourVisitorForm.getType().equals("ADULT")).count();
        BigDecimal adultPrice = tourPrice.multiply(BigDecimal.valueOf(adultNumber));
        //Tính giá tiền cho order
        BigDecimal paidPrice;
        BigDecimal orderPrice = babyPrice.add(adultPrice);
        orders.setPrice(orderPrice);
        orders.setPaid(BigDecimal.ZERO);
        //Tạo payment
        if (paid.compareTo(BigDecimal.ZERO) == 0) {
            paidPrice = BigDecimal.valueOf(0);
            orders.setAmount(orderPrice);
            orders.setOrderStatus(OrderStatus.DONE);
        } else {
            paidPrice = orderPrice.multiply(paid.divide(new BigDecimal("100"), 2, RoundingMode.HALF_UP));
            orders.setAmount(paidPrice);
            orders.setOrderStatus(OrderStatus.NOT_DONE);
        }
        orders.setPriceAfterPaid(orderPrice.subtract(paidPrice));
        orders.setRefund(BigDecimal.ZERO);

        Payment payment = paymentService.createPayment(user,orders,null);
        Set<Payment> paymentSet = new HashSet<>();
        paymentSet.add(payment);
        orders.setPaymentSet(paymentSet);
        orderRepository.save(orders);
        paymentRepository.save(payment);
        //Tạo tour visitor
        for (TourVisitorForm tourVisitorForm: tourVisitorFormList
             ) {
            TourVisitor tourVisitor = new TourVisitor();
            tourVisitor.setName(tourVisitorForm.getName());
            tourVisitor.setDateOfBirth(tourVisitorForm.getDateOfBirth());
            if (tourVisitorForm.getPhone() == null) {
                tourVisitor.setPhone(null);
            }else {
                tourVisitor.setPhone(tourVisitorForm.getPhone());
            }
            if (tourVisitorForm.getIdCard() == null) {
                tourVisitor.setIdCard(null);
            }else {
                tourVisitor.setIdCard(tourVisitorForm.getIdCard());
            }
            int age = dateNow.minusYears(tourVisitor.getDateOfBirth().getYear()).minusDays(1).getYear();
            if (age >= 12) {
                tourVisitor.setTourVisitorType(TourVisitorType.ADULT);

            } else {
                tourVisitor.setTourVisitorType(TourVisitorType.BABY);
            }
            tourVisitor.setTourTime(tourTime);

            tourVisitor.setUserId(user.getId());
            tourVisitor.setOrderId(orders.getId());

            tourVisitorRepository.save(tourVisitor);
            tourVisitorSet.add(tourVisitor);
        }
        //Cập nhật số lượng khách thực tế
        tourTime.setTourVisitorSet(tourVisitorSet);
        int slotNumberInTime = tourTimeRepository.countVisitor(tourTimeId);
        //int listVisitCount = tourVisitorFormList.size();
        //int slotNumberActual = slotNumberInTime + listVisitCount;
        tourTime.setSlotNumberActual(slotNumberInTime);
        tourTime.setSlotNumber(tourTime.getSlotNumber() - tourVisitorFormList.size());
        tourTimeRepository.save(tourTime);
        return ResponseEntity.status(HttpStatus.CREATED).body(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Successfully", orders.getId()));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> getAllOrder(Principal principal) {
        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
        List<Orders> ordersList = orderRepository.findAllByUser(user);
        List<OrderDTO> orderDTOList = new ArrayList<>();
        for (Orders orders: ordersList
             ) {
            OrderDTO orderDTO = modelMapper.map(orders, OrderDTO.class);
            orderDTO.setTourInfoDTO(tourService.convertToTourInfoDTO(orders.getTourTime().getTour()));
            orderDTOList.add(orderDTO);
        }
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully", orderDTOList));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> getOrderDetailById(UUID uuid) {
        Orders orders = orderRepository.findById(uuid).orElseThrow(() -> new ResourceNotFoundException("Order not found!"));

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully", convertToOrderDetailDTO(orders)));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> cancelOrder(UUID uuid) {
        Orders orders = orderRepository.findById(uuid)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found!"));

        orders.setOrderStatus(OrderStatus.WAITING_CANCEL);
        orderRepository.save(orders);

        return ResponseEntity.status(HttpStatus.CREATED).body(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Successfully"));
    }

    public OrderDetailDTO convertToOrderDetailDTO (Orders orders) {
        if (orders == null) {
            return null;
        }
        OrderDetailDTO orderDetailDTO = modelMapper.map(orders, OrderDetailDTO.class);
        //set tour time dto
        orderDetailDTO.setTourTimeDTO(modelMapper.map(orders.getTourTime(), TourTimeDTO.class));
        //set user dto
        UserDTO userDTO = modelMapper.map(orders.getUser(), UserDTO.class);
        userDTO.setRole(orders.getUser().getRole().getName());
        orderDetailDTO.setUserDTO(userDTO);
        //set tour schedule
        List<TourScheduleDTO> tourScheduleDTOList = new ArrayList<>();
        for (TourSchedule tourSchedule: orders.getTourTime().getTour().getTourSchedules()
             ) {
            TourScheduleDTO tourScheduleDTO = modelMapper.map(tourSchedule, TourScheduleDTO.class);
            tourScheduleDTOList.add(tourScheduleDTO);
        }
        orderDetailDTO.setTourScheduleDTOList(tourScheduleDTOList);
        //set tour visitor
        List<TourVisitorDTO> tourVisitorDTOList = new ArrayList<>();
        for (TourVisitor tourVisitor: orders.getTourTime().getTourVisitorSet()
             ) {
            if (tourVisitor.getUserId().equals(orders.getUser().getId()) && tourVisitor.getOrderId().equals(orders.getId()) ) {
                TourVisitorDTO tourVisitorDTO = modelMapper.map(tourVisitor, TourVisitorDTO.class);
                tourVisitorDTOList.add(tourVisitorDTO);
            }
        }
        //set tour dto
        orderDetailDTO.setTourDTO(modelMapper.map(orders.getTourTime().getTour(), TourDTO.class));
        orderDetailDTO.setTourVisitorDTOList(tourVisitorDTOList);
        //set payment dto
        List<PaymentDTO> paymentDTOList = new ArrayList<>();
        for (Payment payment: orders.getPaymentSet()
             ) {
            PaymentDTO paymentDTO = modelMapper.map(payment, PaymentDTO.class);
            paymentDTOList.add(paymentDTO);
        }
        orderDetailDTO.setPaymentDTOList(paymentDTOList);

        return orderDetailDTO;
    }

}
