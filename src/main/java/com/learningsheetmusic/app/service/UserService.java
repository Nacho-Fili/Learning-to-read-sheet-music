package com.learningsheetmusic.app.service;


import com.learningsheetmusic.app.entity.MyUser;

import java.util.List;
import java.util.Optional;

public interface UserService {
    MyUser save(MyUser user);
    Optional<MyUser> findById(Long id);
    Optional<MyUser> findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsById(Long id);
    void deleteById(Long id);
    void deleteAllById(List<Long> usersToDelete);

    List<MyUser> saveAll(List<MyUser> users);

    List<MyUser> getAllByCreatedBy(String createdBy);
}
