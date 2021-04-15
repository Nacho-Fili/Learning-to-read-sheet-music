package com.learningsheetmusic.app.service;

import com.learningsheetmusic.app.entity.Role;

import java.util.List;
import java.util.Optional;

public interface RoleService {

    Optional<Role> findById(Long id);

    List<Role> findAllById(List<Long> ids);

    Optional<Role> findByName(String teacher);

    Role save(Role admin);

    boolean existsByName(String name);

    void deleteByName(String name);
}
