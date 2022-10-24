package com.zemoso.labs.service;

import com.zemoso.labs.dto.LabsDto;

import java.util.List;

public interface LabsService {
    List<LabsDto> getAllLabs();
    LabsDto getLabById(int id);
}
