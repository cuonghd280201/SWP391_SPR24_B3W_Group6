package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourFilterRequest;
import tourbooking.entity.Tour.Tour;

import java.math.BigDecimal;
import java.util.UUID;

public interface TourService {
    ResponseEntity<BaseResponseDTO> getAllTour(int pageNumber,
                                               int pageSize,
                                               String sortBy,
                                               String sortOrder);

    ResponseEntity<BaseResponseDTO> searchAndFilterTour(int pageNumber,
                                                        int pageSize,
                                                        String sortBy,
                                                        String sortOrder,
                                                        String keyWord,
                                                        String endLocation,
                                                        BigDecimal minPrice,
                                                        BigDecimal maxPrice,
                                                        String startDate);

}
