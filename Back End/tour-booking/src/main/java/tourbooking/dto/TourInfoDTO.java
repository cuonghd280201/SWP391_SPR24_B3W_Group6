package tourbooking.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;
import tourbooking.common.TourStatus;
import tourbooking.entity.City;
import tourbooking.entity.Tour.TourDetail;
import tourbooking.entity.Tour.TourImages;
import tourbooking.entity.Tour.TourSchedule;
import tourbooking.entity.Tour.TourTime;
import tourbooking.utils.DateTimeUtils;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TourInfoDTO {
    private UUID id;

    private String title;

    private String starLocation;

    private String endLocation;

    private String description;

    private BigDecimal price;

    private String coverImage;

    private String createBy;

    private String updateBy;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DateTimeUtils.DATETIME_FORMAT)
    @DateTimeFormat(pattern = DateTimeUtils.DATETIME_FORMAT)
    private LocalDateTime createDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DateTimeUtils.DATETIME_FORMAT)
    @DateTimeFormat(pattern = DateTimeUtils.DATETIME_FORMAT)
    private LocalDateTime updateDate;

    @Enumerated(EnumType.STRING)
    private TourStatus tourStatus;

    private boolean deleted;

    private Set<TourImageDTO> tourImagesSet;

    private Set<TourScheduleDTO> tourSchedules;

    private Set<TourTimeDTO> tourTimeSet;

//    private City city;

    private TourDetailDTO tourDetail;

    private String code;
}
