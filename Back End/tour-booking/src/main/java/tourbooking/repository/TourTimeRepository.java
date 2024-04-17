package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.Tour.TourTime;

import java.util.UUID;

public interface TourTimeRepository extends JpaRepository<TourTime, UUID> {
}
