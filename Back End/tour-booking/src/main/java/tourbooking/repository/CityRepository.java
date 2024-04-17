package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.City;

import java.util.Optional;
import java.util.UUID;

public interface CityRepository extends JpaRepository<City, UUID> {
    Optional<City> findByName(String name);
}
