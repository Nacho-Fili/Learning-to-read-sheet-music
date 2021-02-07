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
import java.util.stream.Collector;
import java.util.stream.Collectors;

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
    public List<MyUser> saveAll(List<MyUser> users){

        users.forEach((MyUser user) -> user.build(user, roleService, passwordEncoder));

        return userRepository.saveAll(users);
    }

    @Override
    public Optional<MyUser> findById(Long id) {
        Optional<MyUser> user;
        try{
            user = userRepository.findById(id);
        }
        catch (Error e){
            user = Optional.empty();
        }

        return user;
    }

    @Override
    public Optional<MyUser> findByUsername(String username) {
        Optional<MyUser> user;
        try{
            user = userRepository.findByUsername(username);
        }
        catch (Error e){
            user = null;
        }

        return user;
    }

    @Override
    public void deleteById(Long id) {
        if(this.existsById(id))
            userRepository.deleteById(id);
    }

    @Override
    public boolean existsByUsername(String username){ return userRepository.existsByUsername(username); }

    @Override
    public boolean existsById(Long id){
        return userRepository.existsById(id);
    }

    @Override
    public List<MyUser> getAllByCreatedBy(String createdBy){
        return userRepository.getAllByCreatedBy(createdBy);
    }

    public void deleteAllById(List<Long> usersToDelete){
        usersToDelete.forEach((id) -> userRepository.deleteById(id));
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

