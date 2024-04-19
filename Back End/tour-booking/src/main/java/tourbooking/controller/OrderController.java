package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourVisitorForm;
import tourbooking.service.OrderService;

import java.math.BigDecimal;
import java.security.Principal;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<BaseResponseDTO> createOrder (Principal principal,
                                                        @RequestParam UUID tourTimeId,
                                                        @RequestParam BigDecimal paid,
                                                        @RequestBody List<TourVisitorForm> tourVisitorFormList) {
        return orderService.createOrder(principal, tourTimeId, paid, tourVisitorFormList);
    }
}
