package tourbooking.service;

import tourbooking.dto.BannerCreateForm;
import tourbooking.dto.BannerDTO;
import tourbooking.dto.TourImageCreateForm;
import tourbooking.dto.TourImageDTO;
import tourbooking.entity.Banner;
import tourbooking.entity.Tour.TourImages;

import java.util.List;
import java.util.Set;
import java.util.UUID;

public interface BannerService {
    Set<Banner> createBanner(Set<BannerCreateForm> listBanner);
    void updateBanner(BannerDTO bannerDTO);
    List<Banner> viewBannerList();

    void deleteBanner(UUID id);
}
