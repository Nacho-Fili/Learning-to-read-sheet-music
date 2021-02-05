package com.learningsheetmusic.app.service;

import com.learningsheetmusic.app.entity.MyUser;
import com.learningsheetmusic.app.entity.Role;
import com.learningsheetmusic.app.repository.RoleRepository;
import com.learningsheetmusic.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service("myUserService")
public class UserServiceImpl implements UserDetailsService, UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleService roleService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    public UserServiceImpl(){}

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }


    @Override
    public MyUser save(MyUser user) {
        MyUser newUser = new MyUser();
        newUser.build(user, roleService, passwordEncoder);

        return userRepository.save(newUser);
    }

    @Override
    public Optional<MyUser> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public Optional<MyUser> findByUsername(String username) { return userRepository.findByUsername(username); }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<MyUser> oMyUser = userRepository.findByUsername(username);
        MyUser myUser = oMyUser.get();
        Optional<Role> role = roleRepository.findById(myUser.roleId());

        if (role.isEmpty())
            throw new RuntimeException("No está identificado con ningún rol");

        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(("ROLE_" + role.get().getName()).toUpperCase());
        return new User(myUser.getMail(), myUser.getPassword(), Arrays.asList(grantedAuthority));
    }

}

