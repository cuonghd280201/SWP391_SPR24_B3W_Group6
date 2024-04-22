package tourbooking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TourImageAddMoreForm {
    private UUID id;

    private Set<TourImageCreateForm> tourImageCreateFormSet;
}
