package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.entity.Tour.TourVisitor;

import java.util.List;
import java.util.UUID;

public interface TourTimeService {
    ResponseEntity<BaseResponseDTO> bookingTourasUser(UUID tourTime_id, List<TourVisitor> visitorList);
    ResponseEntity<BaseResponseDTO> cancelBookingasUser(UUID tourTime_id);
}
