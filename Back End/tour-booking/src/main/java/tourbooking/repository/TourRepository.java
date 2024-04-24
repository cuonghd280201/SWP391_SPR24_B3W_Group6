package tourbooking.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tourbooking.entity.Tour.Tour;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TourRepository extends JpaRepository<Tour, UUID> {


    Page<Tour> findAll(Pageable pageable);

    @Query("SELECT DISTINCT t FROM Tour t " +
            "JOIN t.tourDetail td " +
            "WHERE t.title like %:keyWord% or " +
            "t.endLocation like %:keyWord% or t.code like %:keyWord% or " +
            "td.time like %:keyWord% or " +
            "td.vehicle like %:keyWord% or " +
            "td.location like %:keyWord% or " +
            "td.food like %:keyWord% or " +
            "td.hotel like %:keyWord%")
    Page<Tour> searchByKeyWord(String keyWord, Pageable pageable);

    Optional<Tour> findByCode(String code);
    @Query("SELECT DISTINCT t FROM Tour t JOIN t.tourTimeSet tt JOIN tt.ordersSet o WHERE t.code LIKE %:keyWord%")
    List<Tour> findTourByKeyWordHasTourTimeHaveOrder(@Param("keyWord") String keyWord);

    @Query("SELECT DISTINCT t FROM Tour t JOIN t.tourTimeSet tt JOIN tt.ordersSet o")
    List<Tour> findTourHasTourTimeHaveOrder();

}
