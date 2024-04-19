package tourbooking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tourbooking.entity.City;
import tourbooking.entity.Tour.TourImages;
import tourbooking.entity.Tour.TourSchedule;
import tourbooking.entity.Tour.TourTime;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TourCreateForm {

    private String title;

    private String starLocation;

    private String endLocation;

    private String description;

    private BigDecimal price;

    private String coverImage;

    private String city;

    private TourDetailCreateForm tourDetailCreateForm;

    private Set<TourScheduleCreateForm> listTourSchedule;

    private Set<TourTimeCreateForm> tourTimeCreateFormSet;

    private Set<TourImageCreateForm> tourImageCreateForms;
}
