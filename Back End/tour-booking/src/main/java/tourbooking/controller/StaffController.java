package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tourbooking.dto.*;
import tourbooking.service.StaffService;
import tourbooking.service.TourVisitorService;

import javax.swing.plaf.PanelUI;
import java.security.Principal;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/staff")
@RequiredArgsConstructor
public class StaffController {

    private final StaffService staffService;
    private final TourVisitorService tourVisitorService;

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

    @DeleteMapping("/tourImage/{imageId}")
    public ResponseEntity<BaseResponseDTO> deleteImage(@PathVariable("imageId") UUID imageId){
        return staffService.deleteImage(imageId);
    }

    @GetMapping("/tourTime/getTimeDetail/{timeId}")
    public ResponseEntity<BaseResponseDTO> viewTimeDetailByTimeId(@PathVariable("timeId") UUID timeId){
        return staffService.viewTourTimeDetailById(timeId);
    }

    @PutMapping("/tourVisitor/updateTourVisitor")
    public ResponseEntity<BaseResponseDTO> updateTourVisitor(@RequestBody TourVisitorDTO tourVisitorDTO){
        return tourVisitorService.updateTourVisitorById(tourVisitorDTO);
    }
    @PostMapping("/order/cancel/{orderId}")
    public ResponseEntity<BaseResponseDTO> cancelOrder(Principal principal,@PathVariable("orderId") UUID orderId) {
        return staffService.cancelOrder(principal, orderId);
    }

    @PostMapping("/order/cancel/{orderId}")
    public ResponseEntity<BaseResponseDTO> cancelOrder(Principal principal,@PathVariable("orderId") UUID orderId) {
        return staffService.cancelOrder(principal, orderId);
    }
}
