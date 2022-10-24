package com.zemoso.appointments.service;

import com.zemoso.appointments.dto.AppointmentDto;
import com.zemoso.appointments.entity.Appointment;
import com.zemoso.appointments.repository.AppointmentsRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    AppointmentsRepository appointmentsRepository;
    private ModelMapper modelMapper;

    public AppointmentServiceImpl(AppointmentsRepository appointmentsRepository, ModelMapper modelMapper) {
        this.appointmentsRepository = appointmentsRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<AppointmentDto> findAll() {
        List<Appointment> allAppointments = appointmentsRepository.findAll();
        List<AppointmentDto> allAppointmentsDto = new ArrayList<>();
        for(Appointment appointment : allAppointments){
            allAppointmentsDto.add(modelMapper.map(appointment,AppointmentDto.class));
        }
        return allAppointmentsDto;
    }

    @Override
    public AppointmentDto saveAppointment(AppointmentDto appointmentDto) {
        Appointment appointment = modelMapper.map(appointmentDto,Appointment.class);
        appointmentsRepository.save(appointment);
        return appointmentDto;
    }
}
