package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.Tour.Tour;

import java.util.UUID;

public interface TourRepository extends JpaRepository<Tour, UUID> {
}
