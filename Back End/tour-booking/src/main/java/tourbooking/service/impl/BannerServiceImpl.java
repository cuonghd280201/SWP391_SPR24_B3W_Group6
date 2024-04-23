package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tourbooking.dto.BannerCreateForm;
import tourbooking.dto.BannerDTO;
import tourbooking.entity.Banner;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.BannerRepository;
import tourbooking.service.BannerService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BannerServiceImpl implements BannerService {
    private final BannerRepository bannerRepository;

    @Override
    public Set<Banner> createBanner(Set<BannerCreateForm> listBanner) {

        Set<Banner> bannersSet = new HashSet<>();

        for (BannerCreateForm bannerCreateForm : listBanner) {
            Banner banner = new Banner();
            banner.setImage(bannerCreateForm.getImage());
            bannersSet.add(banner);
            bannerRepository.save(banner);
        }

        return bannersSet;
    }

    @Override
    public void updateBanner(BannerDTO bannerDTO) {
        Banner banner = bannerRepository.findById(bannerDTO.getId()).orElseThrow(() -> new ResourceNotFoundException("Banner not found!"));
        if(bannerDTO.getImage() == null)
            bannerDTO.setImage(banner.getImage());
        banner.setImage(bannerDTO.getImage());
        bannerRepository.save(banner);
    }

    @Override
    public List<Banner> viewBannerList() {
        return bannerRepository.findAll();
    }




    @Override
    public void deleteBanner(UUID id){
        Banner banner = bannerRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Banner not found!"));
        bannerRepository.deleteById(id);
    }
}
