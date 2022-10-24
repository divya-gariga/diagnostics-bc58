package com.zemoso.labs.service;

import com.zemoso.labs.entity.Labs;
import com.zemoso.labs.exception.LabNotFoundException;
import com.zemoso.labs.repository.LabsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@SpringBootTest
 class LabsServiceImplementationTests {
    @Autowired
    LabsService labsService;
    @MockBean
    LabsRepository labsRepository;

    @Test
    void getAllLabs()
    {
        Labs labs=new Labs(1,"Los Altos Center Lab","LabIcon","24 hrs","$1200","4.3",5);
        when(labsRepository.findAll()).thenReturn(Arrays.asList(labs));
        assertEquals(1,labsService.getAllLabs().size());
    }
    @Test
    void getLabById()
    {
        Labs labs=new Labs(1,"Los Altos Center Lab","LabIcon","24 hrs","$1200","4.3",5);
        when(labsRepository.findById(1)).thenReturn(Optional.of(labs));
        assertEquals(1,labsService.getLabById(1).getId());
    }
    @Test
    void getLabByIdException() {
        Exception exception = assertThrows(LabNotFoundException.class, () -> {
            labsService.getLabById(1);
        });
        String expectedMessage = "Lab Not Found with Id-1";
        String actualMessage = exception.getMessage();
        assertEquals(expectedMessage,actualMessage);
    }


}
