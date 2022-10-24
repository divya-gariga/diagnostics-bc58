package com.zemoso.appointments.testcontroller;

import com.zemoso.appointments.controller.AppointmentController;
import com.zemoso.appointments.dto.AppointmentDto;
import com.zemoso.appointments.service.AppointmentService;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
class TestingControllers {
        @Autowired
        private MockMvc mvc;

        @MockBean
        AppointmentService appointmentService;

        @Autowired
        ModelMapper modelMapper;
        @Autowired
    AppointmentController appointmentController;



        @Test
    void testPostAppointment() throws Exception{

            AppointmentDto appointmentDto = new AppointmentDto();
            when(appointmentService.saveAppointment(appointmentDto)).thenReturn(appointmentDto);
            assertEquals(appointmentDto, appointmentController.saveAppointment(appointmentDto));
        }



    }
