package com.keiziban.lol.lolk003.entity;

import lombok.Data;

@Data
public class UserEntity {

    private Integer id;
    private String name;
    private String mail;
    private String password;
    private String pin;
    private boolean isFirstLogin;

}