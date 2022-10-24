package com.zemoso.users.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.users.dto.AddressDto;
import com.zemoso.users.entity.User;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import com.zemoso.users.repository.AddressRepository;
import com.zemoso.users.repository.UserRepository;
import com.zemoso.users.services.AddressService;
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

import java.util.ArrayList;
import java.util.List;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.verify;
@SpringBootTest
@AutoConfigureMockMvc
class AddressControllerTest {
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    MockMvc mockMvc;
    @MockBean
    AddressService addressService;
    AddressController addressController;
    ModelMapper ump=new ModelMapper();
    @BeforeEach
    void initialSetup(){
        this.addressController=new AddressController(addressService);
    }
    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    @Test
    void getAddress() throws Exception {
        User user=new User("Temp","Username","Email");
        AddressDto data=new AddressDto(1,"222","MountainView","California","5000060",user);
        List<AddressDto> d=new ArrayList<AddressDto>();
        d.add(data);
        doReturn(d).when(addressService).getAddress(user.getId());
        addressController.getAddress(user.getId());
        verify(addressService).getAddress(user.getId());
        mockMvc.perform(get("/address/"+user.getId())).andExpect(status().isOk());
    }

    @Test
    void postAddress() throws Exception {
        User user=new User("Temp","Username","Email");
        AddressDto data=new AddressDto(1,"222","MountainView","California","5000060",user);
        doReturn(data).when(addressService).saveAddress(data);
        addressController.postAddress(data);
        verify(addressService).saveAddress(data);
        mockMvc.perform(post("/address/").content(asJsonString(data)).contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }
}