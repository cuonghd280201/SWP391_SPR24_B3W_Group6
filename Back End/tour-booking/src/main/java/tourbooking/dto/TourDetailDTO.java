package tourbooking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TourDetailDTO {
    private UUID id;

    private String time;

    private String vehicle;

    private String location;

    private String food;

    private String hotel;

    private String createBy;

    private boolean deleted;
}
