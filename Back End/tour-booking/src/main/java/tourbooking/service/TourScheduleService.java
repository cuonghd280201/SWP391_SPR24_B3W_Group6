package tourbooking.service;

import tourbooking.dto.TourScheduleCreateForm;
import tourbooking.entity.Tour.TourSchedule;

import java.util.List;
import java.util.Set;

public interface TourScheduleService {
    Set<TourSchedule> createTourSchedule(Set<TourScheduleCreateForm> listTourScheduleCreateForm);
}
