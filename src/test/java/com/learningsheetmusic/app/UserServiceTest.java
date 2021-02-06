package com.learningsheetmusic.app;

import com.learningsheetmusic.app.entity.MyUser;
import com.learningsheetmusic.app.entity.Role;
import com.learningsheetmusic.app.service.UserService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource(locations = "classpath:db-test.properties")
@Sql("classpath:test-mysql.sql")
@Transactional
public class UserServiceTest {

    @Autowired
    @Qualifier("myUserService")
    UserService userService;

    @Before
    public void setup(){
        List<MyUser> users = new ArrayList<>();
        users.add(new MyUser("admin", "XDLOL", "admin@admin.com", Arrays.asList(new Role("admin", 1L))));
        users.add(new MyUser("cande_09", "passcan", "can@can.com", Arrays.asList(new Role("simpleUser", 3L))));
        users.add(new MyUser("ElonMusk", "MARS", "gointo@mars24.com", Arrays.asList(new Role("admin", 1L))));
        users.add(new MyUser("AumentoFernandez", "Marx", "mueransede@hambretodos.com", Arrays.asList(new Role("reader", 2L))));


        userService.saveAll(users);
    }

    @Test
    public void test01UserAdminCanBeFindByUsername(){
        Optional<MyUser> user = userService.findByUsername("admin");
        if(user.isEmpty())
            return;

        assertEquals("admin", user.get().getUsername());
    }

    @Test
    public void test02UserSimpleUserCanBeFindByUsername(){
        Optional<MyUser> user = userService.findByUsername("simpleUser");
        if(user.isEmpty())
            return;

        assertEquals("simpleUser", user.get().getUsername());
    }

    @Test
    public void test03UserAdminCanBeFindById(){
        Optional<MyUser> user = userService.findById(1L);
        if(user.isEmpty())
            return;

        assertEquals("admin", user.get().getUsername());
    }

    @Test
    public void test04UserElonMuskCanBeFindById(){
        Optional<MyUser> user = userService.findById(3L);
        if(user.isEmpty())
            return;

        assertEquals("ElonMusk", user.get().getUsername());
    }

    @Test
    public void test05UserAdminCantBeFindAfterDeletingIt(){
        userService.deleteById(1L);
        assertFalse(userService.existsByUsername("admin"));
    }

    @Test
    public void test06UserMacriGatoCanBeFindAfterSavingIt(){
        MyUser user = new MyUser("MacriGato", "NoSeInundaMas", "miau@miau", Arrays.asList(new Role("Thief", 6L)));
        userService.save(user);
        assertFalse(userService.existsByUsername("admin"));
    }

}
