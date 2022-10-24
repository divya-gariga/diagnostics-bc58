package com.zemoso.patientservice.controller;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping("/{userId}/patients")
    @ResponseBody
    public List<PatientDto> findByUserId(@PathVariable String userId) {
        return patientService.getAllPatients(userId);
    }
    @GetMapping("/{patientId}")
    @ResponseBody
    public PatientDto findById(@PathVariable int patientId) {
        return patientService.findById(patientId);
    }

    @PostMapping("/")
    @ResponseBody
    public PatientDto savePatient(@RequestBody PatientDto patient){
        return patientService.save(patient);
    }

    @PutMapping("/{patientId}")
    @ResponseBody
    public PatientDto updatePatient(@PathVariable int patientId,@RequestBody PatientDto patient){

        return patientService.update(patientId,patient);
    }

}
