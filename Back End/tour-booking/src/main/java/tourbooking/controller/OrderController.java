package tourbooking.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tourbooking.common.OrderStatus;
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
@PreAuthorize("hasAuthority('ROLE_USER') or hasAuthority('ROLE_STAFF') or hasAuthority('ROLE_ADMIN')")
public class OrderController {
    private final OrderService orderService;

    @PostMapping("/create")
    public ResponseEntity<BaseResponseDTO> createOrder (Principal principal,
                                                        @RequestParam UUID tourTimeId,
                                                        @RequestParam BigDecimal paid,
                                                        @RequestBody List<TourVisitorForm> tourVisitorFormList) {
        return orderService.createOrder(principal, tourTimeId, paid, tourVisitorFormList);
    }
    @GetMapping("/all")
    public ResponseEntity<BaseResponseDTO> getAllOrderByUser (Principal principal, @RequestParam OrderStatus orderStatus, @RequestParam String keyWord) {
        return orderService.getAllOrder(principal, orderStatus, keyWord);
    }
    @GetMapping("/{orderId}")
    public ResponseEntity<BaseResponseDTO> getOrderDetailById (@PathVariable("orderId") UUID uuid) {
        return orderService.getOrderDetailById(uuid);
    }

    @PostMapping("/cancel/{orderId}")
    public ResponseEntity<BaseResponseDTO> requestCancelOrder(@PathVariable("orderId") UUID orderId) {
        return orderService.cancelOrder(orderId);
    }
}
