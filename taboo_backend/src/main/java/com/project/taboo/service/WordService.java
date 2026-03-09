package com.project.taboo.service;

import com.project.taboo.model.Genre;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class WordService {
    private final Map<Genre, List<String>> wordPool = new HashMap<>();

    public WordService() {
        wordPool.put(Genre.MOVIES, Arrays.asList("Inception", "Titanic", "Avatar", "Gladiator", "Matrix", "Joker", "Batman", "SpiderMan", "Interstellar", "Alien"));
        wordPool.put(Genre.SPORTS, Arrays.asList("Soccer", "Basketball", "Tennis", "Cricket", "Baseball", "Hockey", "Golf", "Rugby", "Boxing", "Volleyball"));
        wordPool.put(Genre.TECHNOLOGY, Arrays.asList("Computer", "Software", "Internet", "Smartphone", "Algorithm", "Blockchain", "Robot", "Cloud", "Cyber", "Database"));
        wordPool.put(Genre.GENERAL, Arrays.asList("Apple", "Mountain", "River", "Bicycle", "Coffee", "Guitar", "Library", "Camera", "Window", "Rocket"));
    }

    public List<String> getRandomWords(Genre genre, int count) {
        List<String> pool;
        if (genre == Genre.ANY) {
            pool = new ArrayList<>();
            wordPool.values().forEach(pool::addAll);
        } else {
            pool = wordPool.getOrDefault(genre, wordPool.get(Genre.GENERAL));
        }
        Collections.shuffle(pool);
        return pool.subList(0, Math.min(count, pool.size()));
    }
}
