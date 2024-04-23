package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;

public interface DashboardService {
    ResponseEntity<BaseResponseDTO> revenueStatistic(int days);


}
