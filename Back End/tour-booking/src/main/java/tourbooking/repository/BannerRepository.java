package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.Banner;
import tourbooking.entity.Tour.TourImages;

import java.util.UUID;

public interface BannerRepository extends JpaRepository<Banner, UUID> {
}
