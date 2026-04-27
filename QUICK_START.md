# 🚀 Quick Start Guide - StudyHub Authentication

## ⚡ 5-Minute Setup

### Step 1: Configure Backend Environment

Edit `studyhub-auth-backend/.env`:

```env
# Change these values:
MONGO_URI=mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.mongodb.net/studyhub
JWT_SECRET=your_very_secure_random_string_here_change_in_production
```

### Step 2: Start Backend Server

```bash
cd studyhub-auth-backend
npm install  # if not done already
npm start
```

Expected: Server running on http://localhost:5000 ✅

### Step 3: Start Frontend Server

In a new terminal:

```bash
cd studyhub
npm install  # if not done already
npm run dev
```

Expected: App running on http://localhost:5173 ✅

---

## 🧪 Quick Test

### Create New Account:
1. Go to http://localhost:5173/signup
2. Fill form:
   - Name: John Doe
   - Email: john@test.com
   - Password: testpass123
   - Confirm Password: testpass123
   - ✓ Agree to terms
3. Click "Create Account"
4. ✅ Automatically logged in, redirected to /domains

### Login:
1. Click "Logout" in navbar
2. Go to http://localhost:5173/login
3. Enter: john@test.com / testpass123
4. Click "Sign In"
5. ✅ Logged in, redirected to /domains

### Try Protected Route:
1. Open new browser tab
2. Go to http://localhost:5173/domains (without logging in)
3. ✅ Redirected to login page

### Check Persistence:
1. Log in with any account
2. Refresh page (F5)
3. ✅ Still logged in

---

## 📊 What's Included

| Feature | Status |
|---------|--------|
| User Registration | ✅ Working |
| User Login | ✅ Working |
| JWT Tokens | ✅ Working |
| Protected Routes | ✅ Working |
| Role-Based Access | ✅ Working |
| Password Hashing | ✅ Working |
| Session Persistence | ✅ Working |
| Error Handling | ✅ Working |
| CORS Enabled | ✅ Working |

---

## 🔑 Key Credentials

After first signup, you have:
- **Email**: Your registered email
- **Password**: Your registered password
- **Role**: "user" (or "admin" if needed)

---

## 🆘 Common Issues

| Issue | Fix |
|-------|-----|
| Backend not starting | Check MongoDB URI in .env |
| Can't login | Verify user was registered with same email |
| Logout doesn't work | Clear browser cache/cookies |
| Routes not protected | Restart backend and frontend |
| CORS error | Ensure backend has CLIENT_URL=http://localhost:5173 |

---

## 📱 Project Structure

```
ProjectVLK/
├── studyhub/              (React Frontend)
│   ├── src/
│   │   ├── api/auth.js           (New - API calls)
│   │   ├── context/              (New - Auth state)
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx  (New - Route protection)
│   │   ├── pages/
│   │   │   ├── Login.jsx           (Updated)
│   │   │   └── Signup.jsx          (Updated)
│   │   └── App.jsx               (Updated)
│   └── package.json
│
└── studyhub-auth-backend/        (Node.js Backend)
    ├── .env                      (New - Config)
    ├── server.js
    ├── config/
    ├── models/
    ├── controllers/
    ├── routes/
    ├── middleware/
    ├── utils/
    └── package.json
```

---

## 🎯 Verify Everything Works

Check these URLs:

1. **Frontend**: http://localhost:5173 → Should load home page ✅
2. **Backend Health**: http://localhost:5000 → Should show API info ✅
3. **Backend Health Check**: http://localhost:5000/health → Should return OK ✅
4. **Signup Page**: http://localhost:5173/signup → Should load form ✅
5. **Login Page**: http://localhost:5173/login → Should load form ✅

---

## 💾 How Data is Stored

### Backend (MongoDB):
```
Users Collection:
├── id (auto-generated)
├── name
├── email (unique)
├── password (hashed)
├── role (user/admin)
├── createdAt
└── updatedAt
```

### Frontend (Browser localStorage):
```
- auth_token: JWT token
- auth_user: User object
- savedPlatforms: Saved learning resources
```

---

## 🔒 Security Notes

- ✅ Passwords are hashed with bcrypt
- ✅ Tokens expire after 7 days
- ✅ Change JWT_SECRET before production
- ✅ Don't commit .env to git
- ✅ Use HTTPS in production
- ✅ Never log sensitive data

---

## 📞 Support

If something doesn't work:

1. Check browser console for errors (F12)
2. Check backend console for errors
3. Verify MongoDB connection string
4. Ensure ports 5000 and 5173 are not in use
5. Try clearing localStorage: `localStorage.clear()` in console

---

## 🎉 Ready to Go!

Your authentication system is production-ready. Just follow these 3 steps:

1. ✅ Set .env values (MongoDB + JWT Secret)
2. ✅ Start backend: `npm start` in studyhub-auth-backend
3. ✅ Start frontend: `npm run dev` in studyhub

That's it! 🚀
