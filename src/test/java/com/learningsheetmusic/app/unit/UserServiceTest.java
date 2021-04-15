package com.learningsheetmusic.app.unit;

import com.learningsheetmusic.app.entity.MyUser;
import com.learningsheetmusic.app.service.RoleService;
import com.learningsheetmusic.app.service.UserService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import java.util.List;
import java.util.Optional;

@SpringBootTest
@TestPropertySource(locations = "classpath:db-test.properties")
public class UserServiceTest {


    @Autowired
    UserService userService;

    @Autowired
    RoleService roleService;

    @BeforeEach
    public void setup(){
        MyUser userAdmin = new MyUser("admin", "XDLOL", "admin@admin.com", "test");
        roleService.findById(1L).ifPresent(userAdmin::addRole);
        userService.save(userAdmin);

        MyUser userCande = new MyUser("cande_09", "passcan", "can@can.com", "test");
        roleService.findById(3L).ifPresent(userCande::addRole);
        userService.save(userCande);

        MyUser userElon = new MyUser("ElonMusk", "MARS", "gointo@mars24.com", "test");
        roleService.findById(1L).ifPresent(userElon::addRole);
        userService.save(userElon);

        MyUser userAlb = new MyUser("AumentoFernandez", "Marx", "mueransede@hambretodos.com", "test");
        roleService.findById(2L).ifPresent(userAlb::addRole);
        userService.save(userAlb);

    }

    @Test
    public void test01UserAdminCanBeFindByUsername(){

        Optional<MyUser> user = userService.findByUsername("admin");
        if(user.isEmpty())
            assert(false);

        assertEquals("admin", user.get().getUsername());
    }

    @Test
    public void test02UserSimpleUserCanBeFindByUsername(){

        Optional<MyUser> user = userService.findByUsername("simpleUser");

        assertTrue(user.isEmpty());
    }

    @Test
    public void test03UserAdminExists(){

        assertTrue(userService.existsByUsername("admin"));
    }

    @Test
    public void test04UserElonMuskCanBeFindById(){
        Optional<MyUser> oUserElon = userService.findByUsername("ElonMusk");
        if(oUserElon.isEmpty())
            assertTrue(false);

        Long elonId = oUserElon.get().getId();

        Optional<MyUser> oUserElonById = userService.findById(elonId);

        assertEquals("ElonMusk", oUserElonById.get().getUsername());
    }

    @Test
    public void test05UserAdminCantBeFindAfterDeletingIt(){
        Optional <MyUser> oUserCande = userService.findByUsername("cande_09");
        oUserCande.ifPresent((user) -> userService.deleteById(user.getId()));

        assertFalse(userService.existsByUsername("cande_09"));
    }

    @Test
    public void test06UserMacriGatoCanBeFindAfterSavingIt(){
        MyUser user = new MyUser("MacriGato", "NoSeInundaMas", "miau@miau", "test");
        roleService.findById(1L).ifPresent(user::addRole);

        userService.save(user);
        assertTrue(userService.existsByUsername("MacriGato"));
    }

    @AfterEach
    public void cleanDB(){

        List<MyUser> testUsers = userService.getAllByCreatedBy("test");
        testUsers.forEach(user -> userService.deleteById(user.getId()));
    }
}
