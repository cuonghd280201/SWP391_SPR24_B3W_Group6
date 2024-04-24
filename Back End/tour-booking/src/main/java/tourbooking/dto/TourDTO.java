package tourbooking.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;
import tourbooking.common.TourStatus;
import tourbooking.utils.DateTimeUtils;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TourDTO {
    private UUID id;
    private String title;

    private String starLocation;

    private String endLocation;

    private String description;

    private BigDecimal price;

    private String coverImage;

    private TourStatus tourStatus;

    private String createBy;

    private String updateBy;

    @CreatedDate
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DateTimeUtils.DATETIME_FORMAT)
    @DateTimeFormat(pattern = DateTimeUtils.DATETIME_FORMAT)
    private LocalDateTime createDate;

    @LastModifiedDate
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DateTimeUtils.DATETIME_FORMAT)
    @DateTimeFormat(pattern = DateTimeUtils.DATETIME_FORMAT)
    private LocalDateTime updateDate;

    private String code;
}
