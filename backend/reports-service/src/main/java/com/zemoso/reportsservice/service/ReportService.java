package com.zemoso.reportsservice.service;

import com.zemoso.reportsservice.dto.ReportDto;

import java.util.List;

public interface ReportService {
     List<ReportDto> getAllReports(String userId);
     void addReport(ReportDto reportDto);
}
