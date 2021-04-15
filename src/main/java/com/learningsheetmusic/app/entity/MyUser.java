package com.learningsheetmusic.app.entity;

import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table (name = "USER")
public class MyUser {

    public MyUser(){};

    public MyUser(String username, String password, String mail, String createdBy){
        this.username = username;
        this.password = password;
        this.mail = mail;
        this.createdBy = createdBy;
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

    @ManyToMany(cascade=CascadeType.DETACH)
    @JoinTable(
            name = "USER_ROLE",
            joinColumns = @JoinColumn(name = "USER_ID") ,
            inverseJoinColumns = @JoinColumn(name = "ROLE_ID")
    )
    private List<Role> role = new ArrayList<>();

    @Column(length=50)
    private String createdBy;


    @Column
    @OneToMany(cascade=CascadeType.ALL, mappedBy="user" )
    private List<GameScore> scores= new ArrayList<>();



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

    public List<GameScore> getScores() {
        return scores;
    }

    public void setScores(List<GameScore> scores) {
        this.scores = scores;
    }

    public void addGameScore(GameScore score){
        scores.add(score);
        score.setUser(this, createdBy);
    }

    public void addRole(Role roleToAdd) {
        this.role.add(roleToAdd);
        roleToAdd.addUser(this);
    }

    public void encodePassword(PasswordEncoder passwordEncoder) {
        this.password = passwordEncoder.encode(password);
    }
}
