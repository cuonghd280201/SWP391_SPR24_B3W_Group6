package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourCreateForm;
import tourbooking.dto.TourDetailCreateForm;
import tourbooking.entity.Tour.Tour;

import java.security.Principal;
import java.util.UUID;

public interface StaffService {
    ResponseEntity<BaseResponseDTO> createTour(Principal principal, TourCreateForm tourCreateForm);
    ResponseEntity<BaseResponseDTO> updateTour(Principal principal, Tour tour);
    ResponseEntity<BaseResponseDTO> viewTourDetails(UUID id);
    ResponseEntity<BaseResponseDTO> listTour();
    ResponseEntity<BaseResponseDTO> searchTour(String title);
    ResponseEntity<BaseResponseDTO> deactivateTour(Principal principal, UUID id);
}
