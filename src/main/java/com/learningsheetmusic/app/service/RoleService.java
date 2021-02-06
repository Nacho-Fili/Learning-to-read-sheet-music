package com.learningsheetmusic.app.service;

import com.learningsheetmusic.app.entity.Role;

import java.util.Optional;

public interface RoleService {

    Optional<Role> findById(Long id);

    Optional<Role> findByName(String teacher);

    Role save(Role admin);

    boolean existsByName(String name);
}
