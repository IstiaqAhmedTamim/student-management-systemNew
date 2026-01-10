import React, { useEffect, useState } from "react";
import { Student } from "../models/Student";
import {
  createStudent,
  updateStudent
} from "../services/StudentService";

interface Props {
  editingStudent: Student | null;
  onSaved: () => void;
}

const StudentForm: React.FC<Props> = ({ editingStudent, onSaved }) => {
  const [student, setStudent] = useState<Student>({
    name: "",
    email: "",
    department: "",
    cgpa: 0
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({
      ...student,
      [e.target.name]:
        e.target.name === "cgpa"
          ? Number(e.target.value)
          : e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (student.id) {
      updateStudent(student.id, student).then(onSaved);
    } else {
      createStudent(student).then(onSaved);
    }

    setStudent({
      name: "",
      email: "",
      department: "",
      cgpa: 0
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{student.id ? "Edit Student" : "Add Student"}</h3>

      <input
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
        required
      />

      <input
        name="department"
        placeholder="Department"
        value={student.department}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        step="0.01"
        name="cgpa"
        placeholder="CGPA"
        value={student.cgpa}
        onChange={handleChange}
        required
      />

      <button type="submit" style={{ marginLeft: "10px" }}>
        {student.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default StudentForm;
