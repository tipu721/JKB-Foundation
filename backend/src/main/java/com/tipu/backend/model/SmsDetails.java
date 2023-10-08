package com.tipu.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SmsDetails {
    String senderNo;
    String receiverNo;
    String SmsBody;

}
