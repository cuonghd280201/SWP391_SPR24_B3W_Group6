package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourCreateForm;
import tourbooking.dto.TourDetailCreateForm;
import tourbooking.service.StaffService;

import java.security.Principal;

@RestController
@RequestMapping("api/v1/staff")
@RequiredArgsConstructor
public class StaffController {

    private final StaffService staffService;

    @PostMapping("/tour/create")
    public ResponseEntity<BaseResponseDTO> createTour (Principal principal, @RequestBody TourCreateForm tourCreateForm){
        return staffService.createTour(principal,tourCreateForm);
    }
}
