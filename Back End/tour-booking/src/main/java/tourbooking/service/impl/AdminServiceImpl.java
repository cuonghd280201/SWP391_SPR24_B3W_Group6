package tourbooking.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import tourbooking.dto.BaseResponseDTO;

import tourbooking.repository.UserRepository;
import tourbooking.service.AdminService;


import java.util.UUID;

public class AdminServiceImpl implements AdminService {
    @Autowired
    private UserRepository userRepository;
    // Hàm logic để lấy số lượng người dùng từ cơ sở dữ liệu
    public Long getUserCount() {
        return userRepository.count(); // Sử dụng phương thức count() của JpaRepository để đếm số lượng người dùng
    }

}
