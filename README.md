# InterviewIQ

AI-powered interview preparation platform built with React, Node.js, Express, MongoDB, and Google Gemini AI.

## 🚀 Overview

InterviewIQ helps candidates prepare for job interviews by using a job description, candidate self-description, and resume to generate personalized AI-powered interview reports.

## ✨ Features

- User registration and login
- JWT-based authentication
- Protected routes
- AI-powered interview report generation
- Job-description-based interview preparation
- Candidate self-description analysis
- Resume upload
- Interview report storage
- View previous interview reports
- View individual reports
- Resume PDF generation and download

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- SCSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT

### AI
- Google Gemini API

## 📁 Project Structure

```text
InterviewIQ/
├── Backend/
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
├── Frontend/
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

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Preetam3636/InterviewIQ.git
cd InterviewIQ
```

### 2. Backend setup

```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend/`.

Example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

Use the exact variable names required by your backend code. Never commit your real `.env` file or API keys.

Start the backend:

```bash
npm start
```

If `npm start` is not defined in `package.json`, use:

```bash
node server.js
```

### 3. Frontend setup

Open another terminal:

```bash
cd Frontend
npm install
npm run dev
```

Vite will display the local URL, usually:

```text
http://localhost:5173
```

## 🔑 Environment Variables

| Variable | Purpose |
|---|---|
| `PORT` | Backend server port |
| `MONGODB_URI` | MongoDB database connection |
| `JWT_SECRET` | JWT authentication secret |
| `GEMINI_API_KEY` | Google Gemini API key |

If your implementation uses additional environment variables, add them to your local `.env` file.

## 🔄 How It Works

```text
Candidate
   │
   ├── Job Description
   ├── Self Description
   └── Resume
          │
          ▼
     InterviewIQ
          │
          ▼
      Backend API
          │
          ▼
       Gemini AI
          │
          ▼
   Interview Report
          │
          ├── Save to MongoDB
          ├── View Report
          └── Generate Resume PDF
```

## 🔮 Future Improvements

- Real-time AI mock interviews
- Voice-based interview practice
- AI evaluation of candidate answers
- Interview performance scoring
- Personalized learning roadmap
- Difficulty-based technical questions
- Behavioral interview analysis
- Resume quality scoring
- Job-role-specific preparation plans
- Interview performance analytics

## 🔒 Security

- `.env` files are excluded using `.gitignore`.
- JWT is used for authentication.
- Never expose database credentials, JWT secrets, or AI API keys in source code.

## 👨‍💻 Author

**Preetam Biswas**

GitHub: https://github.com/Preetam3636

## 📄 License

This project is currently intended for educational and portfolio purposes.
