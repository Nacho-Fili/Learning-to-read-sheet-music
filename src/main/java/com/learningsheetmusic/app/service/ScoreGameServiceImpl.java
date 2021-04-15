package com.learningsheetmusic.app.service;

import com.learningsheetmusic.app.entity.GameScore;
import com.learningsheetmusic.app.entity.MyUser;
import com.learningsheetmusic.app.repository.ScoreGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScoreGameServiceImpl implements ScoreGameService{
    public ScoreGameServiceImpl(){};
    @Autowired
    ScoreGameRepository repository;

    @Autowired
    UserService userService;

    @Override
    public List<GameScore> findByUser(Long id) {
        Optional <MyUser> oUser = userService.findById(id);
        if(oUser.isEmpty())
            throw new RuntimeException("User not found");

        return repository.findByUser(oUser.get());
    }

    @Override
    public List<GameScore> findByCreatedBy(String createdBy) {
        return repository.findByCreatedBy(createdBy);
    }

}
