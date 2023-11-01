package com.tipu.backend.controller;

import com.tipu.backend.dao.CourseRepository;
import com.tipu.backend.dao.EmployeeRepository;
import com.tipu.backend.model.Course;
import com.tipu.backend.model.Employee;
import com.tipu.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {


    @Autowired
    EmployeeRepository employeeRepository;
    
    @Autowired
    CourseRepository courseRepository;

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/employee")
    Employee addEmployee(@RequestBody Employee reqemp) {
        
        Employee employee = employeeRepository.save(reqemp);
        employee.setCourseList(employeeService.saveCourseList(reqemp));
        return employee;
    }

    @GetMapping("/employees")
    List<Employee> getAllEmployees() {

        return employeeRepository.findAll();

    }

    @DeleteMapping("/employee/{id}")
    void deleteEmployee(@PathVariable Long id) {
        employeeRepository.deleteById(id);
    }

    @GetMapping("/employee/{id}")
    Optional<Employee> getEmployee(@PathVariable Long id) {
        return employeeRepository.findById(id);
    }

    @PutMapping("/employee/{id}")
    Employee updateEmployee( @PathVariable Long id, @RequestBody Employee employee) {
        Employee newEmployee = employeeRepository.findById(id)
                .orElseThrow();
        newEmployee.setFirstName(employee.getFirstName());
        newEmployee.setLastName(employee.getLastName());
        newEmployee.setEmail(employee.getEmail());
        newEmployee.setFacultyId(employee.getFacultyId());

       return employeeRepository.save(newEmployee);

      //  return  newEmployee;

    }

}
