package com.zemoso.users.dto;
import com.zemoso.users.entity.User;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressDto {
    private int addressID;
    private String houseNumber;
    private String area;
    private String city;
    private String zipcode;
    private User userID;
}
