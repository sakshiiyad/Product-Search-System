# Product Search System

A full-stack web application that allows users to browse and search a product catalog. The application provides case-insensitive product search, input validation, error handling, and automated API testing.

## Features

* View product catalog
* Search products by name
* Case-insensitive partial matching
* Highlight matching text in search results
* Loading state during API requests
* Graceful handling of empty search results
* Frontend and backend validation
* Centralized error handling
* Automated API tests

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
* Zod

### Testing

* Jest
* Supertest

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
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── hooks/
    │   ├── styles/
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── package.json
    └── index.html
```

---

## Architecture

The application follows a layered architecture:

```text
Frontend (React)
        ↓
API Layer
        ↓
Routes
        ↓
Controllers
        ↓
Services
        ↓
Models / Data Layer
        ↓
JSON Product Data
```

Each layer has a single responsibility:

* Routes define API endpoints.
* Controllers handle HTTP requests and responses.
* Services contain business logic.
* Models manage product data access.
* Middleware handles errors and unmatched routes.

---

## Setup Instructions

### Prerequisites

* Node.js (v18 or later)
* npm

---

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

Run tests:

```bash
npm test
```

---

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

## API Endpoints

### Get All Products

```http
GET /api/products
```

Returns the complete product catalog.

---

### Search Products

```http
GET /api/products/search?q=<query>
```

Example:

```http
GET /api/products/search?q=wire
```

Returns products whose names contain the search term using case-insensitive partial matching.

---

## Validation

Validation is implemented on both the frontend and backend.

### Search Validation

* Query length must not exceed 100 characters.
* Invalid requests return HTTP 400.

If the search input is empty, the application displays the complete product catalog instead of sending a search request.

### Product Validation

Zod is used to provide centralized and maintainable validation rules.

---

## Error Handling

The application handles:

* Invalid search requests
* Network failures
* Unknown routes
* Non-existent products

Errors are returned in a consistent format:

```json
{
  "error": {
    "message": "Error description"
  }
}
```

---

## Testing

API tests are implemented using Jest and Supertest.

Covered scenarios include:

* Product retrieval
* Product search
* Case-insensitive matching
* Empty search results
* Invalid search queries
* 404 handling

Run tests:

```bash
npm test
```

---

## Assumptions

* Product data is stored in a local JSON file.
* Database persistence was not required for this assignment.
* Search uses case-insensitive substring matching.
* Empty search results are considered valid responses and return HTTP 200 with an empty result set.
* When no search query is provided, the full catalog is displayed.

---

## Future Improvements

* Database integration (MongoDB/PostgreSQL)
* Pagination for large product catalogs
* Sorting and filtering options
* Full-text search optimization
* End-to-end testing
* Product detail page

---

## AI-Assisted Development

This project was developed with assistance from Claude, ChatGPT, and GitHub Copilot. AI tools were used for project scaffolding, implementation suggestions, testing support, code review, and architecture discussions. Generated code was reviewed and refined throughout development, with several simplifications and design decisions made to better align the solution with the assignment requirements.
