package com.keiziban.lol.lolk003.service.impl;

import java.lang.reflect.InvocationTargetException;

import com.keiziban.lol.lolk003.dto.UserDto;
import com.keiziban.lol.lolk003.result.AuthResult;
import com.keiziban.lol.lolk003.service.AuthService;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Override
    public AuthResult Login(UserDto userDto) throws IllegalAccessException, InvocationTargetException {
        // todo go to repository
        AuthResult loginResult = new AuthResult();
        BeanUtils.copyProperties(loginResult, userDto);
        // todo 
        loginResult.setToken("1234567890abcdef");
        loginResult.setLoginResult(true);
        return loginResult;

    }

    @Override
    public AuthResult Logout(UserDto userDto) {
        return new AuthResult();
    }
}