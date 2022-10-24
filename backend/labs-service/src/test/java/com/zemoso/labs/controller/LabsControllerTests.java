package com.zemoso.labs.controller;

import com.zemoso.labs.dto.LabsDto;
import com.zemoso.labs.service.LabsService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
class LabsControllerTests {

    @MockBean
    LabsService labsService;

    @Autowired
    LabsController labsController;

    @Test
    void getAllLabs() {
        LabsDto labsDto=new LabsDto();
        when(labsService.getAllLabs()).thenReturn(Arrays.asList(labsDto));
        assertEquals(1,labsController.getAllLabs().size());
    }
    @Test
    void getLabById(){
        LabsDto labsDto =new LabsDto();
        labsDto.setId(1);
        when(labsService.getLabById(1)).thenReturn(labsDto);
        assertEquals(labsDto,labsController.getLabById(1));
    }
}