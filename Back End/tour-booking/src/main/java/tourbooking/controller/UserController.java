package tourbooking.controller;

import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.UpdateProfileForm;
import tourbooking.service.UserService;

import java.security.Principal;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
@PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_ADMIN')")
public class UserController {
    private final UserService userService;
    @PutMapping("/update")
    public ResponseEntity<BaseResponseDTO> updateProfile(Principal principal, @RequestBody UpdateProfileForm updateProfileForm) {
        return userService.updateProfile(principal, updateProfileForm);
    }
    @GetMapping("/profile")
    public ResponseEntity<BaseResponseDTO> viewUserProfile(Principal principal) {
        return userService.viewUserProfile(principal);
    }
    @PostMapping("/role/change")
    ResponseEntity<BaseResponseDTO> changeUserClaims(@RequestParam String firebaseId, @RequestParam String role) throws FirebaseAuthException {
        return userService.changeUserClaims(firebaseId, role);
    }
}
