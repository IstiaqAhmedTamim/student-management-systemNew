package com.example.student.service;

import com.example.student.model.Student;

import java.util.List;

public interface StudentService {

    List<Student> getAllStudents();

    Student getStudentById(Long id);

    Student createStudent(Student student);

    Student updateStudent(Long id, Student student);

    Student partialUpdateStudent(Long id, Student student);

    void deleteStudent(Long id);
}
