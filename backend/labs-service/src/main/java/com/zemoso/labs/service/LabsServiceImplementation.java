package com.zemoso.labs.service;

import com.zemoso.labs.dto.LabsDto;
import com.zemoso.labs.entity.Labs;
import com.zemoso.labs.exception.LabNotFoundException;
import com.zemoso.labs.mapper.LabsMapper;
import com.zemoso.labs.repository.LabsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LabsServiceImplementation implements LabsService{
    @Autowired
    LabsRepository labsRepository;
    @Autowired
    LabsMapper labsMapper;



    @Override
    public List<LabsDto> getAllLabs() {

        return getLabsDtoList(labsRepository.findAll());
    }

    @Override
    public LabsDto getLabById(int id) {
        Optional<Labs> result=labsRepository.findById(id);
        Labs labs=result.orElseThrow(()->new LabNotFoundException("Lab Not Found with Id-" + id));
        return labsMapper.labsToLabsDto(labs);
    }



    private List<LabsDto> getLabsDtoList(List<Labs> labsList) {
        List<LabsDto> labsDtos = new ArrayList<>();
        for (Labs lab : labsList) {
            labsDtos.add(labsMapper.labsToLabsDto(lab));
        }
        return labsDtos;
    }
}
