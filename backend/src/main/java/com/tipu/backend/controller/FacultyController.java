package com.tipu.backend.controller;

import com.tipu.backend.dao.FacultyRepository;
import com.tipu.backend.model.Faculty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FacultyController {

    @Autowired
    FacultyRepository facultyRepo;
    @PostMapping("/faculty")
    String addFaculty(@RequestBody Faculty faculty){
        facultyRepo.save(faculty);
        return  "Faculty Added Successfully";
    }

    @GetMapping("/faculties")
    List<Faculty> getFacultiList(){
        return facultyRepo.findAll();
    }

}
