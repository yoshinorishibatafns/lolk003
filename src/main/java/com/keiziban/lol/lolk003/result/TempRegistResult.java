package com.keiziban.lol.lolk003.result;

import lombok.Data;

@Data
public class TempRegistResult extends BaseResult {
    private String mail;
    private String password;
    private String pin;
}