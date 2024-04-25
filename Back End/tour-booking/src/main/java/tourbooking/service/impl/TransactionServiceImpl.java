package tourbooking.service.impl;

import jakarta.persistence.criteria.Order;
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
import tourbooking.dto.OrderDTO;
import tourbooking.dto.TransactionDTO;
import tourbooking.entity.Orders;
import tourbooking.entity.Payment;
import tourbooking.entity.Transaction;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.TransactionRepository;
import tourbooking.repository.UserRepository;
import tourbooking.service.TransactionService;
import tourbooking.utils.CodeGenerator;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;
    private final UserServiceImpl userService;
    private final TourServiceImpl tourService;
    private final ModelMapper modelMapper;

    @Override
    public void createTransaction(User user, Payment payment, String description) {

        Transaction transaction = new Transaction();
        transaction.setAmount(payment.getAmount());
        transaction.setPayment(payment);
        transaction.setUser(user);
        transaction.setDescription(description);
        transaction.setTransactionStatus(TransactionStatus.DONE);

        String code = CodeGenerator.generate("TR");
        while (transactionRepository.findByCode(code).isPresent()){
            code = CodeGenerator.generate("TR");
        }
        transaction.setCode(code);

        transactionRepository.save(transaction);

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

    @Override
    public ResponseEntity<BaseResponseDTO> getAllTransactionForStaff(Principal principal, int pageNumber, int pageSize, String sortBy, String sortOrder) {
        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        PageableRequest  pageableRequest = new PageableRequest(pageNumber, pageSize, sortBy, sortOrder);
        Pageable pageable = pageableRequest.toPageable();
        Page<Transaction> transactionPage = null;
        List<Transaction> transactionList;
        List<TransactionDTO> transactionDTOS = null;
        transactionPage = transactionRepository.findAll(pageable);
        transactionList = transactionPage.getContent();

//        List<Transaction> transactions1 = new ArrayList<>();
//        for(Transaction transaction : transactionList){
//            transactions1.add(transaction);
//        }
//        transactionList = transactions1;

//        for(Transaction transaction : transactionList){
//
//            String code = CodeGenerator.generateAddCode("TR", transaction.getCreateDate().toLocalDate());
//            while (transactionRepository.findByCode(code).isPresent()){
//                code = CodeGenerator.generateAddCode("TR", transaction.getCreateDate().toLocalDate());
//            }
//            transaction.setCode(code);
//            transactionRepository.save(transaction);
//        }


        transactionDTOS = transactionList.stream().map(this::convertToTransactionDTO).toList();
        Pagination pagination = new Pagination(transactionPage.getNumber(), transactionPage.getTotalElements(), transactionPage.getTotalPages());
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully", pagination, transactionDTOS));
    }

    public TransactionDTO convertToTransactionDTO(Transaction transaction){
        if(transaction == null){
            return null;
        }
        Orders orders = transaction.getPayment().getOrders();
        TransactionDTO transactionDTO = modelMapper.map(transaction,TransactionDTO.class);
        transactionDTO.setUserDTO(userService.convertToDTO(transaction.getUser()));
        OrderDTO orderDTO = modelMapper.map(orders, OrderDTO.class);
        orderDTO.setTourInfoDTO(tourService.convertToTourInfoDTO(orders.getTourTime().getTour()));
        transactionDTO.setOrderDTO(orderDTO);
        return transactionDTO;
    }
}
