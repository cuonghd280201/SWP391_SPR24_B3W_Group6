package tourbooking.service.impl;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tourbooking.dto.BaseResponseDTO;

import tourbooking.dto.CountRoleDTO;
import tourbooking.dto.TourImageDTO;
import tourbooking.entity.Tour.TourImages;
import tourbooking.entity.User;
import tourbooking.repository.UserRepository;
import tourbooking.service.AdminService;


import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
//    @Autowired
    private final UserRepository userRepository;
    // Hàm logic để lấy số lượng người dùng từ cơ sở dữ liệu
    public Long getUserCount() {
        return userRepository.count(); // Sử dụng phương thức count() của JpaRepository để đếm số lượng người dùng
    }

    @Override
    public ResponseEntity<BaseResponseDTO> countAllUser() {
        List<User> userList= userRepository.findAll();
        int countUser = 0;
        int countStaff = 0;
        for(User user : userList){
            if(user.getRole().getName().equals("USER")){
                ++countUser;
            }else if(user.getRole().getName().equals("STAFF")){
                ++countStaff;
            }
        }
        CountRoleDTO countRoleDTO = new CountRoleDTO(countUser, countStaff);

        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Get Role Number Successfully", countRoleDTO));
    }
}
