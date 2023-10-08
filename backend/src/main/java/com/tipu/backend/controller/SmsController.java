package com.tipu.backend.controller;


import com.tipu.backend.model.EmailDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SmsController {
    @PostMapping("/sendSms")
    void sendSms(@RequestBody EmailDetails details){

        

    }
}
