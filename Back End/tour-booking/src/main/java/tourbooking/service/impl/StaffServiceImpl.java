package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.TourStatus;
import tourbooking.dto.*;
import tourbooking.entity.Tour.*;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.*;
import tourbooking.service.StaffService;
import tourbooking.service.TourDetailService;
import tourbooking.utils.DateTimeUtils;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class StaffServiceImpl implements StaffService {

    private final ModelMapper modelMapper;
    private final TourRepository tourRepository;
    private final TourTimeRepository tourTimeRepository;
    private final TourScheduleRepository tourScheduleRepository;
    private final TourImagesRepository tourImagesRepository;
    private final UserRepository userRepository;
    private final CityRepository cityRepository;
    private final TourTimeServiceImpl tourTimeService;
    private final TourDetailServiceImpl tourDetailService;
    private final TourScheduleServiceImpl tourScheduleService;
    private final TourImageServiceImpl tourImageService;

    @Override
    public ResponseEntity<BaseResponseDTO> createTour(Principal principal, TourCreateForm tourCreateForm) {
        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        TourDetail tourDetail = tourDetailService.createTourDetail(user, tourCreateForm.getTourDetailCreateForm());

        Set<TourTime> tourTimeSet = tourTimeService.createTime(tourCreateForm.getTourTimeCreateFormSet());
        Set<TourSchedule> tourScheduleSet = tourScheduleService.createTourSchedule(tourCreateForm.getListTourSchedule());
        Set<TourImages> tourImagesSet = tourImageService.createImage(tourCreateForm.getTourImageCreateForms());

        Tour tour = new Tour();
        tour.setTitle(tourCreateForm.getTitle());
        tour.setStarLocation(tourCreateForm.getStarLocation());
        tour.setEndLocation(tourCreateForm.getEndLocation());
        tour.setDescription(tourCreateForm.getDescription());
        tour.setPrice(tourCreateForm.getPrice());
        tour.setCoverImage(tourCreateForm.getCoverImage());
        tour.setCity(cityRepository.findByName(tourCreateForm.getCity())
                .orElseThrow(() -> new ResourceNotFoundException("City not found!")));
        tour.setTourStatus(TourStatus.ACTIVE);
        tour.setCreateBy(user.getName());
        tour.setTourDetail(tourDetail);
        tour.setTourTimeSet(tourTimeSet);
        tour.setTourSchedules(tourScheduleSet);
        tour.setTourImagesSet(tourImagesSet);
        tourRepository.save(tour);
        for(TourTime tourTime: tourTimeSet) {
            tourTime.setTour(tour);
            tourTimeRepository.save(tourTime);
        }

        for(TourSchedule tourSchedule : tourScheduleSet){
            tourSchedule.setTour(tour);
            tourScheduleRepository.save(tourSchedule);
        }

        for(TourImages tourImages : tourImagesSet){
            tourImages.setTour(tour);
            tourImagesRepository.save(tourImages);
        }

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Create Successfully"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> addMoreTime(TourTimeAddMoreForm tourTimeAddMoreForm) {
        Tour tour = tourRepository.findById(tourTimeAddMoreForm.getId()).orElseThrow(() -> new ResourceNotFoundException("Tour not found!"));

        Set<TourTime> tourTimeSet = tourTimeService.createTime(tourTimeAddMoreForm.getTourTimeCreateFormSet());
        tour.setTourTimeSet(tourTimeSet);
        for(TourTime tourTime : tourTimeSet){
            tourTime.setTour(tour);
            tourTimeRepository.save(tourTime);
        }

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Add More Time Successfully"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> updateTime(TourTimeDTO tourTimeDTO) {
        TourTime tourTime = tourTimeService.findById(tourTimeDTO.getId());
        int dateCompareResult = DateTimeUtils.actualCompareInfo(LocalDate.now(), tourTime.getEndDate());
        if(tourTime.getSlotNumberActual() == 0 || dateCompareResult > 0){
            tourTimeService.updateTime(tourTimeDTO, tourTime);
        }else {
            return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.METHOD_NOT_ALLOWED, "This Time has been booked!"));
        }
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Update Time Successfully!"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> updateTour(Principal principal, Tour tour) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> viewTourDetailsByTourId(UUID tourId) {

        Tour tour = tourRepository.findById(tourId).orElseThrow(() -> new ResourceNotFoundException("Tour not found!"));
        TourInfoDTO tourInfoDTO = convertToTourInfoDTO(tour);
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.FOUND, "Get Tour Detail Successfully!", tourInfoDTO));
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

    public TourInfoDTO convertToTourInfoDTO(Tour tour){
        TourInfoDTO tourInfoDTO = modelMapper.map(tour, TourInfoDTO.class);
        if(tour.getTourSchedules() == null){
            tourInfoDTO.setTourSchedules(null);
        }
        if(tour.getTourTimeSet() == null){
            tourInfoDTO.setTourTimeSet(null);
        }
        if(tour.getTourImagesSet() == null){
            tourInfoDTO.setTourImagesSet(null);
        }
        if(tour.getTourDetail() == null){
            tourInfoDTO.setTourDetail(null);
        }

        TourDetailDTO tourDetailDTO = modelMapper.map(tour.getTourDetail(), TourDetailDTO.class);

        Set<TourImageDTO> tourImageDTOSet = new HashSet<>();
        for(TourImages tourImages : tour.getTourImagesSet()){
            TourImageDTO tourImageDTO = modelMapper.map(tourImages, TourImageDTO.class);
            tourImageDTOSet.add(tourImageDTO);
        }

        Set<TourScheduleDTO> tourScheduleDTOSet = new HashSet<>();
        for(TourSchedule tourSchedule : tour.getTourSchedules()){
            TourScheduleDTO tourScheduleDTO = modelMapper.map(tourSchedule, TourScheduleDTO.class);
            tourScheduleDTOSet.add(tourScheduleDTO);
        }

        Set<TourTimeDTO> tourTimeDTOSet = new HashSet<>();
        for(TourTime tourTime : tour.getTourTimeSet()){
            TourTimeDTO tourTimeDTO = modelMapper.map(tourTime, TourTimeDTO.class);
            tourTimeDTOSet.add(tourTimeDTO);
        }

        tourInfoDTO.setTourDetail(tourDetailDTO);
        tourInfoDTO.setTourImagesSet(tourImageDTOSet);
        tourInfoDTO.setTourSchedules(tourScheduleDTOSet);
        tourInfoDTO.setTourTimeSet(tourTimeDTOSet);

        return tourInfoDTO;
    }
}
