package com.zemoso.reportsservice.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.zemoso.reportsservice.VO.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="reports")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Report {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(name="lab_name")
    private String labName;
    @Column(name="test_name")
    private String testName;
    @ManyToOne
    @ToString.Exclude
    @JsonBackReference
    @JoinColumn(name="users_id")
    private User user;
}
