package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourVisitorForm;

import java.math.BigDecimal;
import java.security.Principal;
import java.util.List;
import java.util.UUID;

public interface OrderService {
    ResponseEntity<BaseResponseDTO> createOrder (Principal principal, UUID tourTimeId, BigDecimal paid, List<TourVisitorForm> tourVisitorFormList);
}