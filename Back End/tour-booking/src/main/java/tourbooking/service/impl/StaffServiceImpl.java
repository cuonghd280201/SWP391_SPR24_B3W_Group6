package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourCreateForm;
import tourbooking.dto.TourDetailCreateForm;
import tourbooking.dto.TourTimeCreateForm;
import tourbooking.entity.Tour.Tour;
import tourbooking.entity.Tour.TourDetail;
import tourbooking.entity.Tour.TourTime;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.*;
import tourbooking.service.StaffService;
import tourbooking.service.TourDetailService;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class StaffServiceImpl implements StaffService {

    private final TourRepository tourRepository;
    private final TourTimeRepository tourTimeRepository;
    private final UserRepository userRepository;
    private final CityRepository cityRepository;
    private final TourTimeServiceImpl tourTimeService;
    private final TourDetailServiceImpl tourDetailService;

    @Override
    public ResponseEntity<BaseResponseDTO> createTour(Principal principal, TourCreateForm tourCreateForm) {


        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        TourDetail tourDetail = tourDetailService.createTourDetail(user, tourCreateForm.getTourDetailCreateForm());

        Set<TourTime> tourTimeSet = tourTimeService.createTime(tourCreateForm.getTourTimeCreateFormSet());
        Tour tour = new Tour();
        tour.setTitle(tourCreateForm.getTitle());
        tour.setStarLocation(tourCreateForm.getStarLocation());
        tour.setEndLocation(tourCreateForm.getEndLocation());
        tour.setDescription(tourCreateForm.getDescription());
        tour.setPrice(tourCreateForm.getPrice());
        tour.setCoverImage(tourCreateForm.getCoverImage());
        tour.setCity(cityRepository.findByName(tourCreateForm.getCity())
                .orElseThrow(() -> new ResourceNotFoundException("City not found!")));
        tour.setCreateBy(user.getName());
        tour.setTourDetail(tourDetail);
        tour.setTourTimeSet(tourTimeSet);
        tourRepository.save(tour);
        for(TourTime tourTime: tourTimeSet) {
            tourTime.setTour(tour);
            tourTimeRepository.save(tourTime);
        }

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Create Successfully"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> updateTour(Principal principal, Tour tour) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> viewTourDetails(UUID id) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> listTour() {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> searchTour(String title) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> deactivateTour(Principal principal, UUID id) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> createTime(TourTimeCreateForm tourTimeCreateForm) {



        return null;
    }
}
