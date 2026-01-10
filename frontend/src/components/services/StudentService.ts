import axios from "axios";
import { Student } from "../models/Student";

const API_URL = "http://localhost:8080/api/students";

export const getAllStudents = () =>
  axios.get<Student[]>(API_URL);

export const getStudentById = (id: number) =>
  axios.get<Student>(`${API_URL}/${id}`);

export const createStudent = (student: Student) =>
  axios.post<Student>(API_URL, student);

export const updateStudent = (id: number, student: Student) =>
  axios.put<Student>(`${API_URL}/${id}`, student);

export const deleteStudent = (id: number) =>
  axios.delete(`${API_URL}/${id}`);
