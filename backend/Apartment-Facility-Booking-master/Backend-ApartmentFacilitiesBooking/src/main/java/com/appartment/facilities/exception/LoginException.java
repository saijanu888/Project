package com.appartment.facilities.exception;
public class LoginException extends Exception {

    private static final long serialVersionUID = 1L;
    public LoginException(String msg){
        super(msg);
    }
}