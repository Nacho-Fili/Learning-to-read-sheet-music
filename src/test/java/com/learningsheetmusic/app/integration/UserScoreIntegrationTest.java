package com.learningsheetmusic.app.integration;

import com.learningsheetmusic.app.entity.GameScore;
import com.learningsheetmusic.app.entity.MyUser;
import com.learningsheetmusic.app.service.ScoreGameService;
import com.learningsheetmusic.app.service.UserService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;
import java.util.List;

@SpringBootTest
public class UserScoreIntegrationTest {

    @Autowired
    private UserService userService;

    @Autowired
    private ScoreGameService scoreGameService;

    @Test
    public void test01UpdateUsersAfterSaveAlsoUpdateTheDB(){
        MyUser userToSave = new MyUser("Nacho", "password", "nacho@nacho", "test");
        MyUser user = userService.save(userToSave);

        user.addGameScore(new GameScore(1400));
        user.addGameScore(new GameScore(1000));

        Long id = user.getId();

        userService.save(user);

        List<GameScore> scores = scoreGameService.findByUser(id);

        assertEquals(2, scores.size());
    }

    @AfterEach
    public void cleanDB(){
        List<MyUser> users = userService.getAllByCreatedBy("test");
        users.forEach(user -> userService.deleteById(user.getId()));
    }
}
