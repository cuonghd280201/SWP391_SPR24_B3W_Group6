package tourbooking.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import tourbooking.common.TourStatus;
import tourbooking.entity.City;
import tourbooking.entity.Tour.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TourTimeInfoDTO {
    //Time Table
    private UUID tourTimeId;
    private LocalDate startDate;
    private LocalDate endDate;
    private String startTime;
    private Integer slotNumber;
    private Integer slotNumberActual;
    private LocalDateTime createDate;
    private LocalDateTime updateDate;

    private Tour tour;
    private TourDetail tourDetail;


    //Tour Table
    private UUID tourId;
    private String title;
    private String starLocation;
    private String endLocation;
    private String description;
    private BigDecimal price;
    private String coverImage;
    private String createBy;
    private String updateBy;

//    private LocalDateTime createDate;
//
//    private LocalDateTime updateDate;

    private Set<TourImages> tourImages;

    private Set<TourSchedule> scheduleList;

    private Set<TourTime> timeList;

    private City city;

    private TourStatus tourStatus;
}
