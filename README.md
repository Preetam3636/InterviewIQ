# InterviewIQ

**InterviewIQ** is an AI-powered interview preparation platform built with **React.js, Node.js, Express.js, MongoDB, and Google Gemini AI**.

It helps candidates prepare for interviews by analyzing a **job description, candidate self-description, and resume** to generate a personalized AI-powered interview report.

---

## 🚀 Overview

InterviewIQ allows users to:

* Create an account and log in securely
* Enter a job description
* Provide a self-description
* Upload their resume
* Generate an AI-powered interview report
* Store and view previous interview reports
* View individual interview reports
* Generate and download a resume/interview PDF

---

## ✨ Features

* 🔐 User registration and login
* 🔑 JWT-based authentication
* 🛡️ Protected routes
* 🤖 AI-powered interview report generation
* 📋 Job-description-based interview preparation
* 👤 Candidate self-description analysis
* 📄 Resume upload
* 💾 Interview report storage
* 📊 Previous interview reports
* 🔎 Individual report viewing
* 📥 Resume PDF generation and download

---

## 🛠️ Tech Stack

### Client

* React.js
* React Router
* Axios
* SCSS
* Vite

### Server

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT

### AI

* Google Gemini API

---

## 📁 Project Structure

```text
InterviewIQ/
├── Server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   ├── package.json
│   └── server.js
│
├── Client/
│   ├── public/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   └── interview/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Preetam3636/InterviewIQ.git
cd InterviewIQ
```

---

### 2. Server Setup

Navigate to the server directory:

```bash
cd Server
npm install
```

Create a `.env` file inside the `Server` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

> **Important:** Never commit your `.env` file or expose your API keys in the repository.

Start the server:

```bash
npm start
```

If `npm start` is not defined in `package.json`, you can run:

```bash
node server.js
```

The server will run locally on:

```text
http://localhost:5000
```

---

### 3. Client Setup

Open another terminal and navigate to the client directory:

```bash
cd Client
npm install
```

Create a `.env` file inside the `Client` directory if your application uses a frontend API URL:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local URL, usually:

```text
http://localhost:5173
```

---

## 🔑 Environment Variables

### Server

| Variable         | Purpose                            |
| ---------------- | ---------------------------------- |
| `PORT`           | Backend server port                |
| `MONGODB_URI`    | MongoDB database connection        |
| `JWT_SECRET`     | Secret used for JWT authentication |
| `GEMINI_API_KEY` | Google Gemini API key              |

### Client

| Variable           | Purpose                |
| ------------------ | ---------------------- |
| `VITE_BACKEND_URL` | URL of the backend API |

Use the exact variable names required by your implementation.

---

## 🔄 How It Works

```text
                  Candidate
                      │
          ┌───────────┼───────────┐
          │           │           │
          ▼           ▼           ▼
    Job Description  Self-      Resume
                    Description
          │           │           │
          └───────────┼───────────┘
                      ▼
                 InterviewIQ
                      │
                      ▼
                Client (React)
                      │
                      ▼
                Server (Node.js)
                      │
             ┌────────┴────────┐
             │                 │
             ▼                 ▼
         Gemini AI         MongoDB
             │                 │
             ▼                 │
      Interview Report ◄───────┘
             │
       ┌─────┴─────┐
       │           │
       ▼           ▼
   View Report   Generate
                 PDF
```

---

## 🤖 AI-Powered Interview Analysis

InterviewIQ uses **Google Gemini AI** to analyze the candidate's:

* Job description
* Resume
* Self-description

Based on this information, the system generates a personalized interview report containing relevant technical and behavioral interview questions and suggested answers.

---

## 🔐 Authentication

The application uses **JWT (JSON Web Tokens)** for authentication.

The authentication flow is:

```text
User
 │
 ▼
Login / Register
 │
 ▼
Server
 │
 ▼
JWT Token
 │
 ▼
Authenticated Requests
 │
 ▼
Protected Resources
```

Protected routes ensure that only authenticated users can access their interview reports and other private resources.

---

## 🗄️ Database

InterviewIQ uses **MongoDB** with **Mongoose** for data storage.

The database stores information such as:

* User accounts
* Interview reports
* Technical questions
* Behavioral questions
* Report-related data

---

## 🔒 Security

* `.env` files are excluded using `.gitignore`
* JWT is used for authentication
* Database credentials are stored in environment variables
* AI API keys are stored in environment variables
* Sensitive credentials should never be committed to GitHub

> **Never upload your real `.env` file to GitHub.**

---

## 🚀 Deployment

The application can be deployed using services such as:

```text
GitHub
   │
   ├── Client
   │      │
   │      ▼
   │    Vercel
   │
   └── Server
          │
          ▼
        Render
          │
          ├── MongoDB Atlas
          └── Google Gemini API
```

For production deployment, make sure to configure the appropriate environment variables on your hosting platforms.

---

## 🔮 Future Improvements

* 🎤 Real-time AI mock interviews
* 🎙️ Voice-based interview practice
* 🤖 AI evaluation of candidate answers
* 📊 Interview performance scoring
* 📚 Personalized learning roadmap
* 🎯 Difficulty-based technical questions
* 🧠 Advanced behavioral interview analysis
* 📄 Resume quality scoring
* 💼 Job-role-specific preparation plans
* 📈 Interview performance analytics

---

## 👨‍💻 Author

**Preetam Biswas**

GitHub:
https://github.com/Preetam3636

---

## 📄 License

This project is currently intended for **educational and portfolio purposes**.
