package com.tipu.backend.service;

import com.tipu.backend.model.EmailDetails;
import org.springframework.stereotype.Service;


public interface EmailService {

    String sendSimpleMail(EmailDetails details);

    String sendMailWithAttachment(EmailDetails details);

}
