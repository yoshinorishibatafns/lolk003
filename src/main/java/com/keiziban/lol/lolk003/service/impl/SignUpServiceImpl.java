package com.keiziban.lol.lolk003.service.impl;

import java.lang.reflect.InvocationTargetException;

import com.keiziban.lol.lolk003.dto.UserDto;
import com.keiziban.lol.lolk003.result.SendPinResult;
import com.keiziban.lol.lolk003.result.TempRegistResult;
import com.keiziban.lol.lolk003.service.SignUpService;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class SignUpServiceImpl implements SignUpService {

    @Override
    public TempRegistResult sendPin(UserDto userDto) throws IllegalAccessException, InvocationTargetException {
        TempRegistResult tempRegistResult = new TempRegistResult();
        // todo go to repository
        BeanUtils.copyProperties(tempRegistResult, userDto);
        tempRegistResult.setPin("9999");
        return tempRegistResult;
    }

    @Override
    public SendPinResult checkPin(UserDto userDto) throws IllegalAccessException, InvocationTargetException {
        SendPinResult sendPinResult = new SendPinResult();
        BeanUtils.copyProperties(sendPinResult, userDto);
        sendPinResult.setSendPinResult("9999".equals(userDto.getPin()));
        return sendPinResult;
    }

}