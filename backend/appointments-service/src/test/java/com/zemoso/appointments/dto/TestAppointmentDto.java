package com.zemoso.appointments.dto;

import com.zemoso.appointments.vo.Lab;
import com.zemoso.appointments.vo.Patient;
import com.zemoso.appointments.vo.User;
import com.zemoso.appointments.entity.Appointment;
import com.zemoso.appointments.repository.AppointmentsRepository;
import com.zemoso.appointments.service.AppointmentService;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TestAppointmentDto {
    @Autowired
    private AppointmentService appointmentService;

    @MockBean
    private AppointmentsRepository appointmentsRepository;

    @Autowired
    ModelMapper modelMapper;
    @Test
    void testAppointmentDto(){
    User user = new User("1","Sohail","sks@gmail.com");
    Patient patient = new Patient(1,"self","12","sohail","M",user);
    Lab lab = new Lab(1, "Los Altos Center Lab", "Lab icon", null, "$1200", "4.3", 4);
    Appointment appointment1 = new Appointment(1,"January","24","06:00am - 07:00am",user,lab,patient);
    AppointmentDto appointmentDto = new AppointmentDto();
    appointmentDto.setDate(appointment1.getDate());
    appointmentDto.setId(appointment1.getId());
    appointmentDto.setTime(appointment1.getTime());
    appointmentDto.setMonth(appointment1.getMonth());
    appointmentDto.setUserID(appointment1.getUserID());
    appointmentDto.setLabID(appointment1.getLabID());
    appointmentDto.setPatientID(appointment1.getPatientID());
    AppointmentDto appointmentDto1 = new AppointmentDto(1,"January","24","06:00am - 07:00am",user,lab,patient);
    assertEquals(appointmentDto.getUserID(),user);
    assertEquals(appointmentDto.getId(),appointment1.getId());
    assertEquals(appointmentDto.getDate(),appointment1.getDate());
    assertEquals(appointmentDto.getTime(),appointment1.getTime());
    assertEquals(appointmentDto.getLabID(),appointment1.getLabID());
    assertEquals(appointmentDto.getPatientID(),appointment1.getPatientID());
    assertEquals(appointmentDto1.getMonth(),appointmentDto.getMonth());

    }
    @Test
    void testMapperEntitytoDto(){
        User user = new User("1","Sohail","sks@gmail.com");
        Patient patient = new Patient(1,"self","12","sohail","M",user);
        Lab lab = new Lab(1, "Los Altos Center Lab", "Lab icon", null, "$1200", "4.3", 4);
        Appointment appointment1 = new Appointment(1,"January","24","06:00am - 07:00am",user,lab,patient);
        AppointmentDto appointmentDto = modelMapper.map(appointment1,AppointmentDto.class);
        assertEquals(appointment1.getId(),appointmentDto.getId());
        assertEquals(appointment1.getMonth(),appointmentDto.getMonth());
        assertEquals(appointment1.getDate(),appointmentDto.getDate());
        assertEquals(appointment1.getTime(),appointmentDto.getTime());
        assertEquals(appointment1.getPatientID(),appointmentDto.getPatientID());
        assertEquals(appointment1.getLabID(),appointmentDto.getLabID());
        assertEquals(appointment1.getUserID(),appointmentDto.getUserID());


    }

}
