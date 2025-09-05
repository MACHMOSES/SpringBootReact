package com.youtubeprectice.fullstack.application.controller;

import com.youtubeprectice.fullstack.application.repositories.UserRepository;
import com.youtubeprectice.fullstack.application.exceptions.ResourceNotFoundException;
import com.youtubeprectice.fullstack.application.models.User;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import java.util.List;

@RestController
public class UserController {
    private UserRepository userRepository;
   
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping("/user/save")
    public User saveUser(@RequestBody User user){
        return this.userRepository.save(user);
    }

    @GetMapping("/user/all")
    public ResponseEntity<List<User>> getUsers(){
        return ResponseEntity.ok(
            this.userRepository.findAll()
        );
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable(value = "id") Long id) {
        User user = this.userRepository.findById(id).orElseThrow(
            () -> new ResourceNotFoundException("user not found")
        );
        return ResponseEntity.ok().body(user);
    }
    
    @PutMapping("/user/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable(value = "id") Long id){
        return this.userRepository.findById(id).map(
            user -> {
                    user.setName(newUser.getName());
                    user.setSurname(newUser.getSurname());
                    user.setEmail(newUser.getEmail());
                    user.setUsername(newUser.getUsername());
                    user.setPassword(newUser.getPassword());
                    return this.userRepository.save(user);
            }
        ).orElseGet(() -> {
            newUser.setId(id);
            return this.userRepository.save(newUser);
        });
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> removeUser(@PathVariable(value = "id") Long id){
        User user = this.userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("user not found"));
        this.userRepository.delete(user);
        return ResponseEntity.ok().build();
    }

}
