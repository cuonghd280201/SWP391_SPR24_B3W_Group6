package tourbooking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tourbooking.common.TourVisitorType;
import tourbooking.entity.Tour.Tour;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ListTourVisitorAndCancelDTO {
    private List<TourVisitorDTO> tourVisitorDTOList;
    private List<TourVisitorDTOCancel> tourVisitorDTOCancelList;
}
