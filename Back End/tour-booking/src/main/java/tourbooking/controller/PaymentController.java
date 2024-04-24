package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.service.impl.PaymentServiceImpl;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/payment")
@RequiredArgsConstructor
@PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_ADMIN')")
public class PaymentController {
    private final PaymentServiceImpl paymentService;
    @PostMapping("/check-out")
    public ResponseEntity<BaseResponseDTO> checkOut(@RequestParam UUID uuid) {
        return paymentService.checkOut(uuid);
    }
}
