package com.zemoso.reportsservice.service;

import com.zemoso.reportsservice.dto.ReportDto;
import com.zemoso.reportsservice.entity.Report;
import com.zemoso.reportsservice.repository.ReportRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
 class ReportsServiceImplTest {
    @Autowired
    ReportService reportService;
    @MockBean
    ReportRepository reportRepository;
    @Test
    void addNewReport()
    {
        ReportDto reportDto=new ReportDto();
        reportService.addReport(reportDto);
        verify(reportRepository,times(1)).save(any());
    }
    @Test
    void getReportsByUserId()
    {
        Report report=new Report();
        when(reportRepository.findAllByUserId("temp")).thenReturn(Arrays.asList(report));
        assertEquals(1,reportService.getAllReports("temp").size());
    }
}
