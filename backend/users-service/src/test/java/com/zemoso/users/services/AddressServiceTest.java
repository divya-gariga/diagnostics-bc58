package com.zemoso.users.services;

import com.zemoso.users.controller.AddressController;
import com.zemoso.users.dto.AddressDto;
import com.zemoso.users.entity.Address;
import com.zemoso.users.entity.User;
import com.zemoso.users.exception.ResourceNotFound;
import com.zemoso.users.repository.AddressRepository;
import com.zemoso.users.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;

@SpringBootTest
class AddressServiceTest {
    @MockBean
    AddressRepository address;
    @Autowired
    UserService userService;
    @MockBean
    UserRepository userRepository;
    AddressService addressService;
    AddressController addressController;

    ModelMapper modelMapper =new ModelMapper();
    @BeforeEach
    void initialSetup(){
        this.addressService =new AddressService(this.address,this.modelMapper,this.userService);
        this.addressController =new AddressController(this.addressService);

    }
    @Test
    void serviceGetTest(){
        User user=new User("Temp","Username","Email");
        Address data=new Address(1,"222","MountainView","California","5000060",user);
        List<Address> d=new ArrayList<Address>();
        d.add(data);
        doReturn(d).when(address).findAllByUserID(user);
        System.out.println(userRepository);
        doReturn(Optional.of(user)).when(userRepository).findById(user.getId());
        addressService.getAddress(user.getId());
        verify(address).findAllByUserID(user);
        User user1=new User("Tem","U","E");
        doThrow(new ResourceNotFound("Not found with ID")).when(address).findAllByUserID(user1);
        Assertions.assertThrows(ResourceNotFound.class,()->{
            addressService.getAddress("Tem");
        });
    }
    @Test
    void servicePostTest(){
        User user=new User("Temp","Username","Email");
        Address data=new Address(1,"222","MountainView","California","5000060",user);
        doReturn(data).when(address).save(data);
        addressService.saveAddress(this.modelMapper.map(data, AddressDto.class));
        verify(address).save(data);
    }

}