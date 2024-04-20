package tourbooking.vnpay.service;

import jakarta.servlet.http.HttpServletRequest;

public interface VnPayService {
    String handleVnPayIPN(HttpServletRequest request);
}
