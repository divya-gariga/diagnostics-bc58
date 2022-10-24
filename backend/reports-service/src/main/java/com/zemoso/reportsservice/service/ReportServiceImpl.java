package com.zemoso.reportsservice.service;

import com.zemoso.reportsservice.dto.ReportDto;
import com.zemoso.reportsservice.entity.Report;

import com.zemoso.reportsservice.mapper.ReportModelMapper;
import com.zemoso.reportsservice.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ReportServiceImpl implements ReportService{
    @Autowired
    ReportRepository reportRepository;
    @Autowired
    ReportModelMapper reportMapper;
    @Override
    public List<ReportDto> getAllReports(String userId) {
        return getReportsDtoList(reportRepository.findAllByUserId(userId));
    }

    @Override
    public void addReport(ReportDto reportDto) {
          reportRepository.save(reportMapper.dtoToEntity(reportDto));
    }

    private List<ReportDto> getReportsDtoList(List<Report> reportList) {
        List<ReportDto> reportDtoList = new ArrayList<>();
        for (Report report : reportList) {
            reportDtoList.add(reportMapper.entityToDto(report));
        }
        return reportDtoList;
    }
}
