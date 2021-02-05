package com.learningsheetmusic.app.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Role {

    public Role(){};

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @ManyToMany(mappedBy = "role")
    @JsonIgnore
    private List<MyUser> users = new ArrayList<>();

    public Long getId(){
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public List<MyUser>getUsers(){ return this.users; }
}
