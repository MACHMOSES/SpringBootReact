package com.youtubeprectice.fullstack.application;

import com.youtubeprectice.fullstack.application.models.User;
import com.youtubeprectice.fullstack.application.repositories.UserRepository;
import org.junit.Test;
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserTests {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void test_save_user(){
        User user = new User();
        user.setName("John");
        user.setSurname("Wangui");
        user.setEmail("john@gmail.com");
        user.setUsername("john123");
        user.setPassword("Jobber2009!");
        entityManager.persist(user);

        assertThat(user).hasFieldOrPropertyWithValue("name", "John");
        assertThat(user).hasFieldOrPropertyWithValue("email", "john@gmail.com");
        assertThat(user).hasFieldOrPropertyWithValue("username", "john123");
    }

    @Test
    public void test_get_users(){
        User user = new User();
        user.setName("john");
        user.setSurname("wangui");
        user.setEmail("john@gmail.com");
        user.setUsername("john123");
        user.setPassword("Jobber2009!");
        entityManager.persist(user);

        User user2 = new User();
        user2.setName("James");
        user2.setSurname("jamoo");
        user2.setEmail("james@gmail.com");
        user2.setUsername("james123");
        user2.setPassword("Jobber2009!");
        entityManager.persist(user2);

        List<User> users = new ArrayList<>(userRepository.findAll());
        assertThat(users).hasSize(2).contains(user, user2);
    }

    @Test
    public void test_get_user(){
        User user = new User();
        user.setName("john");
        user.setSurname("wangui");
        user.setEmail("john@gmail.com");
        user.setUsername("john123");
        user.setPassword("Jobber2009!");
        entityManager.persist(user);

        User user2 = new User();
        user2.setName("james");
        user2.setSurname("jamoo");
        user2.setEmail("james@gmail.com");
        user2.setUsername("jamoo");
        user2.setPassword("Jobber2009!");
        entityManager.persist(user2);

        User user3 = new User();
        user3.setName("mike");
        user3.setSurname("mike");
        user3.setEmail("mike@gmail.com");
        user3.setUsername("mike123");
        user3.setPassword("Jobber2009!");
        entityManager.persist(user3);

        User person = userRepository.findById(user3.getId()).get();

        assertThat(person.getName()).isEqualTo(user3.getName());
        assertThat(person.getSurname()).isEqualTo("mike");
    }

    @Test
    public void test_update_user(){
        User user = new User();
        user.setName("john");
        user.setSurname("john");
        user.setEmail("john@gmail.com");
        user.setUsername("john123");
        user.setPassword("Jobber2009!");
        entityManager.persist(user);

        User newUser = new User();
        newUser.setName("james");
        newUser.setSurname("james");
        newUser.setEmail("james@gmail.com");
        newUser.setUsername("james123");
        newUser.setPassword("Jobber2009!");
    

        User oldUser = userRepository.findById(user.getId()).get();
        oldUser.setName(newUser.getName());
        oldUser.setSurname(newUser.getSurname());
        oldUser.setEmail(newUser.getEmail());
        oldUser.setUsername(newUser.getUsername());
        oldUser.setPassword(newUser.getPassword());
        entityManager.persist(oldUser);

        User updatedUser = userRepository.findById(user.getId()).get();
        assertThat(updatedUser.getName()).isEqualTo(newUser.getName());
        assertThat(updatedUser.getSurname()).isEqualTo("james");
    }
    
    @Test
    public void test_delete_user(){
        User user = new User();
        user.setName("john");
        user.setSurname("john");
        user.setEmail("john@gmail.com");
        user.setUsername("john123");
        user.setPassword("Jobber2009!");
        entityManager.persist(user);

        User newUser = new User();
        newUser.setName("james");
        newUser.setSurname("james");
        newUser.setEmail("james@gmail.com");
        newUser.setUsername("james123");
        newUser.setPassword("Jobber2009!");
        entityManager.persist(newUser);

        List<User> users = userRepository.findAll();

        assertThat(users).hasSize(2).contains(user, newUser);

        userRepository.deleteAll();


        assertThat(userRepository.findAll().isEmpty());

    }
    

}
