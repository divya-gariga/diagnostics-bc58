package com.zemoso.users.controller;

import com.zemoso.users.dto.UserDto;
import com.zemoso.users.exception.DuplicateKey;
import com.zemoso.users.exception.ResourceNotFound;
import com.zemoso.users.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;
    public UserController(UserService userService){
        this.userService=userService;
    }
    @GetMapping("{id}")
    @ResponseBody
    public ResponseEntity<UserDto> getUser(@PathVariable("id") String id){
        return new ResponseEntity<UserDto>(this.userService.getUser(id), HttpStatus.OK );
    }
    @PostMapping
    @ResponseBody
    public ResponseEntity<UserDto> postUser(@RequestBody UserDto user) throws DuplicateKey, ResourceNotFound {
        return new ResponseEntity<UserDto>(this.userService.saveUser(user),HttpStatus.OK );
    }
}
