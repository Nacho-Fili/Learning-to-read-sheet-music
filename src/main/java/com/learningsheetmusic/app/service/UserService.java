package com.learningsheetmusic.app.service;


import com.learningsheetmusic.app.entity.MyUser;

import java.util.Optional;

public interface UserService {
    MyUser save(MyUser user);
    Optional<MyUser> findById(Long id);
    Optional<MyUser> findByUsername(String username);
    void deleteById(Long id);
}
