package tourbooking.service;

import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.http.ResponseEntity;
import tourbooking.common.OrderStatus;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourCreateForm;
import tourbooking.dto.TourTimeCreateForm;
import tourbooking.dto.UpdateProfileForm;
import tourbooking.entity.Tour.Tour;

import java.security.Principal;
import java.util.UUID;

public interface AdminService {
    ResponseEntity<BaseResponseDTO>countAllUser();

    ResponseEntity<BaseResponseDTO> getOrderSummary();
    ResponseEntity<BaseResponseDTO> getAllOrderByStatus(OrderStatus orderStatus);
}
