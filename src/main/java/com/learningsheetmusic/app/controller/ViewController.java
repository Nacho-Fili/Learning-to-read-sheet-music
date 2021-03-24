package com.learningsheetmusic.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

public class ViewController {
    @RequestMapping("/")
    public String react(){
        return "index";
    }

    @RequestMapping("/sign-in")
    public String reactSignIn(){
        return "index";
    }

    @RequestMapping("/login-page")
    public String reactLogin(){
        return "index";
    }

}
