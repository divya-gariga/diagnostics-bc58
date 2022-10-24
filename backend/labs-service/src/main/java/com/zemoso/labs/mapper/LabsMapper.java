package com.zemoso.labs.mapper;
import com.zemoso.labs.dto.LabsDto;
import com.zemoso.labs.entity.Labs;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class LabsMapper {
    private final ModelMapper mapper = new ModelMapper();

   public   LabsDto labsToLabsDto(Labs labs){
       return mapper.map(labs,LabsDto.class);
   }
    public Labs labsDtoToLabs(LabsDto labsDto)
    {
        return mapper.map(labsDto,Labs.class);
    }
}
