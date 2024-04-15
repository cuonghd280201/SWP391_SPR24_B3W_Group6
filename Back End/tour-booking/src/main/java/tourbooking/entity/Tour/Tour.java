package tourbooking.entity.Tour;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;
import org.hibernate.annotations.Where;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;
import tourbooking.common.TourStatus;
import tourbooking.entity.City;
import tourbooking.utils.DateTimeUtils;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
@Builder
@Where(clause = "deleted=false")
public class Tour {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.RANDOM)
    private UUID id;

    private String title;

    private String starLocation;

    private String endLocation;

    private String description;

    private BigDecimal price;

    private String coverImage;

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

    @Enumerated(EnumType.STRING)
    private TourStatus tourStatus;

    private boolean deleted = Boolean.FALSE;

    @OneToMany(mappedBy = "tour", cascade = CascadeType.ALL)
    private Set<TourImages> tourImagesSet;

    @OneToMany(mappedBy = "tour", cascade = CascadeType.ALL)
    private Set<TourSchedule> tourSchedules;

    @OneToMany(mappedBy = "tour", cascade = CascadeType.ALL)
    private Set<TourTime> tourTimeSet;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id")
    private City city;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "tour_detail_id", referencedColumnName = "id")
    private TourDetail tourDetail;
}
