package com.zemoso.reportsservice.controller;

import com.zemoso.reportsservice.dto.ReportDto;
import com.zemoso.reportsservice.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reports")
public class ReportController {
    @Autowired
    ReportService reportService;
    @GetMapping("/{userId}")
    public List<ReportDto> getAllReports(@PathVariable String userId)
    {
      return  reportService.getAllReports(userId);
    }
    @PostMapping("/")
    public ResponseEntity<String> addNewReport(@RequestBody ReportDto reportDto)
    {
        reportService.addReport(reportDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Report Created Successfully successfully");
    }
}
