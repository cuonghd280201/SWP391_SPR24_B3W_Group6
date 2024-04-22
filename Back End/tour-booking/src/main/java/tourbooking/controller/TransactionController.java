package tourbooking.controller;

import io.swagger.v3.oas.annotations.Parameter;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.service.TransactionService;

import java.security.Principal;

@RestController
@RequestMapping("api/v1/transaction")
@RequiredArgsConstructor
public class TransactionController {
    private final TransactionService transactionService;

    @GetMapping("/all")
    public ResponseEntity<BaseResponseDTO> getAllTour (Principal principal,
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
    }
}
