package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.service.CityService;

@RestController
@RequestMapping("api/v1/city")
@RequiredArgsConstructor
public class CityController {
    private final CityService cityService;
    @GetMapping("/all")
    public ResponseEntity<BaseResponseDTO> getAllCity() {
        return cityService.getAllCity();
    }
}
