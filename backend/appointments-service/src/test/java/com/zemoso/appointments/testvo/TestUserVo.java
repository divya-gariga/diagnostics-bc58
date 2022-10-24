package com.zemoso.appointments.testvo;

import com.zemoso.appointments.vo.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TestUserVo {
    @Test
    void testVoUser(){
        User user = new User();
        user.setId("1");
        user.setUserName("sohail");
        user.setEmailId("sks@gmail.com");
        assertEquals("1",user.getId());
        assertEquals("sohail",user.getUserName());
        assertEquals("sks@gmail.com",user.getEmailId());

    }
}
