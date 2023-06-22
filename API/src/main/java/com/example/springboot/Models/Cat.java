package com.example.springboot.Models;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author lana
 */
@Entity
public class Cat implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private int age;
    private String colour;
    private int hygiene_score;
    private int happiness;

    public Cat() {

    }

    public Cat(String name, int age, String colour, int hygiene_score, int happiness) {
        this.name = name;
        this.age = age;
        this.colour = colour;
        this.hygiene_score = hygiene_score;
        this.happiness = happiness;
    }

    public int getHappiness() {
        return happiness;
    }

    public void setHappiness(int happiness) {
        this.happiness = happiness;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return this.name;
    }

    public int getAge() {
        return this.age;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public int getHygiene_score() {
        return hygiene_score;
    }

    public void setHygiene_score(int hygiene_score) {
        this.hygiene_score = hygiene_score;
    }

    public boolean setValues(Cat cat) {
        boolean changed = false;
        if (cat.name != null && !cat.name.isEmpty()) {
            this.name = cat.name;
            changed = true;
        }
        if (cat.age > 0 && cat.age <= 40 && cat.age > this.age) {
            this.age = cat.age; // can only age up, I guess sadfasdf
            changed = true;
        }
        if (cat.colour != null && !cat.colour.equals(this.colour)) {
            this.colour = cat.colour;
            changed = true;
        }
        if (cat.hygiene_score >= 0 && cat.hygiene_score <= 100) {
            this.hygiene_score = cat.hygiene_score;
            changed = true;
        }
        if (cat.happiness >= 0 && cat.happiness <= 100) {
            this.happiness = cat.happiness;
            changed = true;
        }
        return changed;
    }

    @Override
    public String toString() {
        String obj = "Name: " + this.name + ", Age: " + this.age + ", colour: "
                + this.colour + ", hygiene score: " + this.hygiene_score;
        return obj;
    }

    public String getID() {
        return this.id + "";
    }
}
