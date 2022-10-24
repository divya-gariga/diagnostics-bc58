package com.zemoso.reportsservice.controller;

import com.zemoso.reportsservice.dto.ReportDto;
import com.zemoso.reportsservice.service.ReportService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

@SpringBootTest
 class ReportControllerTest {
    @MockBean
    ReportService reportService;
    @Autowired
    ReportController reportController;


    @Test
    void addNewReport() {
        ReportDto reportDto = new ReportDto();
        doNothing().when(reportService).addReport(reportDto);
        assertEquals(new ResponseEntity<String>("Report Created Successfully successfully", HttpStatus.CREATED), reportController.addNewReport(reportDto));
    }


    @Test
    void getAllReportsByUserId() {
        ReportDto reportDto = new ReportDto();
        reportDto.setId(1);
        when(reportService.getAllReports("temp")).thenReturn(Arrays.asList(reportDto));
        assertEquals(1, reportController.getAllReports("temp").size());
    }
}