package com.keiziban.lol.lolk003.result;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class BaseResult {
    private List<String> errors = new ArrayList<>();
}