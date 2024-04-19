package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tourbooking.dto.TourScheduleCreateForm;
import tourbooking.entity.Tour.TourSchedule;
import tourbooking.repository.TourScheduleRepository;
import tourbooking.service.TourScheduleService;

import java.util.*;

@Service
@RequiredArgsConstructor
public class TourScheduleServiceImpl implements TourScheduleService {

    private final TourScheduleRepository tourScheduleRepository;

    @Override
    public Set<TourSchedule> createTourSchedule(Set<TourScheduleCreateForm> listTourScheduleCreateForm) {

        Set<TourSchedule> listTourSchedule = new HashSet<>();
        for(TourScheduleCreateForm dto : listTourScheduleCreateForm){
            TourSchedule newSchedule = new TourSchedule();
            newSchedule.setDay(dto.getDay());
            newSchedule.setDescription(dto.getDescription());
            newSchedule.setTitle(dto.getTitle());
            listTourSchedule.add(newSchedule);
            tourScheduleRepository.save(newSchedule);
        }


        return listTourSchedule;
    }
}
