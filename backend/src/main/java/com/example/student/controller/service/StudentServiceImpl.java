package com.example.student.service;

import com.example.student.model.Student;
import com.example.student.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repository;

    public StudentServiceImpl(StudentRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    @Override
    public Student createStudent(Student student) {
        return repository.save(student);
    }

    @Override
    public Student updateStudent(Long id, Student student) {
        Student existing = getStudentById(id);

        existing.setName(student.getName());
        existing.setEmail(student.getEmail());
        existing.setDepartment(student.getDepartment());
        existing.setCgpa(student.getCgpa());

        return repository.save(existing);
    }

    @Override
    public Student partialUpdateStudent(Long id, Student student) {
        Student existing = getStudentById(id);

        if (student.getName() != null)
            existing.setName(student.getName());

        if (student.getEmail() != null)
            existing.setEmail(student.getEmail());

        if (student.getDepartment() != null)
            existing.setDepartment(student.getDepartment());

        if (student.getCgpa() != null)
            existing.setCgpa(student.getCgpa());

        return repository.save(existing);
    }

    @Override
    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}
