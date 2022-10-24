package com.zemoso.reportsservice.dto;

import com.zemoso.reportsservice.VO.User;
import com.zemoso.reportsservice.entity.Report;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

 class ReportDtoTest {
    @Test
    void reportDtoTest()
    {
        ReportDto report=new ReportDto();
        ReportDto report1=new ReportDto(1,"Los Altos Center Lab","Covid RtPcr Test",new User());
        report.setId(1);
        report.setLabName("Los Altos Center Lab");
        report.setTestName("Covid Rt-Pcr Test");
        report.setUser(new User());
        assertEquals(1,report.getId());
        assertEquals("Los Altos Center Lab",report.getLabName());
        assertEquals("Covid Rt-Pcr Test",report.getTestName());
        assertEquals(new User(),report.getUser());
    }
}
