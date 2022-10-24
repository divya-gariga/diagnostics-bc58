package com.zemoso.appointments.service;

import com.zemoso.appointments.dto.AppointmentDto;

import java.util.List;

public interface AppointmentService {
    public List<AppointmentDto> findAll();
    public AppointmentDto saveAppointment(AppointmentDto appointmentDto);
}
