package tourbooking.service.impl;

import jakarta.persistence.criteria.Order;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.OrderStatus;
import tourbooking.dto.BaseResponseDTO;

import tourbooking.dto.CountRoleDTO;
import tourbooking.dto.OrderSummaryDTO;
import tourbooking.entity.Orders;
import tourbooking.entity.User;
import tourbooking.repository.OrderRepository;
import tourbooking.repository.UserRepository;
import tourbooking.service.AdminService;


import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
//    @Autowired
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;

    // Hàm logic để lấy số lượng người dùng từ cơ sở dữ liệu
    public Long getUserCount() {
        return userRepository.count(); // Sử dụng phương thức count() của JpaRepository để đếm số lượng người dùng
    }

    @Override
    public ResponseEntity<BaseResponseDTO> countAllUser() {
        List<User> userList= userRepository.findAll();
        int countUser = 0;
        int countStaff = 0;
        for(User user : userList){
            if(user.getRole().getName().equals("USER")){
                ++countUser;
            }else if(user.getRole().getName().equals("STAFF")){
                ++countStaff;
            }
        }
        CountRoleDTO countRoleDTO = new CountRoleDTO(countUser, countStaff);

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Get Role Number Successfully", countRoleDTO));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> getOrderSummary() {
        LocalDateTime startOfMonth = LocalDateTime.now().withDayOfMonth(1).withHour(0).withMinute(0).withSecond(0);
        LocalDateTime endOfMonth = LocalDateTime.now().withDayOfMonth(LocalDateTime.now().toLocalDate().lengthOfMonth()).withHour(23).withMinute(59).withSecond(59);

        List<Orders> ordersList = orderRepository.findAll();


        double totalAmount = 0;
        BigDecimal completedMoney = new BigDecimal("0.0");
        BigDecimal refundedMoney = new BigDecimal("0.0");

        for (Orders orders : ordersList) {
            if (orders.getOrderStatus().equals(OrderStatus.DONE)) {
                completedMoney= completedMoney.add(orders.getAmount());
            } else if (orders.getOrderStatus().equals(OrderStatus.CANCEL)) {
                refundedMoney= refundedMoney.add(orders.getRefund());
            }
        }
        OrderSummaryDTO orderSummaryDTO = new OrderSummaryDTO(completedMoney, refundedMoney );
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Get Role Number Successfully", orderSummaryDTO));
    }
}
