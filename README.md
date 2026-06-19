# AI & Robotics Summer Workshop

A full-stack workshop platform built using React, TypeScript, Express, and MongoDB.

The goal of this project was to create a modern workshop experience where parents can explore a workshop, understand the curriculum, and register their child through a responsive and intuitive interface.

This project was developed as part of an internship assignment and focuses on clean architecture, user experience, responsiveness, and maintainable code rather than simply implementing the required features.

---

## Demo

Frontend: [Live Link]

Backend API: [API Link]

---

## Features

### Frontend

* Responsive workshop detail page
* Modern UI inspired by educational platforms
* Interactive curriculum timeline
* Learning outcomes section
* FAQ accordion
* Parent testimonials
* Registration form
* Framer Motion animations
* Form validation using React Hook Form and Zod

### Backend

* Express.js REST API
* MongoDB integration
* Registration storage
* Request validation
* Error handling middleware

---

## Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* Framer Motion
* React Hook Form
* Zod

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

## Project Structure

```text
frontend/
│
├── src/
│   ├── components/
│   ├── sections/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   └── utils/

backend/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   └── config/
```

---

## API

### Create Registration

```http
POST /api/enquiry
```

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

Response:

```json
{
  "success": true,
  "message": "Enquiry submitted successfully"
}
```

---

## Running Locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## Environment Variables

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

---

## Design Decisions

The assignment requirements could be completed with a simple landing page and form. Instead, I approached it as a workshop discovery experience.

A few decisions I made:

* Separated UI into reusable sections rather than creating a single large page component.
* Used TypeScript across the project for type safety.
* Added schema validation on both client and server sides.
* Structured the backend for future scalability.
* Focused on mobile responsiveness from the beginning.
* Used Framer Motion sparingly to improve the experience without affecting performance.

---

## What I Would Improve Given More Time

If this were developed further, I would add:

* Admin dashboard for registrations
* Email confirmations
* Workshop analytics
* Registration export functionality
* Authentication and role management
* Workshop management system

---

## Notes

The project intentionally prioritizes maintainability, responsiveness, and user experience over adding unnecessary complexity.

While the assignment only required a workshop page and enquiry endpoint, the architecture was designed so that additional workshops and future features could be added with minimal changes.
