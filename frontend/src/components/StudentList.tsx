import React, { useEffect, useState } from "react";
import { Student } from "../models/Student";
import {
  getAllStudents,
  deleteStudent
} from "../services/StudentService";
import StudentForm from "./StudentForm";

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const loadStudents = () => {
    getAllStudents().then(res => setStudents(res.data));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = (id?: number) => {
    if (!id) return;
    deleteStudent(id).then(() => loadStudents());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Management System</h2>

      <StudentForm
        editingStudent={editingStudent}
        onSaved={() => {
          setEditingStudent(null);
          loadStudents();
        }}
      />

      <table border={1} cellPadding={10} style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>CGPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>{student.cgpa}</td>
              <td>
                <button onClick={() => setEditingStudent(student)}>
                  Edit
                </button>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
