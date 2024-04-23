package tourbooking.service.impl;

import jakarta.persistence.criteria.Order;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.OrderStatus;
import tourbooking.common.PaymentStatus;
import tourbooking.dto.*;
import tourbooking.entity.Orders;
import tourbooking.entity.Payment;
import tourbooking.repository.OrderRepository;
import tourbooking.repository.PaymentRepository;
import tourbooking.service.DashboardService;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl implements DashboardService {
    private final OrderRepository orderRepository;
    private final PaymentRepository paymentRepository;
    @Override
    public ResponseEntity<BaseResponseDTO> revenueStatistic(int days) {
        LocalDateTime endDate = LocalDateTime.now();
        LocalDateTime startDate = endDate.minusDays(days);

        List<Payment> paymentList = paymentRepository.findByPaymentStatusAndCreateDateBetween(PaymentStatus.DONE, startDate, endDate);

        Map<LocalDate, BigDecimal> revenueByDay = new HashMap<>();

        for (Payment payment : paymentList) {
            BigDecimal amount = payment.getAmount();

            LocalDateTime paymentDay = payment.getCreateDate().toLocalDate().atStartOfDay();

            revenueByDay.merge(paymentDay.toLocalDate(), amount, BigDecimal::add);
        }

        List<RevenueStatisticDTO> statisticalDTOList = revenueByDay.entrySet().stream()
                .map(entry -> new RevenueStatisticDTO(entry.getKey(), entry.getValue()))
                .collect(Collectors.toList());
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Success", null, statisticalDTOList));
    }

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
