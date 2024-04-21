package tourbooking.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import tourbooking.service.impl.UserServiceImpl;

@Controller
public class DashboardController {

    @Autowired
    private UserServiceImpl userServiceIml;

    // Controller để trả về trang dashboard
    @GetMapping("/dashboard")
    public String dashboard() {
        return "dashboard";
    }

    // Controller để trả về số lượng người dùng dưới dạng JSON
    @GetMapping("/api/userCount")
    @ResponseBody
    public Long getUserCount() {
        return userServiceIml.getUserCount();
    }

}