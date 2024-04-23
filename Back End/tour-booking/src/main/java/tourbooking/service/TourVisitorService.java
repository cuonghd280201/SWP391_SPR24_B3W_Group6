package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourVisitorDTO;

import java.util.UUID;

public interface TourVisitorService {
    ResponseEntity<BaseResponseDTO> updateTourVisitorById(TourVisitorDTO tourVisitorDTO);
}
