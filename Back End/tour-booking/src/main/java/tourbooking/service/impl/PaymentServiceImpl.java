package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tourbooking.common.PaymentStatus;
import tourbooking.entity.Orders;
import tourbooking.entity.Payment;
import tourbooking.entity.User;
import tourbooking.repository.PaymentRepository;
import tourbooking.service.PaymentService;

import java.security.Principal;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    @Override
    public Payment createPayment(User user, Orders orders, String vnPayCode) {

        Payment payment = new Payment();
        payment.setAmount(orders.getAmount());
        payment.setOrders(orders);
        payment.setCreateBy(user.getName());
        payment.setVnPayCode(vnPayCode);
        payment.setPaymentStatus(PaymentStatus.DONE);
        paymentRepository.save(payment);

        return payment;
    }
}
