package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tourbooking.dto.*;
import tourbooking.service.StaffService;

import javax.swing.plaf.PanelUI;
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

    @PostMapping("/tourTime/addMoreTime")
    public ResponseEntity<BaseResponseDTO> addMoreTime(@RequestBody TourTimeAddMoreForm tourTimeAddMoreForm){
        return staffService.addMoreTime(tourTimeAddMoreForm);
    }

    @PutMapping("/tourTime/updateTime")
    public ResponseEntity<BaseResponseDTO> updateTime(@RequestBody TourTimeDTO tourTimeDTO){
        return staffService.updateTime(tourTimeDTO);
    }

    @PostMapping("/tourImage/addMoreImage")
    public ResponseEntity<BaseResponseDTO> addMoreImage(@RequestBody TourImageAddMoreForm tourImageAddMoreForm){
        return staffService.addMoreImage(tourImageAddMoreForm);
    }

    @PutMapping("/tourImage/updateImage")
    public ResponseEntity<BaseResponseDTO> updateImage(@RequestBody TourImageDTO tourImageDTO){
        return staffService.updateImage(tourImageDTO);
    }

    @GetMapping("tourTime/get/{tourId}")
    public ResponseEntity<BaseResponseDTO> viewTourDetailsByTourId(@PathVariable("tourId") UUID tourId){
        return staffService.viewTourDetailsByTourId(tourId);
    }
}
