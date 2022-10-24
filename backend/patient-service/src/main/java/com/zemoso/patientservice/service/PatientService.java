package com.zemoso.patientservice.service;
import com.zemoso.patientservice.dto.PatientDto;


import java.util.List;
public interface PatientService {
    List<PatientDto> findAll();
    PatientDto findById(int pId);
    List<PatientDto> getAllPatients(String userID);
    PatientDto save(PatientDto patient);
    PatientDto update(int id, PatientDto patient);
}
