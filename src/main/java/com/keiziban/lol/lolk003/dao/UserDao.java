package com.keiziban.lol.lolk003.dao;

import java.util.List;

import com.keiziban.lol.lolk003.entity.UserEntity;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {

    // @Select("SELECT * from public.\"USER_DEMO1\"")
    List<UserEntity> selectAll();
}