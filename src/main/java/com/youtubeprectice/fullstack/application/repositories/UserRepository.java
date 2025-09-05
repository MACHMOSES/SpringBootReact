package com.youtubeprectice.fullstack.application.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.youtubeprectice.fullstack.application.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
