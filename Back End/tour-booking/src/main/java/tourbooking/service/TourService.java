package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.entity.Tour.Tour;

import java.util.UUID;

public interface TourService {
    ResponseEntity<BaseResponseDTO> createTour(Tour tour);
    ResponseEntity<BaseResponseDTO> updateTour(Tour tour);
    ResponseEntity<BaseResponseDTO> viewTourDetails(UUID id);
    ResponseEntity<BaseResponseDTO> listTourDetails();
    ResponseEntity<BaseResponseDTO> searchTour(String title);
    ResponseEntity<BaseResponseDTO> deactivateTour(UUID id);
}
