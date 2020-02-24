package com.keiziban.lol.lolk003.service;

import java.lang.reflect.InvocationTargetException;

import com.keiziban.lol.lolk003.dto.UserDto;
import com.keiziban.lol.lolk003.result.AuthResult;

public interface AuthService {
    AuthResult Login(UserDto userDto) throws IllegalAccessException, InvocationTargetException;

    AuthResult Logout(UserDto userDto);
}