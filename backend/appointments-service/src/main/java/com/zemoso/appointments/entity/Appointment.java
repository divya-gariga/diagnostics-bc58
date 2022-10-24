package com.zemoso.appointments.entity;


import com.zemoso.appointments.vo.Lab;
import com.zemoso.appointments.vo.Patient;
import com.zemoso.appointments.vo.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "appointements")
public class Appointment {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "month")
    private String month;

    @Column(name = "date")
    private String date;

    @Column(name = "time")
    private String time;

    @ManyToOne
    @JoinColumn(name = "users_id")
    private User userID;

    @ManyToOne
    @JoinColumn(name = "labs_id")
    private Lab labID;

    @ManyToOne
    @JoinColumn(name = "patients_id")
    private Patient patientID;


}
