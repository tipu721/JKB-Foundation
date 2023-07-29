package com.tipu.backend.controller;

import com.tipu.backend.dao.EmployeeRepository;
import com.tipu.backend.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {


    @Autowired
    EmployeeRepository employeeRepository;

    @PostMapping("/employee")
    Employee addEmployee(@RequestBody Employee employee) {

        return employeeRepository.save(employee);
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

       return employeeRepository.save(newEmployee);

      //  return  newEmployee;

    }

}
