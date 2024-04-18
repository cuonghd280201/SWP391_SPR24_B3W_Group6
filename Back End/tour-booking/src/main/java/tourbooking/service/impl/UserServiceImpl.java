package tourbooking.service.impl;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;
import tourbooking.dto.BaseResponseDTO;
import tourbooking.dto.UpdateProfileForm;
import tourbooking.dto.UserDTO;
import tourbooking.entity.User;
import tourbooking.exception.ResourceNotFoundException;
import tourbooking.repository.RoleRepository;
import tourbooking.repository.UserRepository;
import tourbooking.service.UserService;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final FirebaseAuth firebaseAuth;
    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public ResponseEntity<BaseResponseDTO> saveUser(String uid) throws FirebaseAuthException {
        UserRecord userRecord = firebaseAuth.getUser(uid);
        //kiểm tra user đã tồn tại trong hệ thống chưa
        if(userRepository.findByEmail(userRecord.getEmail()).isEmpty()) {
            //lưu user đăng nhập từ google vào database
            User user = new User();
            user.setEmail(userRecord.getEmail());
            user.setName(userRecord.getDisplayName());
            user.setImage(userRecord.getPhotoUrl());
            user.setFireBaseUid(uid);
            user.setRole(roleRepository.findByName("USER"));
            user.setEnable(true);
            user.setPhone(null);
            userRepository.save(user);
            //set claims cho idToken
            Map<String, Object> claims = convertAuthoritiesToClaims(user.getAuthorities());
            firebaseAuth.setCustomUserClaims(uid, claims);

        }
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.CREATED, "Successfully"));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> viewUserProfile(Principal principal) {
        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
        UserDTO userDTO = convertToDTO(user);
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully", null, userDTO));
    }

    @Override
    public ResponseEntity<BaseResponseDTO> updateProfile(Principal principal, UpdateProfileForm updateProfileForm) {
        User user = userRepository.findByFireBaseUid(principal.getName())
                .orElseThrow(() -> new ResourceNotFoundException("User not found!"));
        user.setName(updateProfileForm.getName());
        user.setPhone(updateProfileForm.getPhone());
        user.setDateOfBirth(updateProfileForm.getDateOfBirth());
        user.setImage(updateProfileForm.getImage());
        user.setGender(updateProfileForm.getGender());
        userRepository.save(user);
        return ResponseEntity.ok(new BaseResponseDTO(LocalDateTime.now(), HttpStatus.OK, "Successfully"));
    }

    //Chuyển danh sách authorities thành claims
    public Map<String, Object> convertAuthoritiesToClaims(Collection<? extends GrantedAuthority> authorities) {
        Map<String, Object> claims = new HashMap<>();
        List<String> authorityValues = new ArrayList<>();
        String role = null;

        for (GrantedAuthority authority : authorities) {
            String authorityValue = authority.getAuthority();

            if (authorityValue.startsWith("ROLE_")) {
                role = authorityValue;}
        }

        if (role != null) {
            claims.put("role", role);
        }

        return claims;
    }

    public UserDTO convertToDTO (User user) {
        if (user == null) {
            return null;
        }
        UserDTO userDTO = new UserDTO();
        userDTO = modelMapper.map(user, UserDTO.class);
        userDTO.setRole(user.getRole().getName());
        return userDTO;
    }
}
