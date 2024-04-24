package tourbooking.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;
import tourbooking.common.TimeStatus;
import tourbooking.utils.DateTimeUtils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class TourTimeDTO {
    private UUID id;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DateTimeUtils.DATE_FORMAT)
    @DateTimeFormat(pattern = DateTimeUtils.DATE_FORMAT)
    private LocalDate startDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DateTimeUtils.DATE_FORMAT)
    @DateTimeFormat(pattern = DateTimeUtils.DATE_FORMAT)
    private LocalDate endDate;

    private String startTime;

    private Integer slotNumber;

    private Integer slotNumberActual;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DateTimeUtils.DATETIME_FORMAT)
    @DateTimeFormat(pattern = DateTimeUtils.DATETIME_FORMAT)
    private LocalDateTime createDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DateTimeUtils.DATETIME_FORMAT)
    @DateTimeFormat(pattern = DateTimeUtils.DATETIME_FORMAT)
    private LocalDateTime updateDate;

    private TimeStatus timeStatus;

    private boolean deleted;

    private String code;
}
