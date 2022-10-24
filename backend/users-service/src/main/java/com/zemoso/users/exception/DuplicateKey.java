package com.zemoso.users.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class DuplicateKey extends Exception{
    public DuplicateKey(String message){
        super("Duplicate Key error: "+message);
    }
}
