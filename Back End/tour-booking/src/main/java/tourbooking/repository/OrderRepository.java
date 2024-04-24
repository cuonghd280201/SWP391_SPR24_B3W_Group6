package tourbooking.repository;

import jakarta.persistence.criteria.Order;
import org.aspectj.weaver.ast.Or;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tourbooking.common.OrderStatus;
import tourbooking.entity.Orders;
import tourbooking.entity.Payment;
import tourbooking.entity.User;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<Orders, UUID> {
    List<Orders> findAllByUserAndOrderStatus (User user, OrderStatus orderStatus);

    @Query("SELECT CASE WHEN COUNT(p) = 0 THEN true ELSE false END FROM Payment p WHERE p.orders = :orders AND p.paymentStatus <> 'DONE'")
    boolean checkOrderHaveAllPaymentDone(@Param("orders") Orders orders);

    @Query(value = "SELECT COUNT(p) FROM Payment p WHERE p.orders = :orders")
    int countPaymentsByOrder(@Param("orders") Orders orders);
//    boolean findOrderHaveAllPaymentDone(@Param("orders") Orders orders);
//    List<Orders> findByOrderDateBetween(LocalDateTime startOfMonth, LocalDateTime endOfMonth);

    List<Orders> findAllByOrderStatus (OrderStatus orderStatus);
    List<Orders> findByCreateDateBetween(LocalDateTime startDate, LocalDateTime endDate);

    Optional<Orders> findByCode(String code);
}
