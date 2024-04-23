package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.common.TourStatus;
import tourbooking.dto.*;
import tourbooking.entity.Banner;
import tourbooking.entity.Orders;
import tourbooking.entity.Tour.*;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.*;
import tourbooking.service.BannerService;
import tourbooking.service.StaffService;
import tourbooking.utils.DateTimeUtils;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

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
    private final TourTimeServiceImpl tourTimeService;
    private final TourDetailServiceImpl tourDetailService;
    private final TourScheduleServiceImpl tourScheduleService;
    private final TourImageServiceImpl tourImageService;
    private final BannerServiceImpl bannerService;
    private final BannerRepository bannerRepository;

    @Override
    public ResponseEntity<BaseResponseDTO> createTour(Principal principal, TourCreateForm tourCreateForm) {
        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));

        TourDetail tourDetail = tourDetailService.createTourDetail(user, tourCreateForm.getTourDetailCreateForm());

        Set<TourTime> tourTimeSet = tourTimeService.createTime(tourCreateForm.getTourTimeCreateFormSet());
        Set<TourSchedule> tourScheduleSet = tourScheduleService.createTourSchedule(tourCreateForm.getListTourSchedule());
        Set<TourImages> tourImagesSet = tourImageService.createImage(tourCreateForm.getTourImageCreateForms());

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
        tourRepository.save(tour);
        for(TourTime tourTime: tourTimeSet) {
            tourTime.setTour(tour);
            tourTimeRepository.save(tourTime);
        }

        for(TourSchedule tourSchedule : tourScheduleSet){
            tourSchedule.setTour(tour);
            tourScheduleRepository.save(tourSchedule);
        }

        for(TourImages tourImages : tourImagesSet){
            tourImages.setTour(tour);
            tourImagesRepository.save(tourImages);
        }

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Create Successfully"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> addMoreTime(TourTimeAddMoreForm tourTimeAddMoreForm) {
        Tour tour = tourRepository.findById(tourTimeAddMoreForm.getId()).orElseThrow(() -> new ResourceNotFoundException("Tour not found!"));

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
        int dateCompareResult = DateTimeUtils.actualCompareInfo(LocalDate.now(), tourTime.getEndDate());
        if(tourTime.getSlotNumberActual() == 0 || dateCompareResult > 0){
            tourTimeService.updateTime(tourTimeDTO, tourTime);
        }else {
            return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.METHOD_NOT_ALLOWED, "This Time has been booked!"));
        }
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Update Time Successfully!"));
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

             GroupVisitorDTO groupVisitorDTO = new GroupVisitorDTO();
             groupVisitorDTO.setUserDTO(modelMapper.map(orders.getUser(), UserDTO.class));
             groupVisitorDTO.setOrderDTO(modelMapper.map(orders, OrderDTO.class));

             Set<TourVisitorDTO> tourVisitorDTOSet = new HashSet<>();
             Set<TourVisitor> tourVisitorSet = orders.getTourTime().getTourVisitorSet();
             for(TourVisitor tourVisitor : tourVisitorSet){
                 TourVisitorDTO tourVisitorDTO = modelMapper.map(tourVisitor, TourVisitorDTO.class);
                 if(tourVisitorDTO.getUserId().equals(orders.getUser().getId()))
                    tourVisitorDTOSet.add(tourVisitorDTO);
             }
             groupVisitorDTO.setTourVisitorDTOSet(tourVisitorDTOSet);
             groupVisitorDTOSet.add(groupVisitorDTO);
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
