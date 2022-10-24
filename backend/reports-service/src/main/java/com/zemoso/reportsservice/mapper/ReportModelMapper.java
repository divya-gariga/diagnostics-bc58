package com.zemoso.reportsservice.mapper;

import com.zemoso.reportsservice.dto.ReportDto;
import com.zemoso.reportsservice.entity.Report;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class ReportModelMapper {
    private final ModelMapper mapper = new ModelMapper();
    public Report dtoToEntity(ReportDto reportDto)
    {
        return mapper.map(reportDto,Report.class);
    }
    public ReportDto entityToDto(Report report)
    {
        return mapper.map(report,ReportDto.class);
    }
}
