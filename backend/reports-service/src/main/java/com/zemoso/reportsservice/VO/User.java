package com.zemoso.reportsservice.VO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity()
@Table(name = "users")
public class User {
    @Id
    @Column(name="id")
    private String id;
    @Column(name = "user_name")
    private String userName;
    @Column(name="email_id")
    private String emailId;
}