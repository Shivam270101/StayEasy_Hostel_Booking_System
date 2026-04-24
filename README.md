# 🏠 StayEasy — Hostel Management System

A full-stack web application for hostel discovery, booking, and management. Students can search for nearby hostels, make bookings, and track their stays — while hostel owners can manage listings and confirm reservations.

---

## 📁 Project Structure

```
CDAC Project/
├── backend/        → Spring Boot REST API (Java 17)
│   └── MyProject/
│       └── spring_boot_backend_template/
└── frontend/       → React + Vite frontend
    └── StayEasy_Hostel_Management_System-main/
```

---

## ⚙️ Tech Stack

### Frontend
| Technology | Version |
|---|---|
| React | 18.2.0 |
| Vite | 7.x |
| React Router DOM | 7.x |
| Axios | 1.7.x |
| Bootstrap / MUI | 5.x / 6.x |
| Framer Motion | 12.x |
| Google Maps API | @react-google-maps/api |
| React Toastify | 11.x |

### Backend
| Technology | Details |
|---|---|
| Java | 17 |
| Spring Boot | 3.3.5 |
| Spring Security + JWT | Stateless auth |
| Spring Data JPA | Hibernate ORM |
| MySQL | Database |
| Hibernate Spatial | Geospatial queries |
| JavaMail | OTP via Gmail SMTP |
| Google Maps API | Distance matrix |

---

## 🚀 Getting Started

### Prerequisites
- **Java 17** installed
- **Node.js** (v18+) and **npm**
- **MySQL** running locally
- **Maven** (or use the bundled wrapper)

---

### 🗄️ Database Setup

1. Start your MySQL server.
2. The app will auto-create the `stayeasy` database on first run (configured via `createDatabaseIfNotExist=true`).
3. Update credentials in `application.properties` if needed:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/stayeasy
spring.datasource.username=root
spring.datasource.password=root
```

---

### 🍃 Running the Backend

```bash
cd "backend/MyProject/spring_boot_backend_template"

# Using Maven wrapper (Windows)
# Note: If your user path has spaces, use the full Maven path:
& "C:\Users\<YourUsername>\.m2\wrapper\dists\apache-maven-3.8.6-bin\<hash>\apache-maven-3.8.6\bin\mvn.cmd" spring-boot:run

# Or if mvn is in your PATH:
mvn spring-boot:run
```

Backend runs on: **http://localhost:8080**

---

### ⚛️ Running the Frontend

```bash
cd "frontend/StayEasy_Hostel_Management_System-main"

# Install dependencies (first time only)
npm install

# Start dev server
npm start
```

Frontend runs on: **http://localhost:3000**

---

## 🔑 Key Features

### 👤 User (Student/Tenant)
- Register & Login with JWT authentication
- OTP verification via email
- Search nearby hostels using geolocation
- View hostel details, rooms, and pricing
- Make and manage bookings
- View booking history

### 🏢 Hostel Owner
- Register hostels with location coordinates
- Manage rooms (sharing type, price, availability)
- View and confirm/cancel bookings from tenants
- Track occupancy

### 🔒 Security
- JWT-based stateless authentication
- Role-based access control (`STUDENT` / `OWNER`)
- Password encryption

---

## 🌐 API Overview

| Module | Base URL |
|---|---|
| Authentication | `/api/auth` |
| Users | `/api/user` |
| Hostels | `/api/hostel` |
| Rooms | `/api/room` |
| Bookings | `/api/booking` |
| Location / Search | `/api/location`, `/api/search` |
| OTP | `/api/otp` |
| Reviews | `/api/review` |

---

## 🔧 Configuration

Key settings in `backend/.../src/main/resources/application.properties`:

```properties
# JWT
security.jwt.secret-key=<your-secret>
security.jwt.expiration-time=3600000   # 1 hour

# Mail (OTP)
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=<your-gmail>
spring.mail.password=<app-password>

# Google Maps
google.maps.api.key=<your-api-key>
```

> ⚠️ Never commit real credentials to version control. Move sensitive values to environment variables or a `.env` file before deploying.

---

## 👨‍💻 Developer

**Shivam Ambekar**  
CDAC Project — 2026

---

## 📄 License

This project is for educational purposes as part of the CDAC curriculum.
