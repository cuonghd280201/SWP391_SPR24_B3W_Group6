package tourbooking.service.impl;

import jakarta.persistence.criteria.Order;
import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.CountRoleDTO;
import tourbooking.dto.OrderSummaryDTO;
import tourbooking.repository.OrderRepository;
import tourbooking.service.DashboardService;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
public class DashboardServiceImpl implements DashboardService {
//    private final OrderRepository orderRepository;
//
//    @Override
//    public ResponseEntity<BaseResponseDTO> getOrderSummary() {
//        LocalDateTime startOfMonth = LocalDateTime.now().withDayOfMonth(1).withHour(0).withMinute(0).withSecond(0);
//        LocalDateTime endOfMonth = LocalDateTime.now().withDayOfMonth(LocalDateTime.now().toLocalDate().lengthOfMonth()).withHour(23).withMinute(59).withSecond(59);
//
//        List<Order> orders = orderRepository.findByOrderDateBetween(startOfMonth, endOfMonth);
//
//        double totalAmount = 0;
//        int completedCount = 0;
//        int refundedCount = 0;
//
//        for (Order order : orders) {
//            totalAmount += order.getAmount();
//            if ("completed".equals(order.getStatus())) {
//                completedCount++;
//            } else if ("refunded".equals(order.getStatus())) {
//                refundedCount++;
//            }
//        }
//        OrderSummaryDTO orderSummaryDTO = new OrderSummaryDTO(totalAmount, completedCount, refundedCount);
//        return new OrderSummaryDTO(totalAmount, completedCount, refundedCount);
//    }
}
