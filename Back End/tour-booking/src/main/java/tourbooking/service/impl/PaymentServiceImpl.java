package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.OrderStatus;
import tourbooking.common.PaymentStatus;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.entity.Orders;
import tourbooking.entity.Payment;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.OrderRepository;
import tourbooking.repository.PaymentRepository;
import tourbooking.service.PaymentService;

import java.math.BigDecimal;
import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;
    private final TransactionServiceImpl transactionService;
    private final OrderRepository orderRepository;

    @Override
    public Payment createPayment(User user, Orders orders, String vnPayCode) {

        Payment payment = new Payment();
        payment.setAmount(orders.getAmount());
        payment.setOrders(orders);
        payment.setCreateBy(user.getName());
        payment.setVnPayCode(vnPayCode);
        payment.setPaymentStatus(PaymentStatus.NOT_DONE);
        return payment;

    }

    public Payment createPaymentRefund(User user, Orders orders) {
        Payment payment = new Payment();
        payment.setAmount(orders.getPaid());
        payment.setOrders(orders);
        payment.setCreateBy(user.getName());
        payment.setVnPayCode(null);
        payment.setPaymentStatus(PaymentStatus.DONE);
        paymentRepository.save(payment);
        return payment;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> checkOut(UUID paymentId) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found!"));
        payment.setPaymentStatus(PaymentStatus.DONE);
        Orders orders = payment.getOrders();
        BigDecimal paid = orders.getPaid();
        orders.setPaid(paid.add(payment.getAmount()));
        //Check co 1 payment co status not_done thi tao them 1 payment nua
        if (orderRepository.countPaymentsByOrder(orders) == 1) {
            System.out.println("start count");
            Payment newPayment = createPayment(orders.getUser(), orders, null);
            paymentRepository.saveAndFlush(newPayment);
        }

        paymentRepository.save(payment);

        if (orderRepository.checkOrderHaveAllPaymentDone(orders)) {
            System.out.println("check order");

            orders.setPriceAfterPaid(BigDecimal.ZERO);
            orders.setAmount(BigDecimal.ZERO);
            orders.setOrderStatus(OrderStatus.DONE);

        }
        orderRepository.save(orders);

        transactionService.createTransaction(orders.getUser(), payment, "Thanh toán thành công cho đơn " + orders.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Successfully"));
    }
}
