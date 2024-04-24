package tourbooking.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;
import tourbooking.common.OrderStatus;
import tourbooking.entity.Tour.TourTime;
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
public class Orders {
    @Id
    @UuidGenerator(style = UuidGenerator.Style.RANDOM)
    private UUID id;

    private BigDecimal price;

    private BigDecimal paid;
    private BigDecimal priceAfterPaid;
    private BigDecimal amount;

    private BigDecimal refund;
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
    private OrderStatus orderStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tour_time_id", referencedColumnName = "id")
    private TourTime tourTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "orders", cascade = CascadeType.ALL)
    private Set<Payment> paymentSet;

    private String code;
}
