package com.tipu.backend.controller;

import com.tipu.backend.model.EmailDetails;
import com.tipu.backend.service.EmailService;
import com.tipu.backend.service.EmailServiceImpI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmailController {


    @Autowired
    private EmailService emailService;

    @PostMapping("/sendMail")
    String sendMail(@RequestBody EmailDetails details) {
        String status = emailService.sendSimpleMail(details);
        return status;
    }

    // Sending email with attachment
    @PostMapping("/sendMailWithAttachment")
    public String sendMailWithAttachment(
            @RequestBody EmailDetails details) {
        String status = emailService.sendMailWithAttachment(details);

        return status;
    }


}
