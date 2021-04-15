package com.learningsheetmusic.app.unit;


import com.learningsheetmusic.app.entity.Role;
import com.learningsheetmusic.app.service.RoleService;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@TestPropertySource(locations = "classpath:db-test.properties")
@Transactional
public class RolServiceTest {

    @Autowired
    RoleService roleService;

    @Test
    public void test01RoleAdminCanBeFindById(){

        Optional<Role> oRole = roleService.findById(1L);

        assert(oRole.get().getName().equals("admin"));
    }

    @Test
    public void test02RoleTeacherCanBeFindByName(){
        Optional<Role> oRole = roleService.findByName("teacher");

        assert(oRole.get().getName().equals("teacher"));
    }

    @Test
    public void test03CantAddRoleWhichAlreadyExists(){
        assertThrows(RuntimeException.class, () -> roleService.save(new Role("admin")));
    }

    @Test
    public void test04CanAddNewRole(){
        assert(roleService.save(new Role("writer")).getName().equals("writer"));
    }

    @AfterEach
    void cleanDB(){
        roleService.deleteByName("writer");
    }
}
