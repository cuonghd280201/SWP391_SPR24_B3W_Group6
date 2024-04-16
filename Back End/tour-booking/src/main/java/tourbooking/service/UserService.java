package tourbooking.service;

import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;

public interface UserService {
    ResponseEntity<BaseResponseDTO> saveUser(String uid) throws FirebaseAuthException;
}
