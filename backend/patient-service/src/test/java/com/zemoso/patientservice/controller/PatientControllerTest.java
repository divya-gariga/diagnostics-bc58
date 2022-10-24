package com.zemoso.patientservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.patientservice.dto.PatientDto;
import com.zemoso.patientservice.entity.Patient;
import com.zemoso.patientservice.exception.PatientNotFoundException;
import com.zemoso.patientservice.repository.PatientRepository;
import com.zemoso.patientservice.service.PatientService;
import com.zemoso.patientservice.vo.User;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.IOException;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(PatientController.class)

 class PatientControllerTest {
    @Autowired
    private MockMvc mvc;
    @MockBean
    private PatientRepository patientRepository;
    @MockBean
    private PatientService patientService;
    @Autowired
    PatientController patientController;
@Autowired
    private ModelMapper modelMapper;
    protected String mapToJson(Object obj) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(obj);
    }
    protected <T> T mapFromJson(String json, Class<T> clazz)
            throws JsonParseException, JsonMappingException, IOException {

        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(json, clazz);
    }
    @Test
     void testFindAll() throws Exception{
   PatientDto patientDto=new PatientDto();
   patientDto.setId(1);
        when(patientService.getAllPatients("temp")).thenReturn(Arrays.asList(patientDto));
        assertEquals(1, patientController.findByUserId("temp").size());
    }

    @Test
     void testFindById() throws Exception{
        User user = new User("1","Sohail","sks@gmail.com");
        PatientDto patient =modelMapper.map( new Patient(1,"self","12","sohail","M",user),PatientDto.class);
        Mockito.when(patientService.findById(1)).thenReturn(patient);
        String url = "/patients/1";
        MvcResult mvcResult = mvc.perform(get(url)).andExpect(status().isOk()).andReturn();
        String content = mvcResult.getResponse().getContentAsString();
        PatientDto patientDtos =mapFromJson(content, PatientDto.class);
        assertEquals(patient.getAge(),patientDtos.getAge());
    }

    @Test
     void testSavePatient() throws Exception{
        User user = new User("1","Sohail","sks@gmail.com");
        PatientDto patient =modelMapper.map( new Patient(1,"self","12","sohail","M",user),PatientDto.class);
        String inputJson = mapToJson(patient);
        Mockito.when(patientService.save(patient)).thenReturn(patient);

        String uri = "/patients/";
        MvcResult mvcResult = mvc.perform(post(uri).contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(inputJson)).andReturn();
        assertEquals(200,mvcResult.getResponse().getStatus());
    }
    @Test
     void testUpdatePatient() throws Exception{
        User user = new User("1","Sohail","sks@gmail.com");
        PatientDto patient =modelMapper.map( new Patient(1,"self","12","sohail","M",user),PatientDto.class);
        String inputJson = mapToJson(patient);
        Mockito.when(patientService.save(patient)).thenReturn(patient);
        PatientDto patient2 =modelMapper.map( new Patient(1,"Father","12","sohail","M",user),PatientDto.class);
        Mockito.when(patientService.update(1,patient2)).thenReturn(patient2);
        String uri = "/patients/1";
        MvcResult mvcResult = mvc.perform(put(uri).contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(inputJson)).andReturn();
        assertEquals(200,mvcResult.getResponse().getStatus());
    }
}
