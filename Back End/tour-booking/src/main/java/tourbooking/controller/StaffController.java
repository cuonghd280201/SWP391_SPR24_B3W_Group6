package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourCreateForm;
import tourbooking.dto.TourDetailCreateForm;
import tourbooking.service.StaffService;

import java.security.Principal;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/staff")
@RequiredArgsConstructor
public class StaffController {

    private final StaffService staffService;

    @PostMapping("/tour/create")
    public ResponseEntity<BaseResponseDTO> createTour (Principal principal, @RequestBody TourCreateForm tourCreateForm){
        return staffService.createTour(principal,tourCreateForm);
    }

    @GetMapping("tourTime/get/{tourId}")
    public ResponseEntity<BaseResponseDTO> viewTourDetailsByTourId(@PathVariable("tourId") UUID tourId){
        return staffService.viewTourDetailsByTourId(tourId);
    }
}
