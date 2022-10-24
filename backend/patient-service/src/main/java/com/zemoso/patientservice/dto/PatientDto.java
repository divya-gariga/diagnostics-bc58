package com.zemoso.patientservice.dto;

import com.zemoso.patientservice.vo.User;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PatientDto {
    private int id;
    private String relation;
    private String age;
    private String name;
    private String gender;
    private User userID;

}
