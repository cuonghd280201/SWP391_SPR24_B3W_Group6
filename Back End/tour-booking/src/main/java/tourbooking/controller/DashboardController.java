package tourbooking.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.UserDTO;
import tourbooking.entity.User;
import tourbooking.service.AdminService;
import tourbooking.service.impl.AdminServiceImpl;
import tourbooking.service.impl.TourServiceImpl;
import tourbooking.service.impl.UserServiceImpl;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("api/v1/dashboard")
@RequiredArgsConstructor
public class DashboardController {

//    @Autowired
    private final AdminService adminService;
    private final UserServiceImpl userService;

    @GetMapping("/dashboard")
    public ResponseEntity<BaseResponseDTO> dashboard() {
        List<User> userList = userService.getAllUsers();
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully", userList));
    }

    @GetMapping("/getRoleNumber")
    public ResponseEntity<BaseResponseDTO> getRoleNumber() {
        return adminService.countAllUser();
    }

}
