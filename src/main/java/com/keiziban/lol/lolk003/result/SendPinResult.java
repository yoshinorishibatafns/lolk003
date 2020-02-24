package com.keiziban.lol.lolk003.result;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class SendPinResult extends BaseResult{
    private boolean sendPinResult;
}