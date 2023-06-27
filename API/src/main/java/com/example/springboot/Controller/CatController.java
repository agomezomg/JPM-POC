package com.example.springboot.Controller;

import com.example.springboot.Repositories.CatRepository;
import com.example.springboot.Models.Cat;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class CatController {

    @Autowired
    private CatRepository catRepo;

    @GetMapping("/")
    public String index() {
        return "Hi!";
    }

    @GetMapping("/cats")
    @ResponseBody
    public Object[] getCats(Model model) {
        Iterable<Cat> catList = catRepo.findAll();
        model.addAttribute("catList", catList);
        ArrayList<Cat> cats = new ArrayList<>();
        for (Cat cat : catList) {
            cats.add(cat);
        }
        return cats.toArray();
    }

    @GetMapping("/cats/{id}")
    @ResponseBody
    public Cat getCatById(@PathVariable long id) {
        Cat inDB = catRepo.findById(id).get();
        return inDB;
    }

    @PostMapping("/cats")
    public String createCat(@RequestBody final Cat cat) {
        Cat result = catRepo.save(cat);
        return result.getID() + ": " + result.getName();
    }

    @PutMapping("/cats/{id}")
    @ResponseBody
    public String updateCat(@PathVariable long id, @RequestBody final Cat cat) {
        Cat inDB = catRepo.findById(id).get();
        inDB.setValues(cat);

        Cat result = catRepo.save(inDB);
        return result.getID() + ": " + result.getName();
    }

    @DeleteMapping("/cats/{id}")
    @ResponseBody
    public Cat deleteCat(@PathVariable long id) {
        Cat inDB = catRepo.findById(id).get();
        catRepo.delete(inDB);
        return inDB;
    }

}
