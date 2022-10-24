package com.zemoso.labs.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

 class LabsEntityTest {
    @Test
    void labsEntity(){
        Labs labs=new Labs();
        labs.setId(1);
        labs.setLabName("Los Altos Center Lab");
        labs.setLabIcon("Lab icon");
        labs.setCost("$1200");
        labs.setRating("4.3");
        labs.setSlots(4);
        assertEquals(1,labs.getId());
        assertEquals("Los Altos Center Lab",labs.getLabName());
        assertEquals("Lab icon",labs.getLabIcon());
        assertEquals("$1200",labs.getCost());
        assertEquals("4.3",labs.getRating());
        assertEquals(4,labs.getSlots());
        assertEquals("Labs(id=1, labName=Los Altos Center Lab, labIcon=Lab icon, time=null, cost=$1200, rating=4.3, slots=4)",labs.toString());
    }
}
