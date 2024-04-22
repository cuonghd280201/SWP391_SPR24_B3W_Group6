package tourbooking.service;

import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.entity.Payment;
import tourbooking.entity.Transaction;
import tourbooking.entity.User;

import java.security.Principal;

public interface TransactionService {
    Transaction createTransaction(User user, Payment payment, String description);

    ResponseEntity<BaseResponseDTO> getAllTransaction(Principal principal, int pageNumber, int pageSize, String sortBy, String sortOrder);
}
