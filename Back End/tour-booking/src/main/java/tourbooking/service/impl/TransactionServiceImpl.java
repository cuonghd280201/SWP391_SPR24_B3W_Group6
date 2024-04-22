package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.PageableRequest;
import tourbooking.common.Pagination;
import tourbooking.common.TransactionStatus;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TransactionDTO;
import tourbooking.entity.Payment;
import tourbooking.entity.Transaction;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.TransactionRepository;
import tourbooking.repository.UserRepository;
import tourbooking.service.TransactionService;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public Transaction createTransaction(User user, Payment payment, String description) {

        Transaction transaction = new Transaction();
        transaction.setAmount(payment.getAmount());
        transaction.setPayment(payment);
        transaction.setUser(user);
        transaction.setDescription(description);
        transaction.setTransactionStatus(TransactionStatus.DONE);
        transactionRepository.save(transaction);

        return transaction;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> getAllTransaction(Principal principal, int pageNumber, int pageSize, String sortBy, String sortOrder) {
        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        PageableRequest  pageableRequest = new PageableRequest(pageNumber, pageSize, sortBy, sortOrder);
        Pageable pageable = pageableRequest.toPageable();
        Page<Transaction> transactionPage = null;
        List<Transaction> transactionList;
        List<TransactionDTO> transactionDTOS = null;
        transactionPage = transactionRepository.findAll(pageable);
        transactionList = transactionPage.getContent();

        List<Transaction> transactions1 = new ArrayList<>();
        if(user.getRole().getName().equals("USER")){
            for(Transaction transaction : transactionList){
                if(transaction.getUser().getId().equals(user.getId()))
                    transactions1.add(transaction);
            }
            transactionList = transactions1;
        }

        transactionDTOS = transactionList.stream().map(this::convertToTransactionDTO).toList();
        Pagination pagination = new Pagination(transactionPage.getNumber(), transactionPage.getTotalElements(), transactionPage.getTotalPages());
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully", pagination, transactionDTOS));
    }

    public TransactionDTO convertToTransactionDTO(Transaction transaction){
        if(transaction == null){
            return null;
        }
        return modelMapper.map(transaction,TransactionDTO.class);
    }
}
