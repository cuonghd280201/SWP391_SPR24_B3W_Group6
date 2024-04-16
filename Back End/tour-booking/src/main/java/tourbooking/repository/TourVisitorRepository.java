package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.Tour.TourVisitor;

import java.util.UUID;

public interface TourVisitorRepository extends JpaRepository<TourVisitor, UUID> {
}
