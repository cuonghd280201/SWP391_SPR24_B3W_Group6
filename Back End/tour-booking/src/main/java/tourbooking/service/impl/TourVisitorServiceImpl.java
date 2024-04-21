package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourVisitorDTO;
import tourbooking.entity.Tour.TourVisitor;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.TourVisitorRepository;
import tourbooking.service.TourVisitorService;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TourVisitorServiceImpl implements TourVisitorService {

    private final TourVisitorRepository tourVisitorRepository;

    @Override
    public ResponseEntity<BaseResponseDTO> updateTourVisitorById(TourVisitorDTO tourVisitorDTO) {
        TourVisitor tourVisitor = tourVisitorRepository.findById(tourVisitorDTO.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Visitor not found!"));;

        tourVisitor.setName(tourVisitorDTO.getName());
        tourVisitor.setPhone(tourVisitorDTO.getPhone());
        tourVisitor.setIdCard(tourVisitorDTO.getIdCard());
        tourVisitor.setDateOfBirth(tourVisitorDTO.getDateOfBirth());
        tourVisitor.setCreateDate(tourVisitorDTO.getCreateDate());
        tourVisitor.setTourVisitorType(tourVisitorDTO.getTourVisitorType());
        tourVisitor.setUserId(tourVisitorDTO.getUserId());
        tourVisitorRepository.save(tourVisitor);
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Update Visitor Successfully"));
    }
}
