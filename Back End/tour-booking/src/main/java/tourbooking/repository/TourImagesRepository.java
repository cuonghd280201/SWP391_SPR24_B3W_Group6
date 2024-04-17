package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.Tour.TourImages;

import java.util.UUID;

public interface TourImagesRepository extends JpaRepository<TourImages, UUID> {
}
