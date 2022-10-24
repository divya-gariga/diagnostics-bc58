package com.zemoso.reportsservice.dto;


import com.zemoso.reportsservice.VO.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReportDto {
    private int Id;
    private String labName;
    private String testName;
    private User user;
}
