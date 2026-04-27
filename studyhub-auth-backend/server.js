require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// CONNECT DB
connectDB();

// MIDDLEWARE
app.use(express.json());

// ✅ FIXED CORS (WORKS FOR BOTH LOCAL + VERCEL)
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://study-hub-t8s3.vercel.app/'
    ],
    credentials: true,
  })
);

// ROUTES
app.use('/api/auth', authRoutes);

// HEALTH CHECK
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🚀 StudyHub Authentication API is running',
  });
});

// ERROR HANDLER
app.use(errorMiddleware);

// START SERVER (RENDER SAFE)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});