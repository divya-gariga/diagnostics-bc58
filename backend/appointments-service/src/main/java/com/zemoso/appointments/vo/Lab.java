package com.zemoso.appointments.vo;

import lombok.*;
import javax.persistence.*;

    @Entity
    @Getter
    @Setter
    @ToString
    @NoArgsConstructor
    @AllArgsConstructor
    @Table(name = "labs",schema = "public")
    public class Lab {

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
