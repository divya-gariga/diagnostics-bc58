package com.zemoso.patientservice.repository;
import com.zemoso.patientservice.entity.Patient;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {
    @Query(value = "SELECT * from patients p WHERE p.users_id=?1", nativeQuery = true)
    List<Patient> findAllByUserId(String userId);
}