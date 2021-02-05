package com.learningsheetmusic.app.controller;


import com.learningsheetmusic.app.entity.MyUser;
import com.learningsheetmusic.app.entity.Role;
import com.learningsheetmusic.app.repository.RoleRepository;
import com.learningsheetmusic.app.security.UserLogin;
import com.learningsheetmusic.app.service.UserService;
import com.learningsheetmusic.app.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/")
public class UserRegistrationController {

    @Autowired
    @Qualifier("myUserService")
    private UserService userService;

    @Autowired
    private RoleRepository roleRepository;

    @PostMapping("/sign-in")
    public ResponseEntity createUser(@RequestBody MyUser user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.save(user));
    }
/*
    @GetMapping("/login")
    private ResponseEntity login(@RequestBody UserLogin user){
        Optional<MyUser> oMyUser = userService.findByUsername(user.getUsername());
        if(oMyUser.isEmpty())
            return ResponseEntity.notFound().build();

        MyUser myUser = oMyUser.get();
    }
*/
}
