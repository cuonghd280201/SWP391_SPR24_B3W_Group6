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
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourDTO;
import tourbooking.dto.TourFilterRequest;
import tourbooking.entity.Tour.Tour;
import tourbooking.entity.Tour.TourTime;
import tourbooking.repository.TourRepository;
import tourbooking.service.TourService;
import tourbooking.utils.DateTimeUtils;

import java.math.BigDecimal;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.util.List;
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

//    private boolean matchesFilter(Tour tour, TourFilterRequest tourFilterRequest) {
//        BigDecimal tourPrice = tour.getPrice();
//        return (tourFilterRequest.getEndLocation() == null || tour.getEndLocation().equals(tourFilterRequest.getEndLocation())) &&
//                (tourFilterRequest.getMinPrice() == null || tourPrice.compareTo(tourFilterRequest.getMinPrice()) >= 0) &&
//                (tourFilterRequest.getMaxPrice() == null ||tourPrice.compareTo(tourFilterRequest.getMaxPrice()) <= 0) &&
//                (tour.getTourTimeSet().stream().map(TourTime::getStartDate).anyMatch(startDate -> {
//                    try {
//                        return startDate.equals(DateTimeUtils.convertStringToLocalDate(tourFilterRequest.getStartDate()));
//                    } catch (ParseException e) {
//                        throw new RuntimeException(e);
//                    }
//                }));
//    }

    public TourDTO convertToTourDTO(Tour tour) {
        if (tour == null) {
            return null;
        }
        return modelMapper.map(tour, TourDTO.class);
    }
}
