package com.keiziban.lol.lolk003.service;

import com.keiziban.lol.lolk003.dto.UserDto;
import com.keiziban.lol.lolk003.result.SendPinResult;
import com.keiziban.lol.lolk003.result.TempRegistResult;

import java.lang.reflect.InvocationTargetException;

public interface SignUpService {

    TempRegistResult sendPin(UserDto userDto) throws IllegalAccessException, InvocationTargetException;

    SendPinResult checkPin(UserDto userDto) throws IllegalAccessException, InvocationTargetException;
}