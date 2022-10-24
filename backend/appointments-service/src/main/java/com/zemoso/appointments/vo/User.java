package com.zemoso.appointments.vo;


import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users",schema = "public")
public class User {
    @Id
    @Column(name="id")
    private String id;
    @Column(name = "user_name")
    private String userName;
    @Column(name="email_id")
    private String emailId;
}