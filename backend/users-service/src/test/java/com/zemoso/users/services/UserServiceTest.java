package com.zemoso.users.services;

import com.zemoso.users.controller.UserController;
import com.zemoso.users.dto.UserDto;
import com.zemoso.users.entity.User;
import com.zemoso.users.exception.DuplicateKey;
import com.zemoso.users.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.verify;
@SpringBootTest
class UserServiceTest {
    @MockBean
    UserRepository user;
    UserService userService;
    UserController userController;
    ModelMapper userMapper=new ModelMapper();
    @BeforeEach
    void initialSetup(){
        this.userService=new UserService(this.user,this.userMapper);
        this.userController =new UserController(this.userService);
    }

    @Test
    void serviceGetTest(){
        UserDto test=new UserDto("Temp","Fist NEM","EMAil");
        doReturn(Optional.of(userMapper.map(test, User.class))).when(user).findById(test.getId());
        userService.getUser(test.getId());
        verify(user).findById(test.getId());
    }
    @Test
    void servicePostTest(){
        UserDto test=new UserDto("Temp","Fist NEM","EMAil");
        doReturn(Optional.of(userMapper.map(test, User.class))).when(user).findById(test.getId());
        Assertions.assertThrows(DuplicateKey.class,()->{
           userService.saveUser(test);
        });
    }
    @Test
    void servicePostSuccessTest() throws DuplicateKey {
        UserDto test=new UserDto("Temp","Fist NEM","EMAil");
        UserDto test1=new UserDto("T","F","E");
        doReturn(Optional.of(userMapper.map(test1, User.class))).when(user).findById(test.getId());
        doReturn(Optional.of(userMapper.map(test,User.class))).when(user).save(userMapper.map(test,User.class));
        userService.saveUser(test);
        verify(user).findById(test.getId());
        verify(user).save(userMapper.map(test1,User.class));

    }
}