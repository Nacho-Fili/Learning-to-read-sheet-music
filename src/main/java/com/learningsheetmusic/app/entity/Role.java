package com.learningsheetmusic.app.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Role {

    public Role(){};

    public Role(String name){
        this.name = name;
    };

    public Role(String name, Long id){
        this.name = name;
        this.id = id;
    };

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @ManyToMany(mappedBy = "role", fetch = FetchType.EAGER)
    private List<MyUser> users = new ArrayList<>();

    public Long getId(){
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public List<MyUser>getUsers(){ return this.users; }

    public void addUser(MyUser user) {
        users.add(user);
    }
}
