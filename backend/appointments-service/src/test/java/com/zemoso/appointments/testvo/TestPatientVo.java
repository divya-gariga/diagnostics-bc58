package com.zemoso.appointments.testvo;

import com.zemoso.appointments.vo.Patient;
import com.zemoso.appointments.vo.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;
@SpringBootTest
class TestPatientVo {
    @Test
    void testPatientVo(){
        Patient patient = new Patient();
        User user = new User("1","Sohail","sks@gmail.com");

        patient.setUserID(user);
        patient.setRelation("self");
        patient.setAge("12");
        patient.setName("sohail");
        patient.setId(1);
        patient.setGender("M");
        assertEquals(1,patient.getId());
        assertEquals("self",patient.getRelation());
        assertEquals("sohail",patient.getName());
        assertEquals("12",patient.getAge());
        assertEquals("M",patient.getGender());
        assertEquals("M",patient.getGender());
        assertEquals(user,patient.getUserID());
    }
}
