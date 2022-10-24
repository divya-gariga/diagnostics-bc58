package com.zemoso.labs.mapper;

import com.zemoso.labs.dto.LabsDto;
import com.zemoso.labs.entity.Labs;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

 class LabMapperTest {
    @Test
    void dtoToEntity()
    {
        LabsDto labsDto=new LabsDto(1,"Los Altos Center Lab","LabIcon","24 hrs","$1200","4.3",5);
        Labs labs=new LabsMapper().labsDtoToLabs(labsDto);
        assertEquals(1,labs.getId());

    }
    @Test
    void EntityToDto()
    {
        Labs labs=new Labs(1,"Los Altos Center Lab","LabIcon","24 hrs","$1200","4.3",5);
        LabsDto labsDto=new LabsMapper().labsToLabsDto(labs);
        assertEquals(1,labsDto.getId());

    }
}
