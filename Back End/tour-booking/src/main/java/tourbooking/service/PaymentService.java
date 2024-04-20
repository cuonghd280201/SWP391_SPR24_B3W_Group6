package tourbooking.service;

import tourbooking.entity.Orders;
import tourbooking.entity.Payment;
import tourbooking.entity.User;

import java.security.Principal;

public interface PaymentService {
    Payment createPayment(User user, Orders orders, String vnPayCode);
}
