package com.zemoso.appointments.testservice;


import com.zemoso.appointments.vo.Lab;
import com.zemoso.appointments.vo.Patient;
import com.zemoso.appointments.vo.User;
import com.zemoso.appointments.dto.AppointmentDto;
import com.zemoso.appointments.entity.Appointment;
import com.zemoso.appointments.repository.AppointmentsRepository;
import com.zemoso.appointments.service.AppointmentService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TestAppointmentServices {
    @MockBean
    AppointmentsRepository appointmentsRepository;

    @Autowired
    AppointmentService appointmentService;
    @Autowired
    ModelMapper modelMapper;
    @Test
    void testSaveAppointment(){
        User user = new User("1","Sohail","sks@gmail.com");
        Patient patient = new Patient(1,"self","12","sohail","M",user);
        Lab lab = new Lab(1, "Los Altos Center Lab", "Lab icon", null, "$1200", "4.3", 4);
        Appointment appointment = new Appointment(1,"January","24","06:00am - 07:00am",user,lab,patient);
        AppointmentDto appointmentDto =modelMapper.map(appointment,AppointmentDto.class);
        Mockito.when(appointmentsRepository.save(appointment)).thenReturn(appointment);
        assertEquals(appointmentService.saveAppointment(appointmentDto),appointmentDto);

    }
    @Test
    void testFindALl(){
        User user = new User("1","Sohail","sks@gmail.com");
        Patient patient = new Patient(1,"self","12","sohail","M",user);
        Lab lab = new Lab(1, "Los Altos Center Lab", "Lab icon", null, "$1200", "4.3", 4);
        Appointment appointment = new Appointment(1,"January","24","06:00am - 07:00am",user,lab,patient);
        Mockito.when(appointmentsRepository.findAll()).thenReturn(Arrays.asList(appointment));
        assertEquals(1,appointmentService.findAll().size());
    }
}
