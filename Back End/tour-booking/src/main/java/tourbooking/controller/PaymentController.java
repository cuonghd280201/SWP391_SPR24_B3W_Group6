package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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
public class PaymentController {
    private final PaymentServiceImpl paymentService;
    @PostMapping("/check-out")
    public ResponseEntity<BaseResponseDTO> checkOut(@RequestParam UUID uuid) {
        return paymentService.checkOut(uuid);
    }
}
