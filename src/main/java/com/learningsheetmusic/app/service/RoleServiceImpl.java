package com.learningsheetmusic.app.service;

import com.learningsheetmusic.app.entity.Role;
import com.learningsheetmusic.app.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("myRolService")
public class RoleServiceImpl implements RoleService{

    @Autowired
    private RoleRepository roleRepository;

    public RoleServiceImpl(){}

    public RoleServiceImpl(RoleRepository roleRepository){
        this.roleRepository = roleRepository;
    }

    @Override
    public Optional<Role> findById(Long id) {
        return roleRepository.findById(id);
    }
}