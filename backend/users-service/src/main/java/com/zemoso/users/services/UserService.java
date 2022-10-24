package com.zemoso.users.services;
import com.zemoso.users.dto.UserDto;
import com.zemoso.users.entity.User;
import com.zemoso.users.exception.DuplicateKey;
import com.zemoso.users.exception.ResourceNotFound;
import com.zemoso.users.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;
    private ModelMapper modelMapper;
    public UserService(UserRepository userRepository,ModelMapper modelMapper){
        super();
        this.userRepository=userRepository;
        this.modelMapper=modelMapper;
    }
    public UserDto saveUser(UserDto user) throws DuplicateKey {
        try{
            UserDto result=this.getUser(user.getId());
            if(result.getId()==user.getId()){
                throw new DuplicateKey("Key with "+user.getId()+" found.");
            }
            User store=modelMapper.map(result,User.class);
            userRepository.save(store);
            return modelMapper.map(store,UserDto.class);
        }catch (ResourceNotFound e){
            return modelMapper.map(userRepository.save(modelMapper.map(user,User.class)),UserDto.class);
        }
    }
    public UserDto getUser(String id){
        Optional<User> result=userRepository.findById(id);
        User user= result.orElseThrow(()->
            new ResourceNotFound("Not Found by ID "+id));
        return modelMapper.map(user,UserDto.class);
    }
}
