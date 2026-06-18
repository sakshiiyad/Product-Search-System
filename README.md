# Product Search System

A full-stack Product Search System built using React, Node.js, and Express. The application allows users to browse a product catalog, search products by name, and view results in a clean and responsive interface.

## Live Demo

**Frontend:** https://product-search-system-rose.vercel.app

**Backend API:** https://product-search-system-3kgd.onrender.com

---

## Features

* View a catalog of products
* Search products by name
* Case-insensitive search
* Partial match search support
* Highlight matching text in search results
* Input validation on both frontend and backend
* User-friendly empty state for no results
* Centralized error handling
* Responsive UI
* Automated API tests using Jest and Supertest

---

## Technology Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js
* Zod (Validation)

### Testing

* Jest
* Supertest

### Deployment

* Frontend: Vercel
* Backend: Render

---

## Project Structure

```text
product-search-system/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── data/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── tests/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── README.md
└── AI_USAGE.md
```

---

## Architecture

The application follows a layered architecture on the backend:

```text
Client (React)
      │
      ▼
Express Routes
      │
      ▼
Controllers
      │
      ▼
Services
      │
      ▼
Models
      │
      ▼
products.json
```

### Responsibilities

* **Routes**: Define API endpoints.
* **Controllers**: Handle HTTP requests and responses.
* **Services**: Contain business logic and validation rules.
* **Models**: Manage access to product data.
* **Middleware**: Handle errors and invalid routes.

---

## API Endpoints

### Get All Products

```http
GET /api/products
```

### Search Products

```http
GET /api/products/search?q=wire
```

### Get Product By ID

```http
GET /api/products/:id
```

---

## Validation

The application uses **Zod** for backend validation.

Validation includes:

* Required fields
* Non-empty strings
* Positive price values
* Non-negative stock values
* Search query length validation

Frontend validation is also used to prevent unnecessary API requests for invalid search inputs.

---

## Error Handling

The application handles:

* Invalid search queries
* Missing resources
* Invalid input data
* Unknown routes
* Backend connectivity issues

All API errors return a consistent response structure.

Example:

```json
{
  "error": {
    "message": "Search query is required."
  }
}
```

---

## Assumptions

* A database was not required by the assignment.
* Product data is stored in a JSON file.
* Search is implemented as a case-insensitive partial match.
* Empty search results are considered valid responses and return HTTP 200 with an empty result set.
* The product catalog is read-only for this implementation.

---

## Running Locally

### Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Running Tests

```bash
cd backend
npm test
```

Current test coverage includes:

* Get all products
* Search products
* Empty search results
* Missing search query
* Invalid search query
* Non-existent products
* Unknown routes

---

## Future Improvements

* Database integration (MongoDB/PostgreSQL)
* Product management (Create, Update, Delete)
* Pagination
* Sorting and filtering
* Authentication and authorization
* End-to-end testing

---

## AI-Assisted Development

This project was developed with assistance from Claude, ChatGPT, and GitHub Copilot. AI tools were used for brainstorming, implementation guidance, code review, testing suggestions, and debugging support. The generated solutions were reviewed, simplified, and modified where necessary to align with the project requirements and maintain code clarity.
