package tourbooking.controller;
import org.springframework.ui.Model;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import tourbooking.dto.UserDTO;
import tourbooking.entity.User;
import tourbooking.service.impl.TourServiceImpl;
import tourbooking.service.impl.UserServiceImpl;

import java.util.List;

@Controller
public class DashboardController {

    @Autowired
    private UserServiceImpl userService;

    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        List<User> userList = userService.getAllUsers();
        model.addAttribute("users", userList);
        return "dashboard";
    }

}
