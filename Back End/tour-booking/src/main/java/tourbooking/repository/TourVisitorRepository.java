package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tourbooking.entity.Tour.TourVisitor;

import java.util.List;
import java.util.UUID;

public interface TourVisitorRepository extends JpaRepository<TourVisitor, UUID> {
    @Query("SELECT COUNT(tv) FROM TourVisitor tv WHERE tv.tourTime.id = :tourTimeId and tv.tourVisitorType = 'BABY' ")
    Integer countBabyInTourTime(UUID tourTimeId);

    @Query("SELECT COUNT(tv) FROM TourVisitor tv WHERE tv.tourTime.id = :tourTimeId and tv.tourVisitorType = 'ADULT' ")
    Integer countAdultInTourTime(UUID tourTimeId);

    List<TourVisitor> findAllByOrderId(UUID id);
}
