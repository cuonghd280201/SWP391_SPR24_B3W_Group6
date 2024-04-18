package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tourbooking.dto.TourImageCreateForm;
import tourbooking.entity.Tour.TourImages;
import tourbooking.repository.TourImagesRepository;
import tourbooking.service.TourImageService;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class TourImageServiceImpl implements TourImageService {

    private final TourImagesRepository tourImagesRepository;

    @Override
    public Set<TourImages> createImage(Set<TourImageCreateForm> listTourImage) {

        Set<TourImages> tourImagesSet = new HashSet<>();

        for(TourImageCreateForm tourImageCreateForm: listTourImage){
            TourImages tourImages = new TourImages();
            tourImages.setImage(tourImageCreateForm.getImage());
            tourImagesSet.add(tourImages);
            tourImagesRepository.save(tourImages);
        }

        return tourImagesSet;
    }
}
