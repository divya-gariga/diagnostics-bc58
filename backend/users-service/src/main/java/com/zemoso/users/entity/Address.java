package com.zemoso.users.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity()
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "address_id")
    private int addressID;
    @Column(name="house_number")
    private String houseNumber;
    @Column(name="area")
    private String area;
    @Column(name="city")
    private String city;
    @Column(name="zipcode")
    private String zipcode;

    @JsonBackReference
    @ManyToOne(targetEntity = com.zemoso.users.entity.User.class)
    @JoinColumn(name = "users_id")
    private User userID;
}
