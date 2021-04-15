package com.learningsheetmusic.app.repository;

import com.learningsheetmusic.app.entity.GameScore;
import com.learningsheetmusic.app.entity.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ScoreGameRepository extends JpaRepository<GameScore, Long> {
    Optional<GameScore> findById(Long id);
    List<GameScore> findByCreatedBy(String createdBy);
    List<GameScore> findAllById(Iterable<Long>id);
    List<GameScore> findByUser(MyUser user);
}
