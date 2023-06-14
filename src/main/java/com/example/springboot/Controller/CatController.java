package com.example.springboot.Controller;

import com.example.springboot.Repositories.CatRepository;
import com.example.springboot.Models.Cat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CatController {

    @Autowired
    private CatRepository catRepo;

    @GetMapping("/")
    public String index() {
        return "Hi!";
    }

    @GetMapping("/cats")
    @ResponseBody
    public String getCats(Model model) {
        Iterable<Cat> catList = catRepo.findAll();
        model.addAttribute("catList", catList);
        String output = "";
        for (Cat cat : catList) {
            System.out.println(cat.toString());
            output += cat.getID() + ". " + cat.toString() + "\n";
        }
        return output;
    }

    @PostMapping("/cats")
    public String createCat(@RequestBody final Cat cat) {
        Cat result = catRepo.save(cat);
        return result.getID() + ": " + result.getName();
    }

    @PutMapping("/cats/{id}")
    @ResponseBody
    public String updateCat(@PathVariable long id, @RequestBody final Cat cat) {
        Cat result = catRepo.save(cat);
        return result.getID() + ": " + result.getName();
    }

}
