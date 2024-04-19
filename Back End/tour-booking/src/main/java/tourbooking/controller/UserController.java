package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.UpdateProfileForm;
import tourbooking.service.UserService;

import java.security.Principal;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
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
}
