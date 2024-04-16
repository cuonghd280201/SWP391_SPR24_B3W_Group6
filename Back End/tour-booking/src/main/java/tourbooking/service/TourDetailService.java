package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourDetailCreateForm;

import java.security.Principal;

public interface TourDetailService {
    ResponseEntity<BaseResponseDTO> createTourDetail(Principal principal, TourDetailCreateForm tourDetailCreateForm);
}
