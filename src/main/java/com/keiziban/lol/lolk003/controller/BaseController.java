package com.keiziban.lol.lolk003.controller;

import java.util.Locale;

import com.keiziban.lol.lolk003.result.BaseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

public class BaseController {

    @Autowired
    MessageSource messageSource;

    public <T extends BaseResult> ResponseEntity<T> returnValidatedErrors(final BindingResult bindingResult, final T result) {
        for (final FieldError error : bindingResult.getFieldErrors()) {
            System.out.println(error);
            System.out.println(messageSource.getMessage(error, Locale.getDefault()));
            result.getErrors().add(messageSource.getMessage(error, Locale.getDefault()));
        }
        return new ResponseEntity<T>(result, HttpStatus.OK);
    }
}