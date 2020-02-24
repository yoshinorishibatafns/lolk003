package com.keiziban.lol.lolk003.form;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class SendPinForm {

    private String mail;
    
    private String password;
    
    @NotBlank
    private String pin;
}