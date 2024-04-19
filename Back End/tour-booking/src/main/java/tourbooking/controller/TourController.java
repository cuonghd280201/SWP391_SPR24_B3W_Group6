package tourbooking.controller;

import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourFilterRequest;
import tourbooking.service.TourService;

import java.math.BigDecimal;

@RestController
@RequestMapping("api/v1/tour")
@RequiredArgsConstructor
public class TourController {
    private final TourService tourService;
    @GetMapping("/all")
    public ResponseEntity<BaseResponseDTO> getAllTour (@Min(value = 0, message = "pageNumber must be greater than or equal to 0")
                                                       @RequestParam(defaultValue = "0") int pageNumber,

                                                       @Min(value = 1, message = "pageSize must be greater than or equal to 1")
                                                       @Max(value = 100, message = "pageSize must be less than or equal to 100")
                                                       @RequestParam(defaultValue = "6") int pageSize,

                                                       @Parameter(description = "Sort by (EX: title, price,...)")
                                                       @RequestParam(defaultValue = "title") String sortBy,

                                                       @Parameter(description = "Sort order (EX: asc, desc)")
                                                       @RequestParam(defaultValue = "desc") String sortOrder) {
        return tourService.getAllTour(pageNumber,pageSize,sortBy,sortOrder);
    }
    @PostMapping("/filter")
    public ResponseEntity<BaseResponseDTO> searchAndFilterTour(@Min(value = 0, message = "pageNumber must be greater than or equal to 0")
                                                                   @RequestParam(defaultValue = "0") int pageNumber,

                                                               @Min(value = 1, message = "pageSize must be greater than or equal to 1")
                                                                   @Max(value = 100, message = "pageSize must be less than or equal to 100")
                                                                   @RequestParam(defaultValue = "6") int pageSize,

                                                               @Parameter(description = "Sort by (EX: title, price,...)")
                                                                   @RequestParam(defaultValue = "title") String sortBy,

                                                               @Parameter(description = "Sort order (EX: asc, desc)")
                                                                   @RequestParam(defaultValue = "desc") String sortOrder,
                                                               @RequestParam(required = false) String keyWord,
                                                               @RequestParam(required = false) String endLocation,
                                                               @RequestParam(required = false) BigDecimal minPrice,
                                                               @RequestParam(required = false )BigDecimal maxPrice,
                                                               @RequestParam(required = false) String startDate) {
        return tourService.searchAndFilterTour(pageNumber, pageSize, sortBy, sortOrder, keyWord, endLocation, minPrice, maxPrice, startDate);
    }
}
