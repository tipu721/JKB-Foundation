package com.tipu.backend.dao;

import com.tipu.backend.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {
    @Query("SELECT department FROM Department department WHERE department.facultyId = ?1")
    List<Department> findByFacultyId(Integer facultyId);
}
