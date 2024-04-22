package tourbooking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tourbooking.common.OrderStatus;

import java.math.BigDecimal;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    private UUID id;
    private BigDecimal price;
    private BigDecimal paid;
    private BigDecimal priceAfterPaid;
    private BigDecimal amount;
    private BigDecimal refund;
    private OrderStatus orderStatus;
}
