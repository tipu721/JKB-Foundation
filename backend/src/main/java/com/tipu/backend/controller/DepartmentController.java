package com.tipu.backend.controller;

import com.tipu.backend.dao.DepartmentRepository;
import com.tipu.backend.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DepartmentController {

    @Autowired
    DepartmentRepository departmentRepo;
    @PostMapping("/department")
    Department addDepartment(@RequestBody Department department){
        return departmentRepo.save(department);
    }


    @GetMapping("/departmentList")
    List<Department> getDepartmentList(@RequestParam(required = false) Integer facultyId ){
        if(facultyId == null){

            return departmentRepo.findAll();
        }
        else{

            return departmentRepo.findByFacultyId(facultyId);

        }

    }
}


