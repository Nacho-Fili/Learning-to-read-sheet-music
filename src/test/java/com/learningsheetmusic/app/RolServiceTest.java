package com.learningsheetmusic.app;


import com.learningsheetmusic.app.entity.Role;
import com.learningsheetmusic.app.service.RoleService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource(locations = "classpath:db-test.properties")
@Sql("classpath:test-mysql.sql")
@Transactional
public class RolServiceTest {

    @Autowired
    RoleService roleService;

    @Test
    public void test01RoleAdminCanBeFindById(){

        Optional<Role> oRole = roleService.findById(1L);

        assertEquals(oRole.get().getName(), "admin");
    }

    @Test
    public void test02RoleTeacherCanBeFindByName(){
        Optional<Role> oRole = roleService.findByName("teacher");

        assertEquals(oRole.get().getName(), "teacher");
    }

    @Test
    public void test03CantAddRoleWhichAlreadyExists(){
        assertThrows(RuntimeException.class, () -> roleService.save(new Role("admin")));
    }

    @Test
    public void test04CanAddNewRole(){
        assertEquals("writer", roleService.save(new Role("writer")).getName());
    }
}
