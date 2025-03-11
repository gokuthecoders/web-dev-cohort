# Authentication Module - Chai Cohort Project 🚀

<div align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT" />
</div>

## 📊 Project Visualization

Our instructor has created a visual representation of the project architecture and flow. You can access it here:
[Project Diagram on Eraser.io](https://app.eraser.io/workspace/aqaTC9ma4qmZ9CDuSriU)

This diagram helps visualize:
- Application structure
- Data flow
- Authentication process

## 📝 Module Description

This is an authentication module built as part of the **Chai Cohort** curriculum. This module will serve as the foundation for a full-stack application that will be expanded in future sessions. It demonstrates secure user authentication implementation with Node.js and MongoDB.

## ✨ Current Features

- 🔐 User registration and login
- ✅ Email verification for new accounts
- 📊 MongoDB integration with Mongoose
- 🔄 RESTful API routes for authentication
- 🛡️ CORS implementation for cross-origin requests
- 🔒 Password hashing with bcrypt
- 📧 Email functionality with Nodemailer and Mailtrap
- 🎫 JWT token-based authentication
- 🍪 Secure cookie implementation

## 🛠️ Tech Stack

- **Runtime Environment**: Node.js
- **Web Framework**: Express.js v4.21.2
- **Database**: MongoDB with Mongoose v8.12.1
- **Environment Variables**: dotenv v16.4.7
- **Development**: Nodemon v3.1.9
- **Security**: 
  - cors v2.8.5
  - bcrypt (for password hashing)
  - jsonwebtoken (for JWT implementation)
  - cookie-parser (for cookie handling)
- **Email**: 
  - Nodemailer (for sending emails)
  - Mailtrap (for email testing)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB account and get Database URL
- npm
- Mailtrap account (for email testing)

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
    JWT_SECRET=your_jwt_secret_key
    JWT_EXPIRY=1d
    MAILTRAP_USER=your_mailtrap_username
    MAILTRAP_PASS=your_mailtrap_password
    EMAIL_FROM=your-email@example.com
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
    │   ├── db.js
    │   └── emailService.js
    ├── middleware/
    │   └── auth.middleware.js
    ├── index.js
    ├── package.json
    ├── package-lock.json
    └── README.md
```
## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /api/v1/users/register | Register a new user |
| GET    | /api/v1/users/verify/:token | Verify user email with token |
| POST   | /api/v1/users/login | User login |
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
* Implements cookie-parser for handling cookies

```javascript
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
```

### User Routes
* Includes registration, verification, and login endpoints
* Routes are modular and separated from the main application

```javascript
import express from "express";
import {
  login,
  registerUser,
  verifyUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);

export default router;
```

### User Controller

* Contains the registration, verification, and login logic
* Implements JWT token generation and cookie handling
* Includes email functionality for user verification and password reset

### Email Verification Flow

1. User registers with email and password
2. System generates a verification token
3. Verification email is sent to user via Nodemailer/Mailtrap
4. User clicks the verification link with token
5. System verifies the token and activates the account
6. User can now login with their credentials

### Security Features

* **Password Hashing**: Using bcrypt with Mongoose pre-save hook

```javascript
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
```

* **JWT Authentication**: Generates tokens for secure user sessions
* **Cookie Security**: Sends httpOnly cookies for better security
* **Email Verification**: Uses Nodemailer with Mailtrap for testing

## 🔜 Coming Soon

- Password reset functionality
- Role-based access control
- Enhanced security features
- Frontend integration

## Acknowledgements

* The amazing Chai Cohort community and instructors
* Fellow learners who make this journey exciting

<hr />
<div align="center">
  <p>Made with ❤️ by a proud member of the Chai-Cohort</p>
</div>