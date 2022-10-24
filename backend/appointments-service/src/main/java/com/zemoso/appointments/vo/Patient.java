package com.zemoso.appointments.vo;

import lombok.*;
import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "patients", schema = "public")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="relation")
    private String relation;

    @Column(name = "age")
    private String age;

    @Column(name = "name")
    private String name;

    @Column(name = "gender")
    private String gender;

    @ManyToOne
    @JoinColumn(name = "users_id")
    private User userID;

    public User getUserID() {
        return userID;
    }

    public void setUserID(User userID) {
        this.userID = userID;
    }
}
