# Authentication Module - Chai Cohort Project 🚀

<div align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</div>

## 📊 Project Visualization

Our instructor has created a visual representation of the project architecture and flow. You can access it here:
[Project Diagram on Eraser.io](https://app.eraser.io/workspace/aqaTC9ma4qmZ9CDuSriU)

This diagram helps visualize:
- Application structure
- Data flow
- Authenticate process

## 📝 Module Description

This is an authentication module built as part of the **Chai Cohort** curriculum. This module will serve as the foundation for a full-stack application that will be expanded in future sessions. It demonstrates secure user authentication implementation with Node.js and MongoDB.

## ✨ Current Features

- 🔐 User login
- 📊 MongoDB integration with Mongoose
- 🔄 RESTful API routes for authentication
- 🛡️ CORS implementation for cross-origin requests

## 🛠️ Tech Stack

- **Runtime Environment**: Node.js
- **Web Framework**: Express.js v4.21.2
- **Database**: MongoDB with Mongoose v8.12.1
- **Environment Variables**: dotenv v16.4.7
- **Development**: Nodemon v3.1.9
- **Security**: cors v2.8.5

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB account and get Database URL
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/chai-cohort-project.git
   cd chai-cohort-project
   ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Create a ```.env``` file in the root directory with the following variables
    ```.env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    BASE_URL=http://localhost:3000
    ```
4. Run the development server
    ```bash
    npm run dev
    ```
## 📁 Current Project Structure
```
    project/
    ├── controller/
    │   └── user.controller.js
    ├── model/
    │   └── User.model.js
    ├── routes/
    │   └── user.routes.js
    ├── utils/
    │   └── db.js
    ├── index.js
    ├── package.json
    ├── package-lock.json
    └── README.md
```
## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/v1/users/register | Register a new user (to be updated to POST) |
| GET    | / | Root endpoint returning "Cohort!" |
| GET    | /hitesh | Returns "Hitesh" |
| GET    | /piyush | Returns "Piyush!" |

## 💻 User Model

### The User model includes:

* Basic fields: name, email, password
* Role management (user/admin)
* Account verification tracking
* Password reset functionality with token and expiration
* Timestamps for created/updated tracking

## 📚 Implementation Details

### Main Application (index.js)

* Sets up Express with JSON and URL-encoded middleware
* Configures CORS with specific origin, methods, and headers
* Connects to MongoDB database
* Mounts user routes at "/api/v1/users/"
* Includes sample routes for testing

### User Routes
* Currently includes a registration endpoint
* Routes are modular and separated from the main application

### User Controller

* Contains the registration logic (currently a placeholder)
* Ready for expansion with additional authentication features

## Acknowledgements

* The amazing Chai Cohort community and instructors
* Fellow learners who make this journey exciting

<hr />
<div align="center">
  <p>Made with ❤️ by a proud member of the Chai-Cohort</p>
</div>