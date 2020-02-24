package com.keiziban.lol.lolk003.form;

import lombok.Data;
import javax.validation.constraints.NotBlank;

import java.util.Objects;

import javax.validation.constraints.AssertTrue;
import javax.validation.constraints.Email;

@Data
public class SignUpForm {

    @NotBlank
    @Email
    private String mail;
    @NotBlank
    private String password;
    @NotBlank
    private String confirmPassword;

    @AssertTrue(message="{correlation.check.password.notEauals.confirmPassword}")
    public boolean isEqual() {
        return Objects.equals(password, confirmPassword);
    }
}