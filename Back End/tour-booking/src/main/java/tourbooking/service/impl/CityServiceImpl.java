package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.CityDTO;
import tourbooking.entity.City;
import tourbooking.entity.Payment;
import tourbooking.repository.CityRepository;
import tourbooking.service.CityService;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CityServiceImpl implements CityService {
    private final CityRepository cityRepository;
    private final ModelMapper modelMapper;

    @Override
    public ResponseEntity<BaseResponseDTO> getAllCity() {
        List<City> cityList = cityRepository.findAll();
        List<CityDTO> cityDTOList = new ArrayList<>();
        for (City city: cityList
             ) {
            CityDTO cityDTO = modelMapper.map(city, CityDTO.class);
            cityDTOList.add(cityDTO);
        }
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully", cityDTOList));
    }
}
