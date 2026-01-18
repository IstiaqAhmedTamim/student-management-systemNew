# 🎓 Student Management System

> A full-stack CRUD application built with **Spring Boot** + **React (TypeScript)** running seamlessly on **GitHub Codespaces**

---

## 📌 1. Project Overview

The **Student Management System** is a modern full-stack web application designed to manage student records in an academic environment. It provides a complete set of CRUD (Create, Read, Update, Delete) operations through an intuitive web interface.

### Key Features
- ✅ Create new student records
- ✅ View all students in a responsive table
- ✅ Update existing student information
- ✅ Delete student records
- ✅ Search students by name or email
- ✅ Real-time data synchronization between frontend and backend

### Tech Stack

| Layer | Technology |
|-------|------------|
| **Backend** | Java 17, Spring Boot, Spring Web, Spring Data JPA |
| **Database** | H2 In-Memory Database |
| **Frontend** | React 18, TypeScript, Vite, Axios |
| **DevOps** | GitHub Codespaces, Docker (devcontainer) |

---

## 🚀 2. Running the Project Using GitHub Codespaces

GitHub Codespaces provides a fully containerized, cloud-based development environment. No local setup is required!

### Step-by-Step Instructions

1. **Navigate to the Repository**
   - Go to the GitHub repository page

2. **Launch Codespace**
   - Click the green **`<> Code`** button
   - Select the **Codespaces** tab
   - Click **"Create codespace on main"**

3. **Wait for Environment Setup**
   - Codespaces will automatically build the dev container
   - All dependencies (Java, Maven, Node.js, npm) are pre-installed
   - The VS Code editor opens directly in your browser

4. **Ready to Develop!**
   - ✔ No manual environment configuration
   - ✔ All tools and extensions pre-configured
   - ✔ Consistent environment across all developers

---

## ▶️ 3. Steps to Start Frontend and Backend Services

### Starting the Backend (Spring Boot)

Open a terminal in Codespaces and run:

```bash
cd backend
mvn spring-boot:run
```

- **Backend URL**: `http://localhost:8080`
- The API will be available at `/api/students`

### Starting the Frontend (React + TypeScript)

Open a **new terminal** and run:

```bash
cd frontend
npm install    # First time only
npm run dev
```

- **Frontend URL**: `http://localhost:5173`
- Vite's dev server enables hot module replacement (HMR)

### Port Forwarding in Codespaces

Codespaces automatically forwards ports and provides public URLs:
- Backend: Port `8080`
- Frontend: Port `5173`

Click the **Ports** tab in VS Code to view and manage forwarded ports.

---

## 🏗️ 4. High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                        GitHub Codespaces                            │
│                    (Containerized Environment)                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────────┐         ┌─────────────────────────┐      │
│   │      Frontend       │  HTTP   │        Backend          │      │
│   │  (React + TypeScript)│ ──────▶│     (Spring Boot)       │      │
│   │     Port: 5173      │  REST   │      Port: 8080         │      │
│   └─────────────────────┘         └───────────┬─────────────┘      │
│                                               │                     │
│                                               │ JPA                 │
│                                               ▼                     │
│                                   ┌─────────────────────────┐      │
│                                   │    H2 Database          │      │
│                                   │   (In-Memory)           │      │
│                                   └─────────────────────────┘      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Project Directory Structure

```
student-management-system/
│
├── backend/                          # Spring Boot REST API
│   ├── src/main/java/com/example/student/
│   │   ├── controller/               # REST Controllers
│   │   ├── model/                    # JPA Entities
│   │   ├── repository/               # Data Access Layer
│   │   └── service/                  # Business Logic Layer
│   └── pom.xml                       # Maven dependencies
│
├── frontend/                         # React + TypeScript UI
│   ├── src/
│   │   ├── components/               # React Components
│   │   ├── models/                   # TypeScript Interfaces
│   │   └── services/                 # API Service Layer
│   └── package.json                  # npm dependencies
│
├── .devcontainer/                    # Codespaces configuration
└── README.md
```

---

## 🔗 5. Interaction Between Frontend, Backend, and Codespaces

### Request-Response Flow

```
┌──────────┐    ┌──────────┐    ┌────────────┐    ┌────────────┐    ┌──────────┐
│  User    │───▶│ Frontend │───▶│  Backend   │───▶│ Repository │───▶│ Database │
│ (Browser)│    │  (React) │    │(Spring Boot)│   │   (JPA)    │    │   (H2)   │
└──────────┘    └──────────┘    └────────────┘    └────────────┘    └──────────┘
                     │                 │
                     │   HTTP/REST     │
                     │   (JSON)        │
                     ▼                 ▼
              ┌─────────────────────────────┐
              │     Axios HTTP Client       │
              │   Makes API calls to:       │
              │   /api/students             │
              └─────────────────────────────┘
```

### Communication Details

| Component | Responsibility | Communication |
|-----------|---------------|---------------|
| **Frontend (React)** | UI rendering, user interaction, form handling | Axios HTTP requests to backend |
| **Backend (Spring Boot)** | REST API, business logic, data validation | JSON responses, JPA queries |
| **Repository (JPA)** | Data access abstraction | SQL queries to H2 database |
| **Codespaces** | Hosting, port forwarding, environment isolation | Docker container orchestration |

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/students` | Retrieve all students |
| `GET` | `/api/students/{id}` | Retrieve student by ID |
| `GET` | `/api/students/search?keyword=` | Search students |
| `POST` | `/api/students` | Create a new student |
| `PUT` | `/api/students/{id}` | Full update of student |
| `PATCH` | `/api/students/{id}` | Partial update of student |
| `DELETE` | `/api/students/{id}` | Delete a student |

---

## 🔄 6. CRUD Workflow Explanation

### **Create** – Adding a New Student

```
User fills form ──▶ React captures data ──▶ POST /api/students ──▶ StudentController
                                                                          │
                                                                          ▼
                                                                   StudentService
                                                                          │
                                                                          ▼
                                                                StudentRepository.save()
                                                                          │
                                                                          ▼
                                                                  H2 Database INSERT
```

**Code Flow:**
1. User enters student details in the form
2. Frontend sends `POST` request with JSON body via Axios
3. `StudentController.createStudent()` receives the request
4. `StudentServiceImpl.createStudent()` processes business logic
5. `StudentRepository.save()` persists to H2 database
6. Response returns the saved student with generated ID

---

### **Read** – Fetching Students

```
Page loads ──▶ React useEffect() ──▶ GET /api/students ──▶ StudentController
                                                                  │
                                                                  ▼
                                                           StudentService
                                                                  │
                                                                  ▼
                                                        StudentRepository.findAll()
                                                                  │
                                                                  ▼
                                                          H2 Database SELECT
```

**Code Flow:**
1. Component mounts and triggers data fetch
2. Frontend sends `GET` request via Axios
3. `StudentController.getAllStudents()` handles the request
4. `StudentServiceImpl.getAllStudents()` delegates to repository
5. `StudentRepository.findAll()` queries the database
6. JSON array returned to frontend for rendering

---

### **Update** – Modifying Student Data

```
User clicks Edit ──▶ Form populates ──▶ User modifies ──▶ PUT /api/students/{id}
                                                                    │
                                                                    ▼
                                                             StudentController
                                                                    │
                                                                    ▼
                                                             StudentService
                                                                    │
                                                                    ▼
                                                        StudentRepository.save()
```

**Code Flow:**
1. User clicks edit button on a student row
2. Form populates with existing student data
3. User modifies fields and submits
4. Frontend sends `PUT` request with updated data
5. `StudentController.updateStudent()` receives the request
6. `StudentServiceImpl.updateStudent()` fetches existing record, updates fields
7. `StudentRepository.save()` persists changes

---

### **Delete** – Removing a Student

```
User clicks Delete ──▶ Confirmation ──▶ DELETE /api/students/{id} ──▶ StudentController
                                                                            │
                                                                            ▼
                                                                     StudentService
                                                                            │
                                                                            ▼
                                                              StudentRepository.deleteById()
                                                                            │
                                                                            ▼
                                                                    H2 Database DELETE
```

**Code Flow:**
1. User clicks delete button
2. Confirmation dialog (optional)
3. Frontend sends `DELETE` request via Axios
4. `StudentController.deleteStudent()` handles the request
5. `StudentServiceImpl.deleteStudent()` delegates to repository
6. `StudentRepository.deleteById()` removes from database

---

## 🧱 7. Object-Oriented Principles Used

This project demonstrates several core OOP principles:

### 1. **Encapsulation**

The `Student` entity encapsulates all student-related data with private fields and public getters/setters:

```java
@Entity
public class Student {
    private Long id;
    private String name;
    private String email;
    private String department;
    private Double cgpa;
    
    // Getters and setters control access
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
```

**Benefit:** Internal representation is hidden; data is accessed through controlled methods.

---

### 2. **Abstraction**

The `StudentService` interface defines the contract without implementation details:

```java
public interface StudentService {
    List<Student> getAllStudents();
    Student getStudentById(Long id);
    Student createStudent(Student student);
    Student updateStudent(Long id, Student student);
    void deleteStudent(Long id);
}
```

**Benefit:** Clients (Controller) depend on the interface, not the implementation.

---

### 3. **Inheritance**

The `StudentRepository` extends `JpaRepository`, inheriting all CRUD operations:

```java
public interface StudentRepository extends JpaRepository<Student, Long> {
    // Inherits: save(), findAll(), findById(), deleteById(), etc.
    
    // Custom query method
    List<Student> searchByNameOrEmail(String keyword);
}
```

**Benefit:** Reuses existing functionality while allowing customization.

---

### 4. **Polymorphism**

The `StudentService` interface allows for different implementations:

```java
// Interface
public interface StudentService { ... }

// Concrete implementation
@Service
public class StudentServiceImpl implements StudentService {
    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }
}
```

**Benefit:** The controller works with the interface; the actual implementation can be swapped (e.g., for testing with mock services).

---

### 5. **Dependency Injection (IoC)**

Spring manages object creation and injects dependencies via constructor injection:

```java
@RestController
public class StudentController {
    private final StudentService service;
    
    // Spring injects StudentServiceImpl automatically
    public StudentController(StudentService service) {
        this.service = service;
    }
}
```

**Benefit:** Loose coupling, easier testing, and flexible configuration.

---

### 6. **Single Responsibility Principle (SRP)**

Each class has one well-defined purpose:

| Class | Responsibility |
|-------|---------------|
| `Student` | Data model / Entity |
| `StudentRepository` | Database operations |
| `StudentService` | Business logic interface |
| `StudentServiceImpl` | Business logic implementation |
| `StudentController` | HTTP request handling |

**Benefit:** High cohesion, easier maintenance, and clearer code organization.

---

## 📝 Summary

| Aspect | Implementation |
|--------|---------------|
| **Architecture** | 3-Tier (Presentation, Business, Data) |
| **API Style** | RESTful with JSON |
| **Database** | H2 In-Memory (auto-configured) |
| **Frontend Framework** | React with TypeScript |
| **Build Tools** | Maven (backend), Vite (frontend) |
| **Development Environment** | GitHub Codespaces |

---


