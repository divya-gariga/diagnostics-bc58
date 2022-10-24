package com.zemoso.appointments.testentity;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.zemoso.appointments.dto.AppointmentDto;
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

@SpringBootTest
 class TestAppointment {
    @Autowired
    private AppointmentService appointmentService;

    @MockBean
    private AppointmentsRepository appointmentsRepository;
@Autowired
    ModelMapper modelMapper;
    @Test
    void testEntityAppointment(){
        Appointment appointment = new Appointment();
        appointment.setId(1);
        appointment.setDate("24");
        appointment.setMonth("January");
        appointment.setTime("06:00am - 07:00am");
        User user = new User("1","Sohail","sks@gmail.com");
        Patient patient = new Patient(1,"self","12","sohail","M",user);
        Lab lab = new Lab(1, "Los Altos Center Lab", "Lab icon", null, "$1200", "4.3", 4);
        appointment.setUserID(user);
        appointment.setLabID(lab);
        appointment.setPatientID(patient);
        assertEquals(1,appointment.getId());
        assertEquals("24",appointment.getDate());
        assertEquals("January",appointment.getMonth());
        assertEquals("06:00am - 07:00am",appointment.getTime());
        assertEquals(user,appointment.getUserID());
        assertEquals(patient,appointment.getPatientID());
        assertEquals(lab,appointment.getLabID());
        Appointment appointment1 = new Appointment(1,"January","24","06:00am - 07:00am",user,lab,patient);
        assertEquals(appointment.getDate(),appointment1.getDate());
    }
    @Test
    void testMapperDtotoEntity(){
        User user = new User("1","Sohail","sks@gmail.com");
        Patient patient = new Patient(1,"self","12","sohail","M",user);
        Lab lab = new Lab(1, "Los Altos Center Lab", "Lab icon", null, "$1200", "4.3", 4);
        AppointmentDto appointmentDto1 = new AppointmentDto(1,"January","24","06:00am - 07:00am",user,lab,patient);

        Appointment appointment = modelMapper.map(appointmentDto1,Appointment.class);
        assertEquals(appointment.getId(),appointmentDto1.getId());
        assertEquals(appointment.getMonth(),appointmentDto1.getMonth());
        assertEquals(appointment.getDate(),appointmentDto1.getDate());
        assertEquals(appointment.getTime(),appointmentDto1.getTime());
        assertEquals(appointment.getPatientID(),appointmentDto1.getPatientID());
        assertEquals(appointment.getLabID(),appointmentDto1.getLabID());
        assertEquals(appointment.getUserID(),appointmentDto1.getUserID());
    }
}
