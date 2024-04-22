package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourTimeCreateForm;
import tourbooking.dto.TourTimeDTO;
import tourbooking.entity.Tour.TourTime;
import tourbooking.entity.Tour.TourVisitor;

import java.util.List;
import java.util.Set;
import java.util.UUID;

public interface TourTimeService {
    Set<TourTime> createTime(Set<TourTimeCreateForm> listTourTime);
    void updateTime(TourTimeDTO tourTimeDTO, TourTime tourTime);
    TourTime findById(UUID id);
    ResponseEntity<BaseResponseDTO> bookingTourasUser(UUID tourTime_id, List<TourVisitor> visitorList);
    ResponseEntity<BaseResponseDTO> cancelBookingasUser(UUID tourTime_id);
}
