package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tourbooking.dto.TourScheduleCreateForm;
import tourbooking.entity.Tour.TourSchedule;
import tourbooking.repository.TourScheduleRepository;
import tourbooking.service.TourScheduleService;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

@Service
@RequiredArgsConstructor
public class TourScheduleServiceImpl implements TourScheduleService {

    private final TourScheduleRepository tourScheduleRepository;

    @Override
    public TourSchedule createTourSchedule(List<TourScheduleCreateForm> listTourScheduleCreateForm) {

//        List<TourSchedule> listTourSchedule = new List<TourSchedule>();
//        for(TourScheduleCreateForm dto : listTourScheduleCreateForm){
//            TourSchedule newSchedule = new TourSchedule();
//            newSchedule.setDay(dto.getDay());
//            newSchedule.setDescription(dto.getDescription());
//            listTourSchedule.add(newSchedule);
//        }


        return null;
    }
}
