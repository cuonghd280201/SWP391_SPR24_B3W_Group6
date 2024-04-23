package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.entity.Orders;
import tourbooking.entity.Payment;
import tourbooking.entity.User;

import java.math.BigDecimal;
import java.security.Principal;
import java.util.UUID;

public interface PaymentService {
    Payment createPayment(User user, Orders orders, String vnPayCode);
    Payment createPaymentRefund(User user, Orders orders);

    ResponseEntity<BaseResponseDTO> checkOut(UUID paymentId);
}
