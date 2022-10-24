package com.zemoso.labs.dto;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

 class LabsDtoTest {
    @Test
    void labsDto(){
        LabsDto labs=new LabsDto();
        labs.setId(1);
        labs.setLabName("Los Altos Center Lab");
        labs.setTime("24 hrs");
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
        assertEquals("24 hrs",labs.getTime());
        LabsDto labs2=new LabsDto(1,"Los Altos Center Lab","LabIcon","24 hrs","$1200","4.3",5);
    }
}
