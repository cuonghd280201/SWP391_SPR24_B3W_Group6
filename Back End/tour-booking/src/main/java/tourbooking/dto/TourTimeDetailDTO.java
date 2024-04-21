package tourbooking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TourTimeDetailDTO {

    private TourTimeDTO tourTimeDTO;

    private TourDTO tourDTO;

    private Set<GroupVisitorDTO> groupVisitorDTOSet;

}
