package com.zemoso.reportsservice.mapper;

import com.zemoso.reportsservice.VO.User;
import com.zemoso.reportsservice.dto.ReportDto;
import com.zemoso.reportsservice.entity.Report;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

 class ReportsModelMapperTest {
    @Test
    void dtoToEntity()
    {
        ReportDto reportDto=new ReportDto(1,"Los Altos Center Lab","Covid RtPcr Test",new User());
        Report report=new ReportModelMapper().dtoToEntity(reportDto);
        assertEquals("Los Altos Center Lab",report.getLabName());

    }
    @Test
    void entityToDto()
    {
        Report report=new Report(1,"Los Altos Center Lab","Covid RtPcr Test",new User());
        ReportDto reportDto=new ReportModelMapper().entityToDto(report);
        assertEquals("Los Altos Center Lab",reportDto.getLabName());

    }
}
