package com.zemoso.users.controller;

import com.zemoso.users.dto.AddressDto;
import com.zemoso.users.services.AddressService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/address")
public class AddressController {
    private AddressService addressService;
    public AddressController(AddressService addressService){
        this.addressService=addressService;
    }
    @GetMapping("/{id}")
    public List<AddressDto> getAddress(@PathVariable("id") String userID){
        return addressService.getAddress(userID);
    }
    @PostMapping("/")
    @ResponseBody
    public AddressDto postAddress(@RequestBody AddressDto request) {
        return addressService.saveAddress(request);
    }
}
