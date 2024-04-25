package tourbooking.service;

import com.google.firebase.auth.FirebaseAuthException;
import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.UpdateProfileForm;
import tourbooking.entity.User;

import java.security.Principal;
import java.util.List;
import java.util.UUID;

public interface UserService {
    ResponseEntity<BaseResponseDTO> saveUser(String uid) throws FirebaseAuthException;
    ResponseEntity<BaseResponseDTO> viewUserProfile(Principal principal);
    ResponseEntity<BaseResponseDTO> updateProfile(Principal principal, UpdateProfileForm updateProfileForm);
    ResponseEntity<BaseResponseDTO> changeUserClaims(String firebaseId, String role) throws FirebaseAuthException;

    ResponseEntity<BaseResponseDTO> disableUser(UUID id) throws FirebaseAuthException;


}
