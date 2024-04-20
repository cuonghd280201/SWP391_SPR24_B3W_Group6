package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tourbooking.common.TransactionStatus;
import tourbooking.entity.Payment;
import tourbooking.entity.Transaction;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.TransactionRepository;
import tourbooking.repository.UserRepository;
import tourbooking.service.TransactionService;

import java.security.Principal;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;

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
}
