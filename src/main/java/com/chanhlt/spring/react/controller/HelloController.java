package com.chanhlt.spring.react.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController{

    @RequestMapping("/api/hello")
    public String index(){

        return "Hello world";
    }
    
}