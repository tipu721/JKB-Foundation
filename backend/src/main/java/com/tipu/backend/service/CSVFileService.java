package com.tipu.backend.service;

import com.tipu.backend.dao.EmployeeRepository;
import com.tipu.backend.model.Employee;
import com.tipu.backend.utility.CSVHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@Service
public class CSVFileService {

    @Autowired
    EmployeeRepository employeeRepository;

    public void save(MultipartFile multipartFile) {
        try {
            List<Employee> employeeList = CSVHelper.csvToEmployees(multipartFile.getInputStream());
            employeeRepository.saveAll(employeeList);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    List<Employee> getEmployeeList(){
        return employeeRepository.findAll();
    }
}
