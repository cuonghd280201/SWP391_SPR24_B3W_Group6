package tourbooking.service;

import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.UpdateProfileForm;

import java.security.Principal;

public interface UserService {
    ResponseEntity<BaseResponseDTO> saveUser(String uid) throws FirebaseAuthException;
    ResponseEntity<BaseResponseDTO> viewUserProfile(Principal principal);
    ResponseEntity<BaseResponseDTO> updateProfile(Principal principal, UpdateProfileForm updateProfileForm);
}
