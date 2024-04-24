package tourbooking.service.impl;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.TimeStatus;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourScheduleCreateForm;
import tourbooking.dto.TourTimeCreateForm;
import tourbooking.dto.TourTimeDTO;
import tourbooking.entity.Orders;
import tourbooking.entity.Tour.TourTime;
import tourbooking.entity.Tour.TourVisitor;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.OrderRepository;
import tourbooking.repository.TourTimeRepository;
import tourbooking.repository.TourVisitorRepository;
import tourbooking.service.TourTimeService;
import tourbooking.utils.CodeGenerator;

import java.time.LocalDateTime;
import java.util.*;
@Service
public class TourTimeServiceImpl implements TourTimeService {

    private final TourTimeRepository tourTimeRepository;
    private final TourVisitorRepository tourVisitorRepository;
    private final OrderRepository orderRepository;

    public TourTimeServiceImpl(TourTimeRepository tourTimeRepository, TourVisitorRepository tourVisitorRepository, OrderRepository orderRepository) {
        this.tourTimeRepository = tourTimeRepository;
        this.tourVisitorRepository = tourVisitorRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    public Set<TourTime> createTime(Set<TourTimeCreateForm> listTourTime) {
        Set<TourTime> tourTimeList = new HashSet<>();

        for(TourTimeCreateForm tourTimeCreateForm: listTourTime) {
            TourTime tourTime = new TourTime();
            tourTime.setStartDate(tourTimeCreateForm.getStartDate());
            tourTime.setEndDate(tourTimeCreateForm.getEndDate());
            tourTime.setStartTime(tourTimeCreateForm.getStartTime());
            tourTime.setSlotNumber(tourTimeCreateForm.getSlotNumber());
            tourTime.setSlotNumberActual(0);
            tourTime.setTimeStatus(TimeStatus.ACTIVE);

            String code = CodeGenerator.generate("TM");
            while (tourTimeRepository.findByCode(code).isPresent()){
                code = CodeGenerator.generate("TM");
            }
            tourTime.setCode(code);

            tourTimeList.add(tourTime);
            tourTimeRepository.save(tourTime);
        }

        return tourTimeList;
    }

    @Override
    public void updateTime(TourTimeDTO tourTimeDTO, TourTime tourTime) {
            tourTime.setStartDate(tourTimeDTO.getStartDate());
            tourTime.setEndDate(tourTimeDTO.getEndDate());
            tourTime.setStartTime(tourTime.getStartTime());
            tourTime.setSlotNumber(tourTimeDTO.getSlotNumber());
            tourTime.setSlotNumberActual(tourTimeDTO.getSlotNumberActual());
            tourTime.setCreateDate(tourTimeDTO.getCreateDate());
            tourTime.setTimeStatus(tourTimeDTO.getTimeStatus());
            tourTime.setDeleted(tourTimeDTO.isDeleted());
            tourTimeRepository.save(tourTime);
    }

    @Override
    public TourTime findById(UUID id) {
        return tourTimeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Time not found!"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> bookingTourasUser(UUID tourTime_id, List<TourVisitor> visitorList) {
        TourTime tourTime;
        if(tourTimeRepository.findById(tourTime_id).isEmpty()){
            // The Time Tour didn't existed 404
            return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Successfully"));
        }
        tourTime = tourTimeRepository.findById(tourTime_id).get();

        int slotNumberBooking = visitorList.size();
        int slotNumberAvailable = tourTime.getSlotNumber();
        int slotNumberActual = tourTime.getSlotNumberActual();
        if(slotNumberAvailable - slotNumberBooking < 0){
            //Not allow booking
        }

        tourTime.setSlotNumber(slotNumberAvailable - slotNumberBooking);
        tourTime.setSlotNumberActual(slotNumberActual + slotNumberBooking);
        tourTimeRepository.save(tourTime);

        for(TourVisitor visitor : visitorList){
            tourVisitorRepository.save(visitor);
        }

        Orders order = new Orders(){

        };

        orderRepository.save(order);

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Successfully"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> cancelBookingasUser(UUID tourTime_id) {


        return null;
    }
}
