package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.Payment;

import java.util.UUID;

public interface PaymentRepository extends JpaRepository<Payment, UUID> {
    Payment getPaymentByVnPayCode(String vnPayCode);
}
