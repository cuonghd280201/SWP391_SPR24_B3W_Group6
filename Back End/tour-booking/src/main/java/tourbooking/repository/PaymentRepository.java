package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.common.PaymentStatus;
import tourbooking.entity.Payment;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PaymentRepository extends JpaRepository<Payment, UUID> {
    Payment getPaymentByVnPayCode(String vnPayCode);
    List<Payment> findByPaymentStatusAndCreateDateBetween(PaymentStatus paymentStatus, LocalDateTime startDate, LocalDateTime endDate);

//    Optional<Payment> findByCode(String code);
}
