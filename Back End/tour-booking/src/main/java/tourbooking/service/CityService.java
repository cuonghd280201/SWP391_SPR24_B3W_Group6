package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;

public interface CityService {
    ResponseEntity<BaseResponseDTO> getAllCity ();
}
