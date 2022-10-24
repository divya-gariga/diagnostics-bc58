package com.zemoso.patientservice.service;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
import com.zemoso.patientservice.exception.PatientNotFoundException;
import com.zemoso.patientservice.repository.PatientRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    PatientRepository patientRepository;
    @Autowired
    ModelMapper modelMapper;

    public PatientServiceImpl(PatientRepository patientRepository,  ModelMapper modelMapper) {
        this.patientRepository = patientRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<PatientDto> findAll() {
        List<Patient> allPatients = patientRepository.findAll();
        List<PatientDto> patientsList = new ArrayList<>();
        for(Patient patient : allPatients){
            patientsList.add(modelMapper.map(patient,PatientDto.class));
        }
        return patientsList;
    }

    @Override
    public PatientDto findById(int pId) {
        Optional<Patient> result = patientRepository.findById((pId));
        if(!result.isPresent()){
            throw new PatientNotFoundException("No Patient Found");
        }
        return modelMapper.map(result.get(),PatientDto.class);
    }

    @Override
    public PatientDto save(PatientDto patient) {
        patientRepository.save(modelMapper.map(patient,Patient.class));
        return patient;
    }

    @Override
    public PatientDto update(int id, PatientDto patient) {
        Optional<Patient> updatedPatient = patientRepository.findById(id);
        Patient newPatient = null;
        if (updatedPatient.isPresent()) {
            newPatient=updatedPatient.get();
            newPatient.setId(patient.getId());
            newPatient.setRelation(patient.getRelation());
            newPatient.setAge(patient.getAge());
            newPatient.setName(patient.getName());
            newPatient.setGender(patient.getGender());
            newPatient.setUserID(patient.getUserID());
            patientRepository.save(newPatient);
        } else {
            throw new PatientNotFoundException("Did not find patient id - " + id);
        }
        return modelMapper.map(newPatient,PatientDto.class);
    }

    @Override
    public List<PatientDto> getAllPatients(String userID) {
        List<Patient> allPatients = patientRepository.findAllByUserId(userID);
        if(allPatients==null){
            throw new PatientNotFoundException("No Patients with userId:"+userID);
        }
        List<PatientDto> allPatientsDto = new ArrayList<>();
        for(Patient patient:allPatients){
            allPatientsDto.add(modelMapper.map(patient,PatientDto.class));
        }
        return allPatientsDto;
    }
}
