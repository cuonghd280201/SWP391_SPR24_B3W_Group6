package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.PageableRequest;
import tourbooking.common.Pagination;
import tourbooking.common.TimeStatus;
import tourbooking.dto.*;
import tourbooking.entity.Tour.Tour;
import tourbooking.entity.Tour.TourImages;
import tourbooking.entity.Tour.TourSchedule;
import tourbooking.entity.Tour.TourTime;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.TourRepository;
import tourbooking.service.TourService;
import tourbooking.utils.DateTimeUtils;

import java.math.BigDecimal;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
@Service
@RequiredArgsConstructor
public class TourServiceImpl implements TourService {
    private final TourRepository tourRepository;
    private final ModelMapper modelMapper;
    @Override
    public ResponseEntity<BaseResponseDTO> getAllTour(int pageNumber, int pageSize, String sortBy, String sortOrder) {
        PageableRequest pageableRequest = new PageableRequest(pageNumber, pageSize, sortBy, sortOrder);
        Pageable pageable = pageableRequest.toPageable();
        Page<Tour> tourPage = null;
        List<Tour> tourList;
        List<TourDTO> tourDTOS = null;
        tourPage = tourRepository.findAll(pageable);
        tourList = tourPage.getContent();
        tourDTOS = tourList.stream().map(this::convertToTourDTO).toList();
        Pagination pagination = new Pagination(tourPage.getNumber(), tourPage.getTotalElements(), tourPage.getTotalPages());
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully", pagination, tourDTOS));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> searchAndFilterTour(int pageNumber,
                                                               int pageSize,
                                                               String sortBy,
                                                               String sortOrder,
                                                               String keyWord,
                                                               String endLocation,
                                                               BigDecimal minPrice,
                                                               BigDecimal maxPrice,
                                                               String startDate) {
        PageableRequest pageableRequest = new PageableRequest(pageNumber, pageSize, sortBy, sortOrder);
        Pageable pageable = pageableRequest.toPageable();
        Page<Tour> tourPage = null;
        List<Tour> tourList = null;
        List<TourDTO> tourDTOS = null;
        if ((keyWord == null || keyWord.isEmpty())) {
            // Trường hợp không có keyWord, lọc trên toàn bộ danh sách và sau đó phân trang
            tourPage = tourRepository.findAll(pageable);
            tourList = tourPage.getContent();
            tourDTOS = tourList.stream().map(this::convertToTourDTO).toList();
        }
        if (keyWord != null) {
            tourPage = tourRepository.searchByKeyWord(keyWord, pageable);
            tourList = tourPage.getContent();
            tourDTOS = tourList.stream().map(this::convertToTourDTO).toList();
        }
        if (minPrice != null && maxPrice != null) {
            tourPage = tourRepository.findAll(pageable);
            tourList = tourPage.getContent();
            tourDTOS = tourList.stream()
                    .filter(tour -> tour.getPrice().compareTo(minPrice) >= 0 && tour.getPrice().compareTo(maxPrice) <= 0)
                    .map(this::convertToTourDTO)
                    .toList();

        }
        if(endLocation != null) {
            tourPage = tourRepository.findAll(pageable);
            tourList = tourPage.getContent();
            tourDTOS = tourList.stream().filter(tour -> tour.getEndLocation().equals(endLocation)).map(this::convertToTourDTO).toList();
        }
        if (startDate != null) {
            tourPage = tourRepository.findAll(pageable);
            tourList = tourPage.getContent();
            for (Tour tour: tourList
                 ) {
                tour.getTourTimeSet().stream().map(TourTime::getStartDate).anyMatch(tourTimeStartDate -> {
                    try {
                        return tourTimeStartDate.equals(DateTimeUtils.convertStringToLocalDate(startDate));
                    } catch (ParseException e) {
                        throw new RuntimeException(e);
                    }
                });
            }
        }
        Pagination pagination = new Pagination(tourPage.getNumber(), tourPage.getTotalElements(), tourPage.getTotalPages());
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully", pagination, tourDTOS));
    }
    @Override
    public ResponseEntity<BaseResponseDTO> viewTourDetailsByTourId(UUID tourId) {

        Tour tour = tourRepository.findById(tourId).orElseThrow(() -> new ResourceNotFoundException("Tour not found!"));
        TourInfoDTO tourInfoDTO = convertToTourInfoDTO(tour);
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.FOUND, "Get Tour Detail Successfully!", tourInfoDTO));
    }

    public TourDTO convertToTourDTO(Tour tour) {
        if (tour == null) {
            return null;
        }
        return modelMapper.map(tour, TourDTO.class);
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
            if(tourTime.getTimeStatus().equals(TimeStatus.ACTIVE)){
                TourTimeDTO tourTimeDTO = modelMapper.map(tourTime, TourTimeDTO.class);
                tourTimeDTOSet.add(tourTimeDTO);
            }
        }

        tourInfoDTO.setTourDetail(tourDetailDTO);
        tourInfoDTO.setTourImagesSet(tourImageDTOSet);
        tourInfoDTO.setTourSchedules(tourScheduleDTOSet);
        tourInfoDTO.setTourTimeSet(tourTimeDTOSet);

        return tourInfoDTO;
    }
}
