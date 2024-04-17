package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.Orders;

import java.util.UUID;

public interface OrderRepository extends JpaRepository<Orders, UUID> {
}
