package com.learningsheetmusic.app.entity;

import com.learningsheetmusic.app.service.RoleService;
import com.learningsheetmusic.app.service.RoleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Entity
@Table (name = "user")
public class MyUser {

    public MyUser(){};

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (length = 50)
    private String username;

    @Column(length = 50)
    private String mail;

    @Column(length = 90)
    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_role",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id")}
    )
    private List<Role> role = new ArrayList<>();

    public String getUsername() { return this.username; }

    public String getMail() {
        return this.mail;
    }

    public String getPassword(){
        return this.password;
    }

    public Long roleId() {
        return this.id;
    }

    public List<Role> getRole(){ return this.role; }

    public void encodePassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(this.password);
    }

    public void build(MyUser user, RoleService roleService, PasswordEncoder passwordEncoder) {
        this.id = user.id;
        this.username = user.username;
        this.password = passwordEncoder.encode(user.password);
        this.mail = user.mail;
        this.role.addAll(user
                .getRole()
                .stream()
                .map((Role role) -> {
                        System.out.println(roleService);
                        Optional <Role> oRoleToAdd = roleService.findById(role.getId());
                        if(oRoleToAdd.isEmpty())
                            throw new RuntimeException("No existe un role con id " + role.getId());
                        Role roleToAdd = oRoleToAdd.get();
                        roleToAdd.getUsers().add(this);
                        return roleToAdd;
                }).collect(Collectors.toList())
        );
    }
}
