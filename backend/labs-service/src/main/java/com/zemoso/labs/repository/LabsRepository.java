package com.zemoso.labs.repository;

import com.zemoso.labs.entity.Labs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LabsRepository extends JpaRepository<Labs, Integer> {
}
