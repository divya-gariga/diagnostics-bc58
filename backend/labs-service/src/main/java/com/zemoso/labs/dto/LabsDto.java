package com.zemoso.labs.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LabsDto {
    private int id;

    private String labName;

    private String labIcon;

    private String time;

    private String cost;

    private String rating;

    private int slots;


}
