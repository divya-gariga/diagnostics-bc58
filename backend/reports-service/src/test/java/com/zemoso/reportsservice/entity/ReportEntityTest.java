package com.zemoso.reportsservice.entity;

import com.zemoso.reportsservice.VO.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

 class ReportEntityTest {
    @Test
    void testReportEntity()
    {
        Report report=new Report();
        Report report1=new Report(1,"Los Altos Center Lab","Covid RtPcr Test",new User());
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
