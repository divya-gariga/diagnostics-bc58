package com.zemoso.patientservice.service;

import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.vo.User;
import com.zemoso.patientservice.entity.Patient;
import com.zemoso.patientservice.exception.PatientNotFoundException;
import com.zemoso.patientservice.repository.PatientRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;

@SpringBootTest
class ServiceTest {
    @Autowired
    private PatientService patientService;
    @MockBean
    private PatientRepository patientRepository;
@Autowired
    private ModelMapper modelMapper;
    @Test
    void getAllPatients(){

        Patient patient = new Patient();
        User user = new User("1","Sohail","sks@gmail.com");
        patient.setUserID(user);
        patient.setRelation("self");
        patient.setAge("12");
        patient.setName("sohail");
        patient.setId(1);
        patient.setGender("M");

        Mockito.when(patientRepository.findAll()).thenReturn(Arrays.asList(patient));
        System.out.println(patientRepository.findAll());
        assertEquals(1,patientService.findAll().size());

    }

    @Test
    void getPatientById(){
        User user = new User("1","Sohail","sks@gmail.com");
        Patient patient1 = new Patient(1,"self","12","sohail","M",user);
        when(patientRepository.findById(1)).thenReturn(Optional.of(patient1));
        assertEquals(1,patientService.findById(1).getId());
    }
    @Test
    void patientException(){
        Exception exception =assertThrows(PatientNotFoundException.class,()->{
            patientService.findById(5);
        });
        String expectedMsg="No Patient Found";
        String actualMsg = exception.getMessage();
        assertEquals(expectedMsg,actualMsg);
    }
    @Test
    void getAllPatientsByUserId()
    {
        Patient patient=new Patient();
        when(patientRepository.findAllByUserId("temp")).thenReturn(Arrays.asList(patient));
        assertEquals(1,patientService.getAllPatients("temp").size());
    }
    @Test
    void getAllPatientsByUserIdException()
    {
       when(patientRepository.findAllByUserId("temp")).thenReturn(null);
        Exception exception =assertThrows(PatientNotFoundException.class,()->{
            patientService.getAllPatients("temp");
        });
        String expectedMsg="No Patients with userId:temp";
        String actualMsg = exception.getMessage();
        assertEquals(expectedMsg,actualMsg);

    }
    @Test
    void testSavePatient(){
        User user = new User("1","Sohail","sks@gmail.com");
        PatientDto patient =modelMapper.map( new Patient(1,"self","12","sohail","M",user),PatientDto.class);
        Mockito.when(patientService.save(patient)).thenReturn(patient);
        assertEquals(patient.getId(),patientService.save(patient).getId());
    }
    @Test
    void testUpdatePatient(){
        User user = new User("2","Sohail","sks@gmail.com");
        Patient patient =new Patient(2,"self","12","sohail","M",user);
        when(patientRepository.findById(2)).thenReturn(Optional.of(patient));
        PatientDto patient2 =modelMapper.map( new Patient(2,"self","19","sohail","M",user),PatientDto.class);
        when(patientService.update(2,patient2)).thenReturn(patient2);
        assertEquals("19",patientRepository.findById(2).get().getAge());
    }
    @Test
    void testNoPatientUpdate(){
        User user = new User("5","Sohail","sks@gmail.com");
        PatientDto patient =modelMapper.map(new Patient(9,"self","12","sohail","M",user),PatientDto.class);
        Exception exception =assertThrows(PatientNotFoundException.class,()->{
            patientService.update(9,patient);
        });
        String expectedMsg="Did not find patient id - 9";
        String actualMsg = exception.getMessage();
        assertEquals(expectedMsg,actualMsg);
    }

}
