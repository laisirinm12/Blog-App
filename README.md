# Blog App

A full-stack Blog Application built using HTML, CSS, JavaScript, Node.js, Express and MongoDB.

This project allows users to create, read, update and delete blog posts with authentication. It also includes a modern UI with pastel-themed cards and glassmorphism design.

---

## Features

### Authentication
- User Signup
- User Login
- JWT-based authentication
- Session persistence using localStorage

### Blog System
- Create posts
- View all posts (public)
- Read full blog content
- Edit your posts
- Delete your posts (with confirmation)

### User Profile
- View user details (name, email, ID)
- Update username
- Change password

### UI/UX
- Pastel card-based design
- Glassmorphism UI
- Smooth hover animations
- Responsive layout (grid + flex)
- Clean and modern typography

---

## Tech Stack

### Frontend
- HTML
- CSS (Glassmorphism + Pastel UI)
- JavaScript (Vanilla JS)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Authentication
- JSON Web Token (JWT)
- bcrypt.js (password hashing)

---

## API Endpoints

### Auth Routes

| Method | Endpoint | Description |
|--------|--------|-------------|
| POST | /api/auth/signup | Register user |
| POST | /api/auth/login | Login user |
| GET | /api/auth/me | Get profile |
| PUT | /api/auth/update-name | Update username |
| PUT | /api/auth/update-password | Change password |

---

### Post Routes

| Method | Endpoint | Description |
|--------|--------|-------------|
| POST | /api/posts | Create post |
| GET | /api/posts | Get all posts |
| GET | /api/posts/my | Get user posts |
| DELETE | /api/posts/:id | Delete post |
| PUT | /api/posts/:id | Edit post |

---

## Authentication Flow

1. User logs in
2. Backend returns JWT token
3. Token stored in localStorage
4. Token sent in headers for protected routes

---

## Future Improvements

- Profile picture upload
- Like & comment system
- Search & filter blogs
- Pagination
- Dark mode
- Rich text editor

---

## Learning Outcomes

- Understanding of full-stack application development using frontend and backend technologies  
- Implementing user authentication using JWT and secure password hashing with bcrypt  
- Designing RESTful APIs for handling CRUD operations on blog posts  
- Managing data using MongoDB and Mongoose schemas  
- Connecting frontend and backend using Fetch API and handling asynchronous requests  
- Building dynamic UI components using DOM manipulation  
- Implementing protected routes and middleware for secure access control  
- Handling form validation and user input effectively  
- Designing responsive and modern UI using CSS, including glassmorphism and pastel themes  
- Structuring a project with clear separation between client and server  

---

## Author

Laisiri N M
