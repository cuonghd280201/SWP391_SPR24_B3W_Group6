package tourbooking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tourbooking.common.OrderStatus;

import java.math.BigDecimal;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class GroupVisitorDTO {

    private UserDTO userDTO;

    private OrderDTO orderDTO;

    private Set<TourVisitorDTO> tourVisitorDTOSet;
}
