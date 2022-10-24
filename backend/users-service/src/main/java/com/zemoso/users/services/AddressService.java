package com.zemoso.users.services;

import com.zemoso.users.dto.AddressDto;
import com.zemoso.users.entity.Address;
import com.zemoso.users.entity.User;
import com.zemoso.users.exception.ResourceNotFound;
import com.zemoso.users.repository.AddressRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AddressService {
private AddressRepository addressRepository;

@Autowired
private UserService userService;
private ModelMapper modelMapper;
public AddressService(AddressRepository addressRepository,ModelMapper modelMapper,UserService userService){
    this.addressRepository=addressRepository;
    this.modelMapper=modelMapper;
    this.userService=userService;
}
public List<AddressDto> getAddress(String id){
    try{
        User user=modelMapper.map(userService.getUser(id),User.class);
        List<Address> result= addressRepository.findAllByUserID(user);
        List<AddressDto> response=new ArrayList<>();
        for (Address iterable:result
             ) {
            AddressDto converted=modelMapper.map(iterable,AddressDto.class);
            response.add(converted);
        }
        return response;
    }catch(Exception e){
        throw new ResourceNotFound("Not found User ID"+e.getMessage());
    }
}
public AddressDto saveAddress(AddressDto request) throws ResourceNotFound {


        Address converted = modelMapper.map(request,Address.class);
        Address result = addressRepository.save(converted);
        return modelMapper.map(result,AddressDto.class);

}
}
