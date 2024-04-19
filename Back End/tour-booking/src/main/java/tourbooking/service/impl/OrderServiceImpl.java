package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.OrderStatus;
import tourbooking.common.TourVisitorType;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourVisitorForm;
import tourbooking.entity.Orders;
import tourbooking.entity.Tour.Tour;
import tourbooking.entity.Tour.TourTime;
import tourbooking.entity.Tour.TourVisitor;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.OrderRepository;
import tourbooking.repository.TourTimeRepository;
import tourbooking.repository.TourVisitorRepository;
import tourbooking.repository.UserRepository;
import tourbooking.service.OrderService;

import java.math.BigDecimal;
import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final TourTimeRepository tourTimeRepository;
    private final TourVisitorRepository tourVisitorRepository;
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
        //Tạo tour visitor
        for (TourVisitorForm tourVisitorForm: tourVisitorFormList
             ) {
            TourVisitor tourVisitor = modelMapper.map(tourVisitorForm, TourVisitor.class);
            int age = dateNow.minusYears(tourVisitor.getDateOfBirth().getYear()).minusDays(1).getYear();
            if (age >= 12) {
                tourVisitor.setTourVisitorType(TourVisitorType.ADULT);

            } else {
                tourVisitor.setTourVisitorType(TourVisitorType.BABY);
            }
            tourVisitor.setTourTime(tourTime);
            tourVisitorRepository.save(tourVisitor);
            tourVisitorSet.add(tourVisitor);
        }
        //Cập nhật số lượng khách thực tế
        tourTime.setTourVisitorSet(tourVisitorSet);
        int slotNumberInTime = tourTimeRepository.countVisitor(tourTimeId);
        tourTime.setSlotNumberActual(tourTime.getSlotNumber() - slotNumberInTime);
        tourTimeRepository.save(tourTime);
        //Tính giá tiền cho trẻ em
        BigDecimal tourPrice = tourTime.getTour().getPrice();
        int babyNumber = tourVisitorRepository.countBabyInTourTime(tourTimeId);
        BigDecimal babyPrice = tourPrice.multiply(new BigDecimal("0.5")).multiply(BigDecimal.valueOf(babyNumber));
        //Tính giá tiền cho người lớn
        int adultNumber = tourVisitorRepository.countAdultInTourTime(tourTimeId);
        BigDecimal adultPrice = tourPrice.multiply(BigDecimal.valueOf(adultNumber));
        //Tính giá tiền cho order
        BigDecimal orderPrice = babyPrice.add(adultPrice);
        orders.setPrice(orderPrice);
        //Tạo payment
        if (paid.compareTo(BigDecimal.ZERO) == 0) {
           orders.setAmount(orderPrice);
            orders.setOrderStatus(OrderStatus.DONE);
        } else {
            orders.setAmount(orderPrice.subtract(paid));
            orders.setOrderStatus(OrderStatus.NOT_DONE);
        }
        orders.setPriceAfterPaid(orderPrice.subtract(paid));
        orders.setRefund(BigDecimal.ZERO);
        orderRepository.save(orders);
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Successfully"));
    }
}
