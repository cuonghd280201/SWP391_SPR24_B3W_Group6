package tourbooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tourbooking.entity.User;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.UUID;
@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByEmail(String email);
    Optional<User> findByFireBaseUid(String fireBaseUid);

}
