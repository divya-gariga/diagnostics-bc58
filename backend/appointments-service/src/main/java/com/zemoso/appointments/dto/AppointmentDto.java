package com.zemoso.appointments.dto;

import com.zemoso.appointments.vo.Lab;
import com.zemoso.appointments.vo.Patient;
import com.zemoso.appointments.vo.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDto {
    private int id;
    private String month;
    private String date;
    private String time;
    private User userID;
    private Lab labID;
    private Patient patientID;
}
