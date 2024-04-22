package tourbooking.vnpay.service.impl;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tourbooking.common.PaymentStatus;
import tourbooking.entity.Payment;
import tourbooking.repository.PaymentRepository;
import tourbooking.service.PaymentService;
import tourbooking.vnpay.config.VnPayConfig;
import tourbooking.vnpay.service.VnPayService;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class VnPayServiceImpl implements VnPayService {
    private final PaymentRepository paymentRepository;
    //private final PaymentService paymentService;
    @Override
    public String handleVnPayIPN(HttpServletRequest request) {
        try
        {

        /*  IPN URL: Record payment results from VNPAY
        Implementation steps:
        Check checksum
        Find transactions (vnp_TxnRef) in the database (checkOrderId)
        Check the payment status of transactions before updating (checkOrderStatus)
        Check the amount (vnp_Amount) of transactions before updating (checkAmount)
        Update results to Database
        Return recorded results to VNPAY
        */

            // ex:  	PaymnentStatus = 0; pending
            //              PaymnentStatus = 1; success
            //              PaymnentStatus = 2; Faile

            //Begin process return from VNPAY
            Map fields = new HashMap();
            for (Enumeration params = request.getParameterNames(); params.hasMoreElements();) {
                String fieldName = URLEncoder.encode((String) params.nextElement(), StandardCharsets.US_ASCII);
                String fieldValue = URLEncoder.encode(request.getParameter(fieldName), StandardCharsets.US_ASCII);
                if ((fieldValue != null) && (fieldValue.length() > 0)) {
                    fields.put(fieldName, fieldValue);
                }
            }

            String vnp_SecureHash = request.getParameter("vnp_SecureHash");
            String vnPayCode = request.getParameter("vnp_TxnRef");
            String amount = request.getParameter("vnp_Amount");
            Payment payment = paymentRepository.getPaymentByVnPayCode(vnPayCode);
            if (fields.containsKey("vnp_SecureHashType"))
            {
                fields.remove("vnp_SecureHashType");
            }
            if (fields.containsKey("vnp_SecureHash"))
            {
                fields.remove("vnp_SecureHash");
            }

            // Check checksum
            String signValue = VnPayConfig.hashAllFields(fields);
            if (signValue.equals(vnp_SecureHash))
            {

                //boolean checkOrderId = true; // vnp_TxnRef exists in your database
                boolean checkAmount = true; // vnp_Amount is valid (Check vnp_Amount VNPAY returns compared to the
                boolean checkOrderStatus = true; // PaymnentStatus = 0 (pending)


                if(checkOrderId(payment))
                {
                    if(checkAmount)
                    {
                        if (checkOrderStatus)
                        {
                            if ("00".equals(request.getParameter("vnp_ResponseCode")))
                            {
                                //Here Code update PaymnentStatus = 1 into your Database
                                payment.setPaymentStatus(PaymentStatus.DONE);
                                paymentRepository.saveAndFlush(payment);
                                //Add balance
                                //paymentService.addBalance(payment);
                            }
                            else
                            {
                                // Here Code update PaymnentStatus = 2 into your Database
                                payment.setPaymentStatus(PaymentStatus.NOT_DONE);
                            }
                            return "{\"RspCode\":\"00\",\"Message\":\"Confirm Success\"}";
                        }
                        else
                        {

                            return "{\"RspCode\":\"02\",\"Message\":\"Order already confirmed\"}";
                        }
                    }
                    else
                    {
                        return "{\"RspCode\":\"04\",\"Message\":\"Invalid Amount\"}";
                    }
                }
                else
                {
                    return "{\"RspCode\":\"01\",\"Message\":\"Order not Found\"}";
                }
            }
            else
            {
                return "{\"RspCode\":\"97\",\"Message\":\"Invalid Checksum\"}";
            }
        }
        catch(Exception e)
        {
            return "{\"RspCode\":\"99\",\"Message\":\"Unknow error\"}";
        }
    }

    private boolean checkOrderId(Payment payment) {
        // Check if vnp_TxnRef exists in your database
        return payment != null;
    }
}
