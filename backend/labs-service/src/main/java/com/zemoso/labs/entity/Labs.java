package com.zemoso.labs.entity;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "labs")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Labs {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "lab_name")
    private String labName;

    @Column(name = "lab_icon")
    private String labIcon;

    @Column(name = "time")
    private String time;

    @Column(name = "cost")
    private String cost;

    @Column(name = "rating")
    private String rating;

    @Column(name = "slots")
    private int slots;


}
