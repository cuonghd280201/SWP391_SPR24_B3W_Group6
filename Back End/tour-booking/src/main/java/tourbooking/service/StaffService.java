package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.*;
import tourbooking.entity.Tour.Tour;

import java.security.Principal;
import java.util.UUID;

public interface StaffService {
    ResponseEntity<BaseResponseDTO> createTour(Principal principal, TourCreateForm tourCreateForm);
    ResponseEntity<BaseResponseDTO> addMoreTime(TourTimeAddMoreForm tourTimeAddMoreForm);
    ResponseEntity<BaseResponseDTO> updateTime(TourTimeDTO tourTimeDTO);

    ResponseEntity<BaseResponseDTO> addMoreImage(TourImageAddMoreForm tourImageAddMoreForm);
    ResponseEntity<BaseResponseDTO> updateImage(TourImageDTO tourImageDTO);
    ResponseEntity<BaseResponseDTO> updateTour(Principal principal, Tour tour);
    ResponseEntity<BaseResponseDTO> listTour();
    ResponseEntity<BaseResponseDTO> searchTour(String title);
    ResponseEntity<BaseResponseDTO> deactivateTour(Principal principal, UUID id);
}
