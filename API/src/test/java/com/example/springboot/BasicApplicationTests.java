package com.example.springboot;

import com.example.springboot.Models.Cat;
import com.example.springboot.Repositories.CatRepository;
import java.util.ArrayList;
import java.util.Optional;
import static junit.framework.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BasicApplicationTests {

    @Autowired
    private CatRepository catRepo;

    @Test
    public void givenCatsinDB_whenFetchById_thenCorrect() {
        long id = 1;
        Cat cat = catRepo.findById(id).get();

        assertNotNull(cat);
        assertEquals("Roberta", cat.getName());
    }

    @Test
    public void givenInsertCat_whenFetchById_thenCorrect() {
        Cat cat = catRepo.save(
                new Cat("Babadook", 12, "Calico",
                        100, 100));

        assertNotNull(cat);
        assertEquals("Babadook", cat.getName());
    }

    @Test
    public void givenUpdateCat_whenCatSpecified_thenCorrect() {
        long id = 18;
        Cat originalObject = catRepo.findById(id).get();
        String name = originalObject.getName();
        String colour = originalObject.getColour().equals("Black") ? "Calico"
                : "Black";
        originalObject.setValues(new Cat(name + "+", 12,
                colour, 100, 100));
        Cat newObject = catRepo.save(originalObject);
        assertNotSame(originalObject, newObject);
    }
    
    @Test
    public void givenDeleteByID_whenCatExists_thenCorrect() {
        Iterable<Cat> catList = catRepo.findAll();
        ArrayList<Cat> cats = new ArrayList<>();
        for (Cat cat : catList) {
            cats.add(cat);
        }
        
        Cat item = cats.get(cats.size() - 1);
        catRepo.delete(item);
        Optional<Cat> check = catRepo.findById(item.getID());
        
        assertTrue(check.isEmpty());
    }

}
