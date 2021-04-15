package com.learningsheetmusic.app.unit;

import com.learningsheetmusic.app.entity.GameScore;
import com.learningsheetmusic.app.entity.MyUser;
import com.learningsheetmusic.app.service.ScoreGameService;
import com.learningsheetmusic.app.service.UserService;
import com.learningsheetmusic.app.service.UserServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@TestPropertySource(locations = "classpath:db-test.properties")
public class GameScoreServiceTest {

    @Autowired
    ScoreGameService scoreGameService;

    @Autowired
    UserService userService;

    @Test
    public void test01AUserWith3GamesFind3Scores(){
        MyUser user = new MyUser("Nacho", "pass", "nacho@nacho", "test");

        GameScore score1 = new GameScore(1200);
        GameScore score2 = new GameScore(900);
        GameScore score3 = new GameScore(1600);

        user.addGameScore(score1);
        user.addGameScore(score2);
        user.addGameScore(score3);

        List<GameScore> scores = scoreGameService.findByUser(userService.save(user).getId());

        assertEquals(3, scores.size());
    }

    @Test
    public void test02TheScoresSavedWithUserAddUp3700(){
        MyUser user = new MyUser("Nacho", "pass", "nacho@nacho", "test");

        GameScore score1 = new GameScore(1200);
        GameScore score2 = new GameScore(900);
        GameScore score3 = new GameScore(1600);

        user.addGameScore(score1);
        user.addGameScore(score2);
        user.addGameScore(score3);

        List<GameScore> scores = scoreGameService.findByUser(userService.save(user).getId());

        int addUp = 0;
        for (GameScore score : scores) {
            addUp += score.getScore();
        }

        assertEquals(3700, addUp);
    }

    @Test
    public void test03ScoresWithSameValueHaveDifferentIDs(){
        MyUser user1 = new MyUser("Nacho", "lalala", "nacho@nacho", "test");
        user1.addGameScore(new GameScore(1000));

        MyUser user2 = new MyUser("Seba", "lololo", "seba@seba", "test");
        user2.addGameScore(new GameScore(1000));

        GameScore score1 = scoreGameService.findByUser(userService.save(user1).getId()).get(0);
        GameScore score2 = scoreGameService.findByUser(userService.save(user2).getId()).get(0);

        assertNotEquals(score1.getId(), score2.getId());
    }

    @AfterEach
    public void cleanDB(){
        List<MyUser> users = userService.getAllByCreatedBy("test");
        users.forEach(user -> userService.deleteById(user.getId()));
    }
}
