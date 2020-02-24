package com.keiziban.lol.lolk003.controller;

import java.util.List;

import com.keiziban.lol.lolk003.dao.UserDao;
import com.keiziban.lol.lolk003.entity.UserEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TestController {

    @Autowired
    private UserDao userDao;

    @RequestMapping("/test")
    public String sample() {
        List<UserEntity> userEntityList =  userDao.selectAll();
        userEntityList.stream().forEach(System.out::println);
        return "test";
    }
}