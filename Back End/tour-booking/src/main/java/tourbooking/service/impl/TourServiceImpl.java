package tourbooking.service.impl;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.entity.Tour.Tour;
import tourbooking.repository.TourRepository;
import tourbooking.service.TourService;

import java.util.UUID;

public class TourServiceImpl implements TourService {

    private final TourRepository tourRepository;

    public TourServiceImpl(TourRepository tourRepository) {
        this.tourRepository = tourRepository;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> createTour(Tour tour) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> updateTour(Tour tour) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> viewTourDetails(UUID id) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> listTourDetails() {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> searchTour(String title) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> deactivateTour(UUID id) {
        return null;
    }
}
