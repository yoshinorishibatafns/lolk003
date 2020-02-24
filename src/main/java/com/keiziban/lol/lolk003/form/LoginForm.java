package com.keiziban.lol.lolk003.form;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class LoginForm {

    @NotBlank
    @Email
    private String mail;
    @NotBlank
    private String password;

}