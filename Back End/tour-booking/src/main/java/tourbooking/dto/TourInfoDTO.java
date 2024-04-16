package tourbooking.dto;

import tourbooking.common.TourStatus;
import tourbooking.entity.City;
import tourbooking.entity.Tour.TourDetail;
import tourbooking.entity.Tour.TourImages;
import tourbooking.entity.Tour.TourSchedule;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;
import java.util.List;

public class TourInfoDTO {
    private UUID tour_id;

    private String title;

    private String starLocation;

    private String endLocation;

    private String description;

    private BigDecimal price;

    private String coverImage;

    private String createBy;

    private String updateBy;

    private LocalDateTime createDate;

    private LocalDateTime updateDate;

    private List<TourImages> tourImages;

    private List<TourSchedule> scheduleList;

    private City city;

    private TourDetail tourDetail;

    private TourStatus tourStatus;
}
