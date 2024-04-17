package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.TourDetailCreateForm;
import tourbooking.entity.Tour.TourDetail;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.TourDetailRepository;
import tourbooking.repository.UserRepository;
import tourbooking.service.TourDetailService;

import java.security.Principal;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class TourDetailServiceImpl implements TourDetailService {
    private final TourDetailRepository tourDetailRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public TourDetail createTourDetail(User user , TourDetailCreateForm tourDetailCreateForm) {
        TourDetail tourDetail = modelMapper.map(tourDetailCreateForm, TourDetail.class);
        tourDetail.setCreateBy(user.getName());
//        tourDetailRepository.save(tourDetail);

        return tourDetail;
    }
}
