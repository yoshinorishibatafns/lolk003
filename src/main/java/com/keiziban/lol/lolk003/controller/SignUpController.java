package com.keiziban.lol.lolk003.controller;

import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.InvocationTargetException;
//import java.util.Locale;

import com.keiziban.lol.lolk003.dto.UserDto;
import com.keiziban.lol.lolk003.form.SendPinForm;
import com.keiziban.lol.lolk003.form.SignUpForm;
import com.keiziban.lol.lolk003.service.SignUpService;
//import com.keiziban.lol.lolk003.result.BaseResult;
import com.keiziban.lol.lolk003.result.SendPinResult;
import com.keiziban.lol.lolk003.result.TempRegistResult;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
// import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/signup")
public class SignUpController extends BaseController {

    @Autowired
    SignUpService signUpService;

    @PostMapping(path = "/temp-regist", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<TempRegistResult> tempRegist(@Validated @RequestBody final SignUpForm form,
            final BindingResult bindingResult) throws IllegalAccessException, InvocationTargetException {

        if (bindingResult.hasErrors()) {
            final TempRegistResult tempRegistResult = new TempRegistResult();
            BeanUtils.copyProperties(tempRegistResult, form);
            return super.returnValidatedErrors(bindingResult, tempRegistResult);
        }

        final UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userDto, form);
        final TempRegistResult tempRegistResult = signUpService.sendPin(userDto);
        return new ResponseEntity<TempRegistResult>(tempRegistResult, HttpStatus.OK);
    }

    @PostMapping(path = "/send-pin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SendPinResult> sendPin(@Validated @RequestBody SendPinForm form, BindingResult bindingResult)
            throws IllegalAccessException, InvocationTargetException {

        if (bindingResult.hasErrors()) {
            final SendPinResult sendPinResult = new SendPinResult();
            BeanUtils.copyProperties(sendPinResult, form);
            return super.returnValidatedErrors(bindingResult, sendPinResult);
        }
        final UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userDto, form);
        SendPinResult sendPinResult = signUpService.checkPin(userDto);
        return new ResponseEntity<SendPinResult>(sendPinResult, HttpStatus.OK);
    }

}