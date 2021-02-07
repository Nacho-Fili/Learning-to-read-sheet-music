package com.learningsheetmusic.app.entity;

import com.learningsheetmusic.app.service.RoleService;
import com.learningsheetmusic.app.service.RoleServiceImpl;
import org.hibernate.annotations.Cascade;
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

    public MyUser(String username, String password, String mail, List<Role> roles){
        this.username = username;
        this.password = password;
        this.mail = mail;
        this.role = roles;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (length = 50)
    private String username;

    @Column(length = 50)
    private String mail;

    @Column(length = 90)
    private String password;

    @ManyToMany(cascade=CascadeType.PERSIST)
    @JoinTable(
            name = "user_role",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id")}
    )
    private List<Role> role = new ArrayList<>();

    @Column(length=50)
    private String createdBy;

    //-------------------------------------------------------------//

    public Long getId(){ return this.id; }

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

    public String getCreatedBy(){return this.createdBy;}

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public void build(MyUser user, RoleService roleService, PasswordEncoder passwordEncoder) {
        this.id = user.id;
        this.username = user.username;
        this.password = passwordEncoder.encode(user.password);
        this.mail = user.mail;
        this.createdBy = user.createdBy;

        List<Role> rolesToAdd = new ArrayList<>();

        user.getRole().forEach(role -> {
            Optional<Role> oRole = roleService.findById(role.getId());
            if(oRole.isEmpty())
                return;

            rolesToAdd.add(oRole.get());
        });

        this.role = rolesToAdd;

    }
}
