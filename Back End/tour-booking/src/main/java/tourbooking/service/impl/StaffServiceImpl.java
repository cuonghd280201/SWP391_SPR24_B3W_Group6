package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.OrderStatus;
import tourbooking.common.TimeStatus;
import tourbooking.common.TourStatus;
import tourbooking.dto.*;
import tourbooking.entity.Banner;
import tourbooking.entity.Orders;
import tourbooking.entity.Payment;
import tourbooking.entity.Tour.*;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.*;
import tourbooking.service.BannerService;
import tourbooking.service.StaffService;
import tourbooking.utils.CodeGenerator;
import tourbooking.utils.DateTimeUtils;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.time.Period;
import java.util.*;

@Service
@RequiredArgsConstructor
public class StaffServiceImpl implements StaffService {

    private final ModelMapper modelMapper;
    private final TourRepository tourRepository;
    private final TourTimeRepository tourTimeRepository;
    private final TourScheduleRepository tourScheduleRepository;
    private final TourImagesRepository tourImagesRepository;
    private final UserRepository userRepository;
    private final CityRepository cityRepository;
    private final TourVisitorRepository tourVisitorRepository;
    private final OrderRepository orderRepository;
    private final TourTimeServiceImpl tourTimeService;
    private final TourDetailServiceImpl tourDetailService;
    private final TourScheduleServiceImpl tourScheduleService;
    private final TourImageServiceImpl tourImageService;
    private final BannerServiceImpl bannerService;
    private final BannerRepository bannerRepository;
    private final PaymentServiceImpl paymentService;
    private final TransactionServiceImpl transactionService;

    @Override
    public ResponseEntity<BaseResponseDTO> createTour(Principal principal, TourCreateForm tourCreateForm) {
        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
        List<String> listMessage = new ArrayList<>();

        if(tourCreateForm.getTourDetailCreateForm() == null){
            listMessage.add("Tour Detail needed to be input.");
        }

        if(tourCreateForm.getListTourSchedule() == null){
            listMessage.add("Tour Schedule needed to be input.");
        }else{
            int scheduleDayDistance = tourCreateForm.getListTourSchedule().size();
            Set<TourTimeCreateForm> tourTimeCreateFormSet = tourCreateForm.getTourTimeCreateFormSet();
            for(TourTimeCreateForm tourTimeCreateForm : tourTimeCreateFormSet){
                LocalDate startDate = tourTimeCreateForm.getStartDate();
                LocalDate endDate = tourTimeCreateForm.getEndDate();
                LocalDate dateNow = LocalDate.now();

                int startDateResult = DateTimeUtils.actualCompareInfo(dateNow, startDate);
                if(startDateResult >= 0){
                    listMessage.add("Start Date " + startDate+ " must be in the future.");
                }

                int endDateResult = DateTimeUtils.actualCompareInfo(dateNow, endDate);
                if(endDateResult >= 0){
                    listMessage.add("End Date " + endDate + " must be in the future.");
                }

                int bothDateResult = DateTimeUtils.actualCompareInfo(startDate, endDate);
                if(endDateResult >= 0){
                    listMessage.add("End Date " + endDate + " must be after Start Date " + startDate + " .");
                }

                Period period = startDate.until(endDate);
                int dayDistance = period.getDays();
                if((dayDistance + 1) != scheduleDayDistance){
                    listMessage.add("The number from Start Date " + startDate + " to End Date " + endDate + " doesn't match with Schedule Days.");
                }
            }
        }

        if (!listMessage.isEmpty()){
            return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.BAD_REQUEST, "These fields do not validate!", listMessage));
        }

        TourDetail tourDetail = tourDetailService.createTourDetail(user, tourCreateForm.getTourDetailCreateForm());
        Set<TourSchedule> tourScheduleSet = tourScheduleService.createTourSchedule(tourCreateForm.getListTourSchedule());

        Set<TourTime> tourTimeSet = new HashSet<>();
        if(tourCreateForm.getTourTimeCreateFormSet() != null){
            tourTimeSet = tourTimeService.createTime(tourCreateForm.getTourTimeCreateFormSet());
        }

        Set<TourImages> tourImagesSet = new HashSet<>();
        if(tourCreateForm.getTourImageCreateForms() != null){
            tourImagesSet = tourImageService.createImage(tourCreateForm.getTourImageCreateForms());
        }

        Tour tour = new Tour();
        tour.setTitle(tourCreateForm.getTitle());
        tour.setStarLocation(tourCreateForm.getStarLocation());
        tour.setEndLocation(tourCreateForm.getEndLocation());
        tour.setDescription(tourCreateForm.getDescription());
        tour.setPrice(tourCreateForm.getPrice());
        tour.setCoverImage(tourCreateForm.getCoverImage());
        tour.setCity(cityRepository.findByName(tourCreateForm.getCity())
                .orElseThrow(() -> new ResourceNotFoundException("City not found!")));
        tour.setTourStatus(TourStatus.ACTIVE);
        tour.setCreateBy(user.getName());
        tour.setTourDetail(tourDetail);
        tour.setTourTimeSet(tourTimeSet);
        tour.setTourSchedules(tourScheduleSet);
        tour.setTourImagesSet(tourImagesSet);

        String code = CodeGenerator.generate("TO");
        while (tourRepository.findByCode(code).isPresent()){
            code = CodeGenerator.generate("TO");
        }
        tour.setCode(code);

        tourRepository.save(tour);
        if(tourCreateForm.getTourTimeCreateFormSet() != null) {
            for (TourTime tourTime : tourTimeSet) {
                tourTime.setTour(tour);
                tourTimeRepository.save(tourTime);
            }
        }

        for(TourSchedule tourSchedule : tourScheduleSet){
            tourSchedule.setTour(tour);
            tourScheduleRepository.save(tourSchedule);
        }

        if(tourCreateForm.getTourImageCreateForms() != null) {
            for (TourImages tourImages : tourImagesSet) {
                tourImages.setTour(tour);
                tourImagesRepository.save(tourImages);
            }
        }

        return ResponseEntity.status(HttpStatus.CREATED).body(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Successfully"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> addMoreTime(TourTimeAddMoreForm tourTimeAddMoreForm) {
        Tour tour = tourRepository.findById(tourTimeAddMoreForm.getId()).orElseThrow(() -> new ResourceNotFoundException("Tour not found!"));

        List<String> listMessage = new ArrayList<>();
        int scheduleDayDistance = tour.getTourSchedules().size();
        Set<TourTimeCreateForm> tourTimeCreateFormSet = tourTimeAddMoreForm.getTourTimeCreateFormSet();
        for(TourTimeCreateForm tourTimeCreateForm : tourTimeCreateFormSet){
            LocalDate startDate = tourTimeCreateForm.getStartDate();
            LocalDate endDate = tourTimeCreateForm.getEndDate();
            LocalDate dateNow = LocalDate.now();

            int startDateResult = DateTimeUtils.actualCompareInfo(dateNow, startDate);
            if(startDateResult >= 0){
                listMessage.add("Start Date " + startDate+ " must be in the future.");
            }

            int endDateResult = DateTimeUtils.actualCompareInfo(dateNow, endDate);
            if(endDateResult >= 0){
                listMessage.add("End Date " + endDate + " must be in the future.");
            }

            int bothDateResult = DateTimeUtils.actualCompareInfo(startDate, endDate);
            if(endDateResult >= 0){
                listMessage.add("End Date " + endDate + " must be after Start Date " + startDate + " .");
            }

            Period period = startDate.until(endDate);
            int dayDistance = period.getDays();
            if((dayDistance + 1) != scheduleDayDistance){
                listMessage.add("The number from Start Date " + startDate + " to End Date " + endDate + " doesn't match with Schedule Days.");
            }
        }

        if (!listMessage.isEmpty()){
            return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.BAD_REQUEST, "These fields do not validate!", listMessage));
        }

        Set<TourTime> tourTimeSet = tourTimeService.createTime(tourTimeAddMoreForm.getTourTimeCreateFormSet());
        tour.setTourTimeSet(tourTimeSet);
        for(TourTime tourTime : tourTimeSet){
            tourTime.setTour(tour);
            tourTimeRepository.save(tourTime);
        }

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Add More Time Successfully"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> updateTime(TourTimeDTO tourTimeDTO) {
        TourTime tourTime = tourTimeService.findById(tourTimeDTO.getId());

        LocalDate startDate = tourTimeDTO.getStartDate();
        LocalDate endDate = tourTimeDTO.getEndDate();

        if(startDate == null)
            tourTime.setStartTime(tourTime.getStartTime());
        if(endDate == null)
            tourTime.setEndDate(tourTime.getEndDate());
        if(tourTimeDTO.getStartTime() == null)
            tourTime.setStartDate(tourTime.getStartDate());
        if(tourTimeDTO.getSlotNumber() == 0){
            tourTime.setSlotNumber(tourTime.getSlotNumber());
            tourTime.setSlotNumberActual(tourTime.getSlotNumberActual());
        }

        Tour tour = tourTime.getTour();
        List<String> listMessage = new ArrayList<>();
        int scheduleDayDistance = tour.getTourSchedules().size();

        startDate = tourTimeDTO.getStartDate();
        endDate = tourTimeDTO.getEndDate();
        LocalDate dateNow = LocalDate.now();

        int startDateResult = DateTimeUtils.actualCompareInfo(dateNow, startDate);
        if (startDateResult >= 0) {
            listMessage.add("Start Date " + startDate + " must be in the future.");
        }

        int endDateResult = DateTimeUtils.actualCompareInfo(dateNow, endDate);
        if (endDateResult >= 0) {
            listMessage.add("End Date " + endDate + " must be in the future.");
        }

        int bothDateResult = DateTimeUtils.actualCompareInfo(startDate, endDate);
        if (endDateResult >= 0) {
            listMessage.add("End Date " + endDate + " must be after Start Date " + startDate + " .");
        }

        Period period = startDate.until(endDate);
        int dayDistance = period.getDays();
        if ((dayDistance + 1) != scheduleDayDistance) {
            listMessage.add("The number from Start Date " + startDate + " to End Date " + endDate + " doesn't match with Schedule Days.");
        }

        if (!listMessage.isEmpty()) {
            return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.BAD_REQUEST, "These fields do not validate!", listMessage));
        }

        int dateCompareResult = DateTimeUtils.actualCompareInfo(LocalDate.now(), tourTime.getEndDate());
        if (tourTime.getSlotNumberActual() == 0 || dateCompareResult > 0) {
            tourTimeDTO.setTimeStatus(TimeStatus.ACTIVE);
            tourTimeDTO.setDeleted(false);
            tourTimeService.updateTime(tourTimeDTO, tourTime);
        }else {
            return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.METHOD_NOT_ALLOWED, "This Time has been booked!"));
        }
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Update Time Successfully!"));
    }

//    @Override
    public ResponseEntity<BaseResponseDTO> cancelTime(UUID timeId) {
        TourTime tourTime = tourTimeService.findById(timeId);

        tourTime.setTimeStatus(TimeStatus.CANCEL);
//        int slotNumber = tourTime.getSlotNumber() + tourTime.getSlotNumberActual();
//        tourTime.setSlotNumber(slotNumber);
//        tourTime.setSlotNumberActual(0);
        Set<TourVisitor> tourVisitorSet = tourTime.getTourVisitorSet();
        for(TourVisitor tourVisitor : tourVisitorSet){
            tourVisitor.setDeleted(true);
            tourVisitorRepository.save(tourVisitor);
        }

        Set<Orders> ordersSET = tourTime.getOrdersSet();
        for(Orders orders : ordersSET){
            orders.setRefund(orders.getAmount());
            orders.setOrderStatus(OrderStatus.CANCEL);
            orderRepository.save(orders);
        }
        tourTimeRepository.save(tourTime);

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Cancel Time Successfully!"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> addMoreImage(TourImageAddMoreForm tourImageAddMoreForm) {
        Tour tour = tourRepository.findById(tourImageAddMoreForm.getId()).orElseThrow(() -> new ResourceNotFoundException("Tour not found!"));

        Set<TourImages> tourImagesSet = tourImageService.createImage(tourImageAddMoreForm.getTourImageCreateFormSet());
        tour.setTourImagesSet(tourImagesSet);
        for(TourImages tourImages : tourImagesSet){
            tourImages.setTour(tour);
            tourImagesRepository.save(tourImages);
        }
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Add More Images Successfully"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> updateImage(TourImageDTO tourImageDTO) {
        tourImageService.updateImage(tourImageDTO);
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Update Image Successfully!"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> deleteImage(UUID id) {
        tourImageService.deleteImage(id);
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Delete Image Successfully!"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> viewTourTimeDetailById(UUID id) {
         TourTime tourTime = tourTimeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Time not found!"));

         Set<GroupVisitorDTO> groupVisitorDTOSet = new HashSet<>();

         Set<Orders> ordersSet = tourTime.getOrdersSet();
         for(Orders orders : ordersSet){
             if(!orders.getOrderStatus().equals(OrderStatus.CANCEL)){
                 GroupVisitorDTO groupVisitorDTO = new GroupVisitorDTO();
                 groupVisitorDTO.setUserDTO(modelMapper.map(orders.getUser(), UserDTO.class));
                 groupVisitorDTO.setOrderDTO(modelMapper.map(orders, OrderDTO.class));

                 Set<TourVisitorDTO> tourVisitorDTOSet = new HashSet<>();
                 Set<TourVisitor> tourVisitorSet = orders.getTourTime().getTourVisitorSet();
                 for(TourVisitor tourVisitor : tourVisitorSet){
                     TourVisitorDTO tourVisitorDTO = modelMapper.map(tourVisitor, TourVisitorDTO.class);
                     if(tourVisitorDTO.getUserId().equals(orders.getUser().getId()) && tourVisitor.getOrderId().equals(orders.getId()))
                         tourVisitorDTOSet.add(tourVisitorDTO);
                 }
                 groupVisitorDTO.setTourVisitorDTOSet(tourVisitorDTOSet);
                 groupVisitorDTOSet.add(groupVisitorDTO);
             }
         }

         TourTimeDetailDTO tourTimeDetailDTO = new TourTimeDetailDTO();
         tourTimeDetailDTO.setTourTimeDTO(modelMapper.map(tourTime, TourTimeDTO.class));
         tourTimeDetailDTO.setTourDTO(modelMapper.map(tourTime.getTour(), TourDTO.class));
         Set<TourSchedule> tourScheduleSet = tourTime.getTour().getTourSchedules();
         Set<TourScheduleDTO> tourScheduleDTOSet = new HashSet<>();
         for(TourSchedule tourSchedule : tourScheduleSet ){
             TourScheduleDTO tourScheduleDTO = modelMapper.map(tourSchedule, TourScheduleDTO.class);
             tourScheduleDTOSet.add(tourScheduleDTO);
         }
         tourTimeDetailDTO.setTourScheduleDTOSet(tourScheduleDTOSet);
         tourTimeDetailDTO.setGroupVisitorDTOSet(groupVisitorDTOSet);

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "View Time Detail Successfully", tourTimeDetailDTO));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> updateTour(Principal principal, Tour tour) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> listTour() {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> searchTour(String title) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> deactivateTour(Principal principal, UUID id) {
        return null;
    }

    @Override
    public ResponseEntity<BaseResponseDTO> addMoreBanner(BannerAddMoreForm bannerAddMoreForm) {

        Set<Banner> bannerSet = bannerService.createBanner(bannerAddMoreForm.getBannerCreateFormSet());
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Add More Banner Successfully"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> updateBanner(BannerDTO banner) {
        bannerService.updateBanner(banner);
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Update Banner Successfully!"));
    }


    @Override
    public ResponseEntity<BaseResponseDTO> deleteBanner(UUID id) {
        bannerService.deleteBanner(id);
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Delete Banner Successfully!"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> viewBannerList() {
        List<Banner> banner = bannerService.viewBannerList();
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "View List Banner Successfully", banner));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> cancelOrder(Principal principal, UUID orderId) {
        Orders orders = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found!"));
        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
        orders.setUpdateBy(user.getName());
        orders.setOrderStatus(OrderStatus.CANCEL);
        orders.setRefund(orders.getPaid());
        orderRepository.save(orders);
        //Gỡ danh sách khách hàng trong order ra khỏi ds khách hàng của tour time
        TourTime tourTime = orders.getTourTime();
        Set<TourVisitor> tourVisitorSet = new HashSet<>();
        int count = 0;
        for (TourVisitor tourVisitor: tourTime.getTourVisitorSet()
        ) {
            if (tourVisitor.getUserId().equals(orders.getUser().getId()) && tourVisitor.getOrderId().equals(orders.getId())) {
                tourVisitor.setTourTime(null);
                tourVisitorRepository.save(tourVisitor);
                count++;

            } else {
                tourVisitorSet.add(tourVisitor);
            }
        }
        tourTime.setTourVisitorSet(tourVisitorSet);
        //Cập nhật số lượng khách hàng
        tourTime.setSlotNumberActual(tourVisitorSet.size());
        tourTime.setSlotNumber(tourTime.getSlotNumber() + count);
        tourTimeRepository.save(tourTime);
        Payment payment = paymentService.createPaymentRefund(user, orders);
        transactionService.createTransaction(user, payment, "Hoàn tiền cho đơn hàng " + orderId + " của user " + orders.getUser().getEmail());
        return ResponseEntity.status(HttpStatus.CREATED).body(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Cancel success"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> listTourHasOrdered(String keyWord) {
        List<Tour> tourList = new ArrayList<>();
        List<TourInfoDTO> tourInfoDTOS = new ArrayList<>();
        if(keyWord == null) {
            tourList = tourRepository.findTourHasTourTimeHaveOrder();
            tourInfoDTOS = tourList.stream().map(this::convertToTourInfoDTO).toList();

        }else {
            tourList = tourRepository.findTourHasTourTimeHaveOrder();
            List<Tour> filteredTours = tourList.stream()
                    .filter(tour -> tour.getCode().equals(keyWord))
                    .toList();

            tourInfoDTOS = filteredTours.stream().map(this::convertToTourInfoDTO).toList();


        }
        return ResponseEntity.status(HttpStatus.CREATED).body(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Successfully", tourInfoDTOS));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> listTourVisitor(UUID tourTimeId) {
        TourTime tourTime = tourTimeRepository.findById(tourTimeId)
                .orElseThrow(() -> new ResourceNotFoundException("Tour time not found!"));
        ListTourVisitorAndCancelDTO listTourVisitorAndCancelDTOS = new ListTourVisitorAndCancelDTO();
        List<TourVisitorDTO> tourVisitorDTOList = new ArrayList<>();
        List<TourVisitorDTOCancel> tourVisitorDTOCancelList = new ArrayList<>();
        //Lấy ds khách hàng hiện có trong tour time
        for (TourVisitor tourVisitor: tourTime.getTourVisitorSet()
             ) {
            TourVisitorDTO tourVisitorDTO = modelMapper.map(tourVisitor, TourVisitorDTO.class);
            User user = userRepository.findById(tourVisitor.getUserId())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
            tourVisitorDTO.setUserEmail(user.getEmail());
            tourVisitorDTOList.add(tourVisitorDTO);
        }
        //Lấy ds khách hàng đã hủy trong tour time
        for (Orders orders: tourTime.getOrdersSet()
             ) {
            if (orders.getOrderStatus().equals(OrderStatus.CANCEL)) {
                for (TourVisitor tourVisitor:tourVisitorRepository.findAllByOrderId(orders.getId())
                     ) {
                    TourVisitorDTOCancel tourVisitorDTO = modelMapper.map(tourVisitor, TourVisitorDTOCancel.class);
                    User user = userRepository.findById(tourVisitor.getUserId())
                            .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
                    tourVisitorDTO.setUserEmail(user.getEmail());
                    tourVisitorDTOCancelList.add(tourVisitorDTO);
                }
            }
        }
        listTourVisitorAndCancelDTOS.setTourVisitorDTOList(tourVisitorDTOList);
        listTourVisitorAndCancelDTOS.setTourVisitorDTOCancelList(tourVisitorDTOCancelList);

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully", listTourVisitorAndCancelDTOS));
    }

    public TourInfoDTO convertToTourInfoDTO(Tour tour){
        TourInfoDTO tourInfoDTO = modelMapper.map(tour, TourInfoDTO.class);
        if(tour.getTourSchedules() == null){
            tourInfoDTO.setTourSchedules(null);
        }
        if(tour.getTourTimeSet() == null){
            tourInfoDTO.setTourTimeSet(null);
        }
        if(tour.getTourImagesSet() == null){
            tourInfoDTO.setTourImagesSet(null);
        }
        if(tour.getTourDetail() == null){
            tourInfoDTO.setTourDetail(null);
        }

        TourDetailDTO tourDetailDTO = modelMapper.map(tour.getTourDetail(), TourDetailDTO.class);

        Set<TourImageDTO> tourImageDTOSet = new HashSet<>();
        for(TourImages tourImages : tour.getTourImagesSet()){
            TourImageDTO tourImageDTO = modelMapper.map(tourImages, TourImageDTO.class);
            tourImageDTOSet.add(tourImageDTO);
        }

        Set<TourScheduleDTO> tourScheduleDTOSet = new HashSet<>();
        for(TourSchedule tourSchedule : tour.getTourSchedules()){
            TourScheduleDTO tourScheduleDTO = modelMapper.map(tourSchedule, TourScheduleDTO.class);
            tourScheduleDTOSet.add(tourScheduleDTO);
        }

        Set<TourTimeDTO> tourTimeDTOSet = new HashSet<>();
        for(TourTime tourTime : tour.getTourTimeSet()){
            TourTimeDTO tourTimeDTO = modelMapper.map(tourTime, TourTimeDTO.class);
            tourTimeDTOSet.add(tourTimeDTO);
        }

        tourInfoDTO.setTourDetail(tourDetailDTO);
        tourInfoDTO.setTourImagesSet(tourImageDTOSet);
        tourInfoDTO.setTourSchedules(tourScheduleDTOSet);
        tourInfoDTO.setTourTimeSet(tourTimeDTOSet);

        return tourInfoDTO;
    }
}
