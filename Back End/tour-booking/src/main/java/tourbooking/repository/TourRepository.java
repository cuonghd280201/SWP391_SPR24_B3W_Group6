package tourbooking.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tourbooking.entity.Tour.Tour;

import java.util.UUID;

public interface TourRepository extends JpaRepository<Tour, UUID> {
    Page<Tour> findAll(Pageable pageable);

    @Query("SELECT DISTINCT t FROM tour t " +
            "JOIN t.tourDetail td " +
            "WHERE t.title like %:keyWord% or " +
            "t.endLocation like %:keyWord% or " +
            "td.time like %:keyWord% or " +
            "td.vehicle like %:keyWord% or " +
            "td.location like %:keyWord% or " +
            "td.food like %:keyWord% or " +
            "td.hotel like %:keyWord%   ")
    Page<Tour> searchByKeyWord(String keyWord, Pageable pageable);
}
