package com.learningsheetmusic.app.service;

import com.learningsheetmusic.app.entity.GameScore;

import java.util.List;

public interface ScoreGameService {
    List<GameScore> findByUser(Long id);
    List<GameScore> findByCreatedBy(String createdBy);
}
