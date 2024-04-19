package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tourbooking.entity.Tour.TourTime;

import java.util.UUID;

public interface TourTimeRepository extends JpaRepository<TourTime, UUID> {
    @Query("SELECT COUNT(tv) FROM TourVisitor tv WHERE tv.tourTime.id = :uuid")
    Integer countVisitor(@Param("uuid") UUID uuid);
}
