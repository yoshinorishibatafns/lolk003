package com.keiziban.lol.lolk003.dto;

import lombok.Data;

@Data
public class UserDto {

    private Integer id;
    private String name;
    private String mail;
    private String password;
    private String pin;
    private boolean isFirstLogin;

}