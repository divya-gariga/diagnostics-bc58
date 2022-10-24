package com.zemoso.appointments.testvo;

import com.zemoso.appointments.vo.Lab;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TestLabVo {
    @Test
    void testVoLab(){
        Lab lab = new Lab();
        lab.setId(1);
        lab.setLabName("sks");
        lab.setLabIcon("amg");
        lab.setCost("1200");
        lab.setSlots(4);
        lab.setRating("4.5");
        lab.setTime("04:00pm");
        Lab lab1 = new Lab(1,"sks","amg","04:00pm","1200","4.5",4);
        assertEquals(1,lab1.getId());
        assertEquals("sks",lab1.getLabName());
        assertEquals("amg",lab1.getLabIcon());
        assertEquals("1200",lab1.getCost());
        assertEquals(4,lab1.getSlots());
        assertEquals("4.5",lab1.getRating());
        assertEquals("04:00pm",lab1.getTime());
        assertEquals(lab1.toString(),lab.toString());
    }
}
