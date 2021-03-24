package com.learningsheetmusic.app.controller;

import com.learningsheetmusic.app.entity.MyUser;
import com.learningsheetmusic.app.entity.Role;
import com.learningsheetmusic.app.repository.RoleRepository;
import com.learningsheetmusic.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins="localhost:8080/*", methods={RequestMethod.GET, RequestMethod.POST})
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity save(@RequestBody MyUser myUser){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(myUser));
    }

    @PatchMapping
    public ResponseEntity patch(@RequestBody MyUser myUser){
        if(!userService.existsById(myUser.getId()))
            throw new RuntimeException("No existe un usuario con ese ID para actualizar");

        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(myUser));
    }

    @DeleteMapping("/delete-test-users")
    public ResponseEntity deleteTestCreations(){
        List<MyUser> testUsers= userService.getAllByCreatedBy("test");

        userService.deleteAllById(testUsers.stream()
                .map((user) -> user.getId()).collect(Collectors.toList()));

        return ResponseEntity.ok().build();
    }
}
