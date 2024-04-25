package tourbooking.controller;
import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tourbooking.common.OrderStatus;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.OrderDetailDTO;
import tourbooking.dto.UserDTO;
import tourbooking.entity.Transaction;
import tourbooking.entity.User;
import tourbooking.service.AdminService;
import tourbooking.service.OrderService;
import tourbooking.service.TransactionService;
import tourbooking.service.impl.AdminServiceImpl;
import tourbooking.service.impl.TourServiceImpl;
import tourbooking.service.impl.UserServiceImpl;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/dashboard")
@RequiredArgsConstructor
public class DashboardController {

//    @Autowired
    private final AdminService adminService;
    private final UserServiceImpl userService;
    private final TransactionService transactionService;
    private final OrderService orderService;

    @GetMapping("/getAllUser")
    public ResponseEntity<BaseResponseDTO> dashboard() {
        List<UserDTO> userList = userService.getAllUsers();
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Get All User Successfully", userList));
    }

    @GetMapping("/getAllStaff")
    public ResponseEntity<BaseResponseDTO> dashboard1() {
        List<UserDTO> userList = userService.getAllStaff();
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Get All Staff Successfully", userList));
    }

    @GetMapping("/getRoleNumber")
    public ResponseEntity<BaseResponseDTO> getRoleNumber() {
        return adminService.countAllUser();
    }
    @GetMapping("/transactions")
    public ResponseEntity<BaseResponseDTO> getAllTransaction(Principal principal,
                                                             @Min(value = 0, message = "pageNumber must be greater than or equal to 0")
                                                             @RequestParam(defaultValue = "0") int pageNumber,

                                                             @Min(value = 1, message = "pageSize must be greater than or equal to 1")
                                                                 @Max(value = 100, message = "pageSize must be less than or equal to 100")
                                                                 @RequestParam(defaultValue = "6") int pageSize,

                                                             @Parameter(description = "Sort by (EX: title, price,...)")
                                                                 @RequestParam(defaultValue = "createDate") String sortBy,

                                                             @Parameter(description = "Sort order (EX: asc, desc)")
                                                                 @RequestParam(defaultValue = "desc") String sortOrder) {

        return transactionService.getAllTransaction(principal,pageNumber,pageSize,sortBy,sortOrder);
        // Xử lý dữ liệu và trả về response
    }
    @GetMapping("/orderSumary")
    public ResponseEntity<BaseResponseDTO> getOrderSumary() {
        return adminService.getOrderSummary();
    }

    @GetMapping("/orderStatus")
    public ResponseEntity<BaseResponseDTO> getAllOrderByStatus( @RequestParam OrderStatus orderStatus) {
        return adminService.getAllOrderByStatus(orderStatus);
    }

}
