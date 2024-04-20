package tourbooking.service;

import tourbooking.entity.Payment;
import tourbooking.entity.Transaction;
import tourbooking.entity.User;

import java.security.Principal;

public interface TransactionService {
    Transaction createTransaction(User user, Payment payment, String description);
}
