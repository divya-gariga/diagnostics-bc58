package com.zemoso.users.repository;

import com.zemoso.users.entity.Address;
import com.zemoso.users.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address, Integer> {
    List<Address> findAllByUserID(User userID);
}
