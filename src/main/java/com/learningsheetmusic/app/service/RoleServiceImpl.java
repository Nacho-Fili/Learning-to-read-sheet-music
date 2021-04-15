package com.learningsheetmusic.app.service;

import com.learningsheetmusic.app.entity.Role;
import com.learningsheetmusic.app.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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

    @Override
    public List<Role> findAllById(List<Long> ids) {
        List<Role> roles = new ArrayList<>();
        ids.forEach((id) -> {
          Optional <Role> oRole = this.findById(id);
            oRole.ifPresent(roles::add);
        });

        return roles;
    }

    @Override
    public Optional<Role> findByName(String name) { return roleRepository.findByName(name); }

    @Override
    public Role save(Role role){
        if(this.existsByName(role.getName()))
            throw new RuntimeException("That role already exists");

        return roleRepository.save(role);
    }

    @Override
    public boolean existsByName(String name) {
        return roleRepository.existsByName(name);
    }

    @Override
    public void deleteByName(String name) {
        roleRepository.deleteByName(name);
    }
}
