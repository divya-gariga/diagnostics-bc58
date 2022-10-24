package com.zemoso.appointments.controller;

import com.zemoso.appointments.dto.AppointmentDto;
import com.zemoso.appointments.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;


    @PostMapping("/")
    @ResponseBody
    public AppointmentDto saveAppointment(@RequestBody AppointmentDto appointmentDto){
        appointmentService.saveAppointment(appointmentDto);
        return appointmentDto;
    }
}
