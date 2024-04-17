package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourDetailCreateForm;
import tourbooking.service.TourDetailService;

import java.security.Principal;

@RestController
@RequestMapping("api/v1/tour-detail")
@PreAuthorize("hasAuthority('ROLE_USER')")
@RequiredArgsConstructor
public class TourDetailController {
    private final TourDetailService tourDetailService;

    @PostMapping("/create")
    public ResponseEntity<BaseResponseDTO> createTourDetail(Principal principal, @RequestBody TourDetailCreateForm tourDetailCreateForm) {
//        return tourDetailService.createTourDetail(principal, tourDetailCreateForm);
        return null;
    }
}
