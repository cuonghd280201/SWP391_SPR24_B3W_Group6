package tourbooking.service;

import tourbooking.dto.TourScheduleCreateForm;
import tourbooking.entity.Tour.TourSchedule;

import java.util.List;

public interface TourScheduleService {
    TourSchedule createTourSchedule(List<TourScheduleCreateForm> listTourScheduleCreateForm);
}
