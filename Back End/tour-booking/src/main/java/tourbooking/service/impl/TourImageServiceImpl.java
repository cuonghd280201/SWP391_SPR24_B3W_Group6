package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tourbooking.dto.TourImageCreateForm;
import tourbooking.dto.TourImageDTO;
import tourbooking.entity.Tour.TourImages;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.TourImagesRepository;
import tourbooking.service.TourImageService;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

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

    @Override
    public void updateImage(TourImageDTO tourImageDTO) {
        TourImages tourImages = tourImagesRepository.findById(tourImageDTO.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Image not found!"));

        tourImages.setImage(tourImageDTO.getImage());
        tourImagesRepository.save(tourImages);
    }

    @Override
    public void deleteImage(UUID id) {
        TourImages tourImages = tourImagesRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Image not found!"));

        tourImagesRepository.deleteById(id);
    }
}
