package com.zemoso.labs.controller;

import com.zemoso.labs.dto.LabsDto;
import com.zemoso.labs.service.LabsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/labs")
public class LabsController {
    LabsService labsService;

    public LabsController(LabsService labsService) {
        this.labsService = labsService;
    }

    @GetMapping("/")
    public List<LabsDto> getAllLabs()
    {
       return labsService.getAllLabs();
    }
    @GetMapping("/{id}")
    public LabsDto getLabById(@PathVariable int id)
    {
        return labsService.getLabById(id);
    }
}
