package com.tipu.backend.controller;

import com.tipu.backend.dao.DepartmentRepository;
import com.tipu.backend.model.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    List<Department> getDepartmentList(@RequestParam Integer facultyId){
        List<Department>departmentList = departmentRepo.findAll();
        List<Department>newList = new ArrayList<>();
        for(Department department:departmentList){
            if(department.getFacultyId().equals(facultyId))
                newList.add(department);

        }
        return newList;
    }
}
