package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.Tour.TourDetail;

import java.util.UUID;


public interface TourDetailRepository extends JpaRepository<TourDetail, UUID> {
}
