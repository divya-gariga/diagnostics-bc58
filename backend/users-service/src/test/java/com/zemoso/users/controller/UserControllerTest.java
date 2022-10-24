package com.zemoso.users.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.users.dto.UserDto;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import com.zemoso.users.entity.User;
import com.zemoso.users.repository.UserRepository;
import com.zemoso.users.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {
    @MockBean
    UserRepository user;
    @Autowired
    MockMvc mockMvc;
    @Autowired
    UserService userService;
    @Autowired
    UserController userController;
    @Autowired
    ModelMapper userMapper;

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    @Test
    void controllerGetTest() throws Exception {
        String id="Temp";
        when(user.findById(id)).thenReturn(Optional.of(userMapper.map(new UserDto(id,"Fist NME","Email"), User.class)));
        userController.getUser("Temp");
        verify(user).findById(id);
        mockMvc.perform(get("/users/"+id)).andExpect(status().isOk());
    }
    @Test
    void controllerPostTest() throws Exception {
        String id="Temp";
        UserDto test=new UserDto("Temp","Fist NEM","EMAil");
        doReturn(userMapper.map(test,User.class)).when(user).save(userMapper.map(test,User.class));
        userController.postUser(test);
        verify(user).save(userMapper.map(test,User.class));
        mockMvc.perform(post("/users/").content(asJsonString(test)).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }
}