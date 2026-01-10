🎓 Student Management System

Spring Boot + React (TypeScript) + GitHub Codespaces

📌 Project Overview

The Student Management System is a full-stack web application designed to manage student records in a university environment.
It allows users to perform complete CRUD (Create, Read, Update, Delete) operations through a modern web interface.

The project is developed using:

Spring Boot for the backend REST API

React with TypeScript for the frontend

GitHub Codespaces for a fully containerized development environment

The entire application runs without any manual environment setup.

🏗️ Project Architecture

The project follows a clean separation of concerns:

student-management-system/
│
├── backend/          # Spring Boot REST API
├── frontend/         # React + TypeScript UI
├── .devcontainer/    # GitHub Codespaces configuration
└── README.md

⚙️ Technologies Used
Backend

Java 17

Spring Boot

Spring Web

Spring Data JPA

H2 In-Memory Database

Frontend

React

TypeScript

Axios

HTML & CSS

Development Environment

GitHub Codespaces

Docker (via devcontainer)

Maven

Node.js & npm

🚀 Running the Project Using GitHub Codespaces
Step 1: Open in Codespaces

Open the GitHub repository

Click Code → Codespaces → Create codespace on main

Wait for the container to build automatically

✔ All dependencies are installed automatically
✔ No local setup required

▶️ Starting the Backend (Spring Boot)
cd backend
mvn spring-boot:run


Backend will run at:

http://localhost:8080

▶️ Starting the Frontend (React + TypeScript)
cd frontend
npm start


Frontend will run at:

http://localhost:3000

🔗 Backend REST API Endpoints
HTTP Method	Endpoint	Description
GET	/api/students	Retrieve all students
GET	/api/students/{id}	Retrieve student by ID
POST	/api/students	Create a new student
PUT	/api/students/{id}	Update student details
PATCH	/api/students/{id}	Partially update student
DELETE	/api/students/{id}	Delete a student
🧠 Object-Oriented Design

The backend follows standard OOP principles:

Encapsulation
→ Private fields with getters and setters in the Student entity

Abstraction
→ Service interface (StudentService) hides implementation details

Separation of Concerns
→ Controller, Service, Repository layers are clearly separated

🖥️ Frontend Features

Display list of all students

Add new student using form

Edit existing student details

Delete student

Fully integrated with backend REST API

Type-safe code using TypeScript

🔄 End-to-End Functionality

✔ Frontend and backend run without errors
✔ Proper communication via REST API
✔ Full CRUD operations from UI to database
✔ Data updates reflected immediately on UI

📦 GitHub Codespaces Configuration

The .devcontainer setup:

Installs Java 17, Maven, Node.js, npm

Automatically installs project dependencies

Forwards required ports (3000, 8080)

Enables seamless full-stack development

📝 Design Decisions & Assumptions

H2 in-memory database used for simplicity and easy testing

Single-page UI for ease of understanding

No authentication included (out of scope for this project)

Designed for educational and academic demonstration purposes

✅ Conclusion

This project demonstrates a complete full-stack application with:

Proper project structure

Clean backend REST API

Modern frontend with React + TypeScript

Fully automated development environment using GitHub Codespaces

It fulfills all requirements specified in the project guideline.

📌 Author

Istiaq Ahmed Tamim
