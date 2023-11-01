package com.tipu.backend.service;

import com.tipu.backend.dao.CourseRepository;
import com.tipu.backend.model.Course;
import com.tipu.backend.model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    CourseRepository courseRepository;

    public List<Course> saveCourseList(Employee employee) {
        List<Course> courseList = employee.getCourseList();
        for (Course course : courseList) {
            course.setEmployee_id((int) employee.getId());
        }
        courseRepository.saveAll(courseList);
        return  courseList;

    }
}
