# 🏗️ StudyHub Authentication Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                      StudyHub Architecture                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────┐      ┌──────────────────────────┐│
│  │   React Frontend         │      │   Node.js Backend        ││
│  │   (localhost:5173)       │      │   (localhost:5000)       ││
│  │                          │      │                          ││
│  │  ┌────────────────────┐  │      │  ┌────────────────────┐  ││
│  │  │  AuthContext       │  │      │  │  Auth Routes       │  ││
│  │  │  (Global State)    │  │      │  │  ─────────────────  │  ││
│  │  │                    │  │      │  │  POST /register   │  ││
│  │  │  • user            │  │      │  │  POST /login      │  ││
│  │  │  • token           │  │      │  │  GET  /profile    │  ││
│  │  │  • login()         │  │◄─────┼──│────────────────────┤  ││
│  │  │  • logout()        │  │──────►──│  Auth Middleware   │  ││
│  │  │  • register()      │  │      │  │  (JWT Verification)│ ││
│  │  └────────────────────┘  │      │  └────────────────────┘  ││
│  │            ▲              │      │            ▲              ││
│  │            │              │      │            │              ││
│  │  ┌────────────────────┐  │      │  ┌────────────────────┐  ││
│  │  │  Login/Signup      │  │      │  │  User Model        │  ││
│  │  │  Components        │──┼──────┼──│  (Mongoose)        │  ││
│  │  │                    │  │      │  │                    │  ││
│  │  │  • Form handling   │  │      │  │  • name            │  ││
│  │  │  • Validation      │  │      │  │  • email (unique)  │  ││
│  │  │  • Error display   │  │      │  │  • password(hash)  │  ││
│  │  └────────────────────┘  │      │  │  • role            │  ││
│  │            ▲              │      │  │  • timestamps      │  ││
│  │            │              │      │  └────────────────────┘  ││
│  │  ┌────────────────────┐  │      │            │               ││
│  │  │  Protected Routes  │  │      │            ▼               ││
│  │  │  ─────────────────  │  │      │  ┌────────────────────┐  ││
│  │  │  • /domains        │  │      │  │  MongoDB Atlas     │  ││
│  │  │  • /skills/:domain │  │      │  │  (Database)        │  ││
│  │  │  • /resources      │  │      │  │                    │  ││
│  │  │  • /saved          │  │      │  │  Collections:      │  ││
│  │  │  • /admin          │  │      │  │  • users           │  ││
│  │  └────────────────────┘  │      │  └────────────────────┘  ││
│  │                          │      │                          ││
│  └──────────────────────────┘      └──────────────────────────┘│
│                                                                 │
│           ┌─────────────────────────────────────┐              │
│           │   localStorage                      │              │
│           │   (Client-side Persistence)        │              │
│           │   ─────────────────────────          │              │
│           │   • auth_token: JWT                 │              │
│           │   • auth_user: User object          │              │
│           │   • savedPlatforms: Array           │              │
│           └─────────────────────────────────────┘              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagrams

### 1. Registration Flow

```
User fills signup form
    ↓
Form validation (frontend)
    ↓
POST /api/auth/register { name, email, password }
    ↓
Backend validation
    ↓
Check email not duplicate
    ↓
Hash password with bcrypt
    ↓
Save user to MongoDB
    ↓
Generate JWT token
    ↓
Return { user, token }
    ↓
AuthContext stores in state + localStorage
    ↓
Redirect to /domains
    ↓
✅ User logged in
```

### 2. Login Flow

```
User fills login form
    ↓
Form validation (frontend)
    ↓
POST /api/auth/login { email, password }
    ↓
Backend finds user by email
    ↓
Compare password with bcrypt
    ↓
If valid:
    ↓
    Generate JWT token
    ↓
    Return { user, token }
    ↓
    AuthContext stores in state + localStorage
    ↓
    Redirect to /domains
    ↓
    ✅ User logged in

If invalid:
    ↓
    Return error (generic message)
    ↓
    ❌ Show error in form
```

### 3. Protected Route Access

```
User navigates to /domains
    ↓
App checks ProtectedRoute component
    ↓
ProtectedRoute calls useAuth()
    ↓
Check localStorage for token
    ↓
If token exists:
    ↓
    Render protected component
    ↓
    ✅ Access allowed

If no token:
    ↓
    Redirect to /login
    ↓
    ❌ Access denied
```

### 4. Logout Flow

```
User clicks Logout
    ↓
Call AuthContext.logout()
    ↓
Clear state (user, token)
    ↓
Remove from localStorage:
    • auth_token
    • auth_user
    ↓
Redirect to home
    ↓
Protected routes now show login page
    ↓
✅ Logged out
```

### 5. Token Usage in Protected Requests

```
Frontend makes API call to protected endpoint
    ↓
Get token from localStorage
    ↓
Add Authorization header:
    Authorization: Bearer <token>
    ↓
Backend receives request
    ↓
authMiddleware checks Authorization header
    ↓
Extract token
    ↓
Verify token with JWT_SECRET
    ↓
If valid:
    ↓
    Attach user to req.user
    ↓
    Allow route handler
    ↓
    ✅ Request processed

If invalid:
    ↓
    Return 401 Unauthorized
    ↓
    ❌ Request denied
```

---

## Component Relationships

```
App.jsx
├── AuthProvider (wraps entire app)
│   ├── Navbar
│   │   └── useAuth() → { user, logout, isAuthenticated }
│   │
│   └── Routes
│       ├── /login → Login component
│       │   └── useAuth() → { login }
│       │
│       ├── /signup → Signup component
│       │   └── useAuth() → { register }
│       │
│       ├── /domains → ProtectedRoute
│       │   └── Domains component
│       │
│       ├── /skills/:domain → ProtectedRoute
│       │   └── Skills component
│       │
│       └── ... other protected routes
```

---

## Authentication Flow State Machine

```
                    ┌─────────────┐
                    │  NOT_AUTH   │
                    └──────┬──────┘
                           │
                    ┌──────▼───────┐
        ┌──────────►│ LOADING      │◄────────────┐
        │           └──────┬───────┘             │
        │                  │                     │
   logout()          ┌─────▼──────┐        register()
        │            │  AUTH      │          or
        │            │ (Logged In)│          login()
        │            └─────┬──────┘
        │                  │
        │                  │
        └──────────────────┘
                    │ token
                    │ user
                    │ error state
                    └── stored in localStorage
```

---

## Security Layers

```
┌─────────────────────────────────────────────────────┐
│  Layer 1: Frontend Validation                       │
│  • Email format check                               │
│  • Password length (min 6)                          │
│  • Passwords match                                  │
│  • Required fields check                            │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  Layer 2: Transport Security                        │
│  • HTTPS in production                              │
│  • Bearer token in Authorization header             │
│  • CORS validation                                  │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  Layer 3: Backend Validation                        │
│  • Email format validation                          │
│  • Password length check                            │
│  • Duplicate email prevention                       │
│  • Confirm password matching                        │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  Layer 4: Password Security                         │
│  • Bcrypt hashing (12 salt rounds)                  │
│  • Secure password comparison                       │
│  • Never stored in plain text                       │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  Layer 5: Token Security                            │
│  • JWT signed with JWT_SECRET                       │
│  • Token expiration (7 days)                        │
│  • Verified on protected routes                     │
│  • Bearer token validation                          │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│  Layer 6: Error Handling                            │
│  • Generic error messages (no info leakage)         │
│  • No sensitive data in responses                   │
│  • Proper HTTP status codes                         │
│  • Logging for monitoring                           │
└─────────────────────────────────────────────────────┘
```

---

## Token Lifecycle

```
Creation (Registration/Login)
│
├─► JWT Payload:
│   {
│     id: user._id,
│     role: user.role,
│     iat: issued_at_time,
│     exp: expiration_time (7 days from now)
│   }
│
├─► Signed with JWT_SECRET
│
└─► Sent to frontend
        │
        ├─► Stored in localStorage
        │
        ├─► Sent with every protected request
        │
        └─► Verified by authMiddleware
                │
                ├─► If valid → Allow request
                │
                └─► If invalid/expired → 401 Unauthorized


Expiration
│
└─► Token becomes invalid after 7 days
    └─► User must login again to get new token
```

---

## Request/Response Examples

### Registration Request
```javascript
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

### Registration Response (Success - 201)
```json
{
  "success": true,
  "message": "User registered successfully",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### Protected Route Request
```javascript
GET /api/auth/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json
```

### Error Response (401)
```json
{
  "success": false,
  "message": "Invalid email or password",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

---

## File Dependencies

```
App.jsx
├── imports: AuthProvider (context/AuthContext.jsx)
├── imports: ProtectedRoute (components/ProtectedRoute.jsx)
├── imports: Navbar (components/Navbar.jsx)
└── imports: All page components

context/AuthContext.jsx
├── imports: loginUser, registerUser (api/auth.js)
├── imports: auth utilities (utils/auth.js)
└── exports: AuthProvider, useAuth hook

api/auth.js
├── exports: registerUser, loginUser, getProfile
└── base URL: http://localhost:5000/api/auth

utils/auth.js
├── stores/retrieves: auth_token (localStorage)
├── stores/retrieves: auth_user (localStorage)
└── exports: token and user management functions

components/ProtectedRoute.jsx
├── imports: useAuth (context/AuthContext.jsx)
├── imports: Navigate (react-router-dom)
└── checks: isAuthenticated before rendering

components/Navbar.jsx
├── imports: useAuth (context/AuthContext.jsx)
└── calls: logout() and isAuthenticated

pages/Login.jsx
├── imports: useAuth (context/AuthContext.jsx)
└── calls: login() function

pages/Signup.jsx
├── imports: useAuth (context/AuthContext.jsx)
└── calls: register() function
```

---

## Error Handling Strategy

```
Frontend Level
└─► Input validation → Immediate feedback
    └─► Email format check
    └─► Password validation
    └─► Required fields

API Level
└─► HTTP Status Codes
    ├─► 200/201: Success
    ├─► 400: Bad Request (validation error)
    ├─► 401: Unauthorized (invalid credentials)
    ├─► 409: Conflict (duplicate email)
    └─► 500: Server Error

Backend Level
└─► Error Classes
    ├─► ValidationError (400)
    ├─► AuthenticationError (401)
    ├─► AuthorizationError (403)
    ├─► NotFoundError (404)
    ├─► ConflictError (409)
    └─► GenericError (500)

User Experience
└─► Display in UI
    ├─► Error messages shown above form
    ├─► Non-sensitive error text
    ├─► Loading states during requests
    └─► Success notifications
```

---

## Performance Considerations

1. **Token Storage**: localStorage (synchronous, fast lookup)
2. **API Calls**: Fetch API (native, no external dependencies)
3. **Re-renders**: Minimized with context optimization
4. **Database Queries**: Indexed by email for fast lookup
5. **Password Hashing**: Done server-side only (never client-side)

---

## Future Scaling Points

1. **Refresh Tokens**: Implement rotation strategy
2. **Sessions**: Move to Redis for better performance
3. **API Versioning**: /v1/api/auth/* for backwards compatibility
4. **Rate Limiting**: Prevent brute force attacks
5. **Audit Logging**: Track authentication events
6. **OAuth Integration**: Support third-party logins
7. **Email Verification**: Add confirmation flow
8. **Password Reset**: Secure recovery mechanism
9. **Two-Factor Authentication**: Enhanced security
10. **Admin Dashboard**: User management interface

---

**Architecture Version**: 1.0.0  
**Last Updated**: 2024-01-15  
**Status**: Production Ready ✅
