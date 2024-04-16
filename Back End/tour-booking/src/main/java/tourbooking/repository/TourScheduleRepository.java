package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.Tour.TourSchedule;

import java.util.UUID;

public interface TourScheduleRepository extends JpaRepository<TourSchedule, UUID> {
}
