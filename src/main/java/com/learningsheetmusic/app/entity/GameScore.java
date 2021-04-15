package com.learningsheetmusic.app.entity;

import javax.persistence.*;


@Entity
@Table(name="SCORE")

public class GameScore {

    public GameScore() {}

    public GameScore(int score){
        this.score = score;
    }

    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="SCORE")
    private int score;

    @Column(name="CREATED_BY")
    private String createdBy;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="FK_USER", nullable = false, updatable = false)
    private MyUser user;


    //----------------------------------------------------------------------//

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId(){
        return this.id;
    }

    public int getScore(){
        return this.score;
    }

    public void setScore(int score){
        this.score = score;
    }

    public String getCreatedBy(){
        return createdBy;
    }

    public void setCreatedBy(String createdBy){
        this.createdBy = createdBy;
    }

    public MyUser getUser() {
        return user;
    }

    public void setUser(MyUser user) {
        this.user = user;
    }

    public void setUser(MyUser user, String createdBy) {
        setUser(user);
        this.createdBy = createdBy;
    }
}
