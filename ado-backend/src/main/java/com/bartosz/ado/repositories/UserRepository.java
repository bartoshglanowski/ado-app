package com.bartosz.ado.repositories;

import com.bartosz.ado.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByName(String login);
    Optional<User> findByEmail(String email);


    Boolean existsByName(String login);
    Boolean existsByEmail(String email);

}
