package tourbooking.controller;

import com.google.firebase.auth.FirebaseAuthException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.service.UserService;

import java.security.Principal;

@RestController
@RequestMapping("api/v1/guest")
@RequiredArgsConstructor
public class GuestController {
    private final UserService userService;

    @PostMapping("/save")
    public ResponseEntity<BaseResponseDTO> setUserClaims(Principal principal) throws FirebaseAuthException {
        String uid = principal.getName();
        return userService.saveUser(uid);
    }
}
