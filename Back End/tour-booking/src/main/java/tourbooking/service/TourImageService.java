package tourbooking.service;

import tourbooking.dto.TourImageCreateForm;
import tourbooking.dto.TourTimeCreateForm;
import tourbooking.entity.Tour.TourImages;
import tourbooking.entity.Tour.TourTime;

import java.util.Set;

public interface TourImageService {
    Set<TourImages> createImage(Set<TourImageCreateForm> listTourImage);
}
