package com.keiziban.lol.lolk003.controller;

import java.lang.reflect.InvocationTargetException;

import com.keiziban.lol.lolk003.dto.UserDto;
import com.keiziban.lol.lolk003.form.LoginForm;
import com.keiziban.lol.lolk003.result.AuthResult;
import com.keiziban.lol.lolk003.service.AuthService;

import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController extends BaseController {
    
    @Autowired
    AuthService authService;

    @PostMapping(path = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthResult> loginRegist(@Validated @RequestBody final LoginForm form,
            final BindingResult bindingResult) throws IllegalAccessException, InvocationTargetException {

        if (bindingResult.hasErrors()) {
            final AuthResult authResult = new AuthResult();
            BeanUtils.copyProperties(authResult, form);
            return super.returnValidatedErrors(bindingResult, authResult);
        }

        final UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userDto, form);
        final AuthResult authResult = authService.Login(userDto);
        return new ResponseEntity<AuthResult>(authResult, HttpStatus.OK);
    }

    @PostMapping(path = "/logout", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthResult> logoutResult(@Validated @RequestBody final LoginForm form,
            final BindingResult bindingResult) throws IllegalAccessException, InvocationTargetException {
        // バリデーションエラーはないしあったらシステムエラー
        // if (bindingResult.hasErrors()) {
        //     final LoginResult loginResult = new LoginResult();
        //     BeanUtils.copyProperties(loginResult, form);
        //     return super.returnValidatedErrors(bindingResult, loginResult);
        // }

        final UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userDto, form);
        final AuthResult authResult = authService.Logout(userDto);
        return new ResponseEntity<AuthResult>(authResult, HttpStatus.OK);
    }
}