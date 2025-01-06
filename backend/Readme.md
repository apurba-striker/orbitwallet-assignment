# Node.js Transaction API

A Node.js backend application to manage users and transactions, using MongoDB for data storage.

## Features

\- Fetch user details by ID.

\- Fetch all transactions for a user with filters (status, type, date range).

\- Fetch all transactions with associated user details.

\- Pagination support.

\- MongoDB aggregation framework for efficient queries.

\---

## Installation

### 1. Clone the Repository

`

git clone https://github.com/apurba-striker/orbitwallet-assignment/tree/main/backend

cd backend `

### 2\. Install Dependencies

`   npm install   `

### 3\. Set Up MongoDB

*   Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    
*   env : MONGO\_URI=mongodb+srv://:@cluster.mongodb.net/?retryWrites=true&w=majority
    

### 4\. Run the Server

`   npm start   `

The server will run on http://localhost:5000.

API Endpoints
-------------

### Base URL
`   http://localhost:5000   `

### 1\. Get User Details by ID

**Endpoint:** GET /api/users/:id**Description:** Fetch details of a user by their MongoDB ID.

**Path Parameter:**

*   id (String): MongoDB user ID.
    

**Example Request:**

`   GET /api/users/64b33d8a9b32df10d00f9d01   `

**Response:**

`{    "_id": "64b33d8a9b32df10d00f9d01",    "name": "John Doe",    "phoneNumber": "1234567890"  }`

### 2\. Get All Transactions for a User

**Endpoint:** GET /api/transactions/user/:userId**Description:** Fetch all transactions for a user with optional filters.

**Path Parameter:**

*   userId (String): MongoDB user ID.
    

**Query Parameters:**

*   status (String): Filter by status (success, pending, failed).
    
*   type (String): Filter by type (debit, credit).
    
*   from / to (Date): Date range in YYYY-MM-DD format.
    
*   page / limit (Number): Pagination options (default: page=1, limit=10).
    

**Example Request:**

`   GET /api/transactions/user/64b33d8a9b32df10d00f9d01?status=success&type=debit&from=2023-12-01&to=2023-12-31&page=1&limit=5   `

**Response:**

`   code[    {      "_id": "64b33d8a9b32df10d00f9d02",      "status": "success",      "type": "debit",      "transactionDate": "2023-12-15T00:00:00.000Z",      "amount": 500,      "userId": "64b33d8a9b32df10d00f9d01"    }  ]   `

### 3\. Get All Transactions with User Details

**Endpoint:** GET /api/transactions/all**Description:** Fetch all transactions with associated user details.

**Query Parameters:**

*   status (String): Filter by status (success, pending, failed).
    
*   type (String): Filter by type (debit, credit).
    
*   from / to (Date): Date range in YYYY-MM-DD format.
    
*   page / limit (Number): Pagination options (default: page=1, limit=10).
    

**Example Request:**

`   GET /api/transactions/all?status=success&type=credit&page=1&limit=5   `

**Response:**

`   code[    {      "_id": "64b33d8a9b32df10d00f9d02",      "status": "success",      "type": "credit",      "transactionDate": "2023-12-15T00:00:00.000Z",      "amount": 1000,      "userId": "64b33d8a9b32df10d00f9d01",      "userDetails": {        "_id": "64b33d8a9b32df10d00f9d01",        "name": "John Doe",        "phoneNumber": "1234567890"      }    }  ]   `

Error Responses
---------------

Status CodeDescription400Invalid request or query parameters.404Resource not found.500Internal server error.