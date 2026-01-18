import React, { useEffect, useState } from "react";
import { Student } from "../models/Student";
import {
  getAllStudents,
  deleteStudent,
  searchStudents
} from "../services/StudentService";
import StudentForm from "./StudentForm";

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchResults, setSearchResults] = useState<Student[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const loadStudents = () => {
    getAllStudents().then(res => setStudents(res.data));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleDelete = (id?: number) => {
    if (!id) return;
    deleteStudent(id).then(() => {
      loadStudents();
      if (isSearching && searchKeyword) {
        searchStudents(searchKeyword).then(res => setSearchResults(res.data));
      }
    });
  };

  const handleSearch = () => {
    if (searchKeyword.trim()) {
      setIsSearching(true);
      searchStudents(searchKeyword)
        .then(res => {
          console.log("Search results:", res.data);
          setSearchResults(res.data);
        })
        .catch(err => {
          console.error("Search error:", err);
          setSearchResults([]);
        });
    }
  };

  const handleClearSearch = () => {
    setSearchKeyword("");
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Management System</h2>

      <div style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
        <h3 style={{ marginTop: 0 }}>🔍 Search Students</h3>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          style={{ padding: "10px", width: "300px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button onClick={handleSearch} style={{ padding: "10px 20px", marginRight: "5px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Search
        </button>
        <button onClick={handleClearSearch} style={{ padding: "10px 20px", backgroundColor: "#6c757d", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Clear
        </button>

        {isSearching && (
          <div style={{ marginTop: "20px" }}>
            <h4>Search Results for "{searchKeyword}" ({searchResults.length} found)</h4>
            {searchResults.length === 0 ? (
              <p style={{ color: "#666", fontStyle: "italic" }}>No students found matching your search.</p>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                {searchResults.map(student => (
                  <div key={student.id} style={{ 
                    border: "1px solid #ddd", 
                    borderRadius: "8px", 
                    padding: "15px", 
                    backgroundColor: "white",
                    minWidth: "250px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                  }}>
                    <h4 style={{ margin: "0 0 10px 0", color: "#333" }}>{student.name}</h4>
                    <p style={{ margin: "5px 0", fontSize: "14px" }}><strong>📧 Email:</strong> {student.email}</p>
                    <p style={{ margin: "5px 0", fontSize: "14px" }}><strong>🏢 Department:</strong> {student.department}</p>
                    <p style={{ margin: "5px 0", fontSize: "14px" }}><strong>📊 CGPA:</strong> {student.cgpa}</p>
                    <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                      <button 
                        onClick={() => setEditingStudent(student)}
                        style={{ padding: "5px 15px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(student.id)}
                        style={{ padding: "5px 15px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <StudentForm
        editingStudent={editingStudent}
        onSaved={() => {
          setEditingStudent(null);
          loadStudents();
        }}
      />

      <h3 style={{ marginTop: "20px" }}>📋 All Students</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
        {students.map(student => (
          <div key={student.id} style={{ 
            padding: "10px 15px", 
            backgroundColor: "#e9ecef", 
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}>
            <span style={{ fontWeight: "500" }}>{student.name}</span>
            <button 
              onClick={() => setEditingStudent(student)}
              style={{ padding: "3px 8px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}
            >
              Edit
            </button>
            <button 
              onClick={() => handleDelete(student.id)}
              style={{ padding: "3px 8px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "12px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
