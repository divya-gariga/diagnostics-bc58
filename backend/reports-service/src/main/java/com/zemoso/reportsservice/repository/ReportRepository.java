package com.zemoso.reportsservice.repository;

import com.zemoso.reportsservice.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report,Integer> {
    List<Report> findAllByUserId(String userId);
}
