# StudyHub Authentication Backend

Production-ready authentication backend for the StudyHub React application.

## Features

✅ User registration with email validation  
✅ User login with JWT authentication  
✅ Password hashing with bcryptjs  
✅ Protected routes with JWT middleware  
✅ Role-based access control (user/admin)  
✅ MongoDB Atlas integration  
✅ Error handling and validation  
✅ Last login tracking  
✅ User account status tracking  

---

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

---

## Project Structure

```
studyhub-auth-backend/
├── config/
│   └── db.js                      # MongoDB connection
├── controllers/
│   └── authController.js          # Auth logic (register, login, profile)
├── middleware/
│   ├── authMiddleware.js          # JWT verification & role checking
│   └── errorMiddleware.js         # Global error handler
├── models/
│   └── User.js                    # User schema with bcrypt hashing
├── routes/
│   └── authRoutes.js              # Auth endpoints
├── utils/
│   ├── jwt.js                     # Token generation & verification
│   ├── errors.js                  # Custom error classes
│   └── response.js                # Standardized API responses
├── server.js                      # Express app & server startup
├── package.json                   # Dependencies
├── .env.example                   # Environment template
├── .gitignore                     # Git ignore rules
└── README.md                      # Documentation
```

---

## Installation & Setup

### 1. Prerequisites

- Node.js >= 18.0.0
- MongoDB Atlas account (free tier available)
- npm or yarn

### 2. Clone/Download and Install

```bash
cd studyhub-auth-backend
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/studyhub?retryWrites=true&w=majority
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_environment
JWT_EXPIRE=7d
```

### 4. Start the Server

**Development mode** (with auto-reload):

```bash
npm run dev
```

**Production mode**:

```bash
npm start
```

Server will start on `http://localhost:5000`

---

## API Endpoints

### Base URL

```
http://localhost:5000/api/auth
```

### 1. Register User

**POST** `/register`

Register a new user account.

**Request:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure123",
  "confirmPassword": "secure123"
}
```

**Response (201 Created):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "timestamp": "2024-04-27T10:30:00.000Z",
  "data": {
    "user": {
      "id": "66abcd1234ef5678901ghijk",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Validation:**

- Name: required, 2-100 characters
- Email: required, valid email format
- Password: required, minimum 6 characters
- Confirm Password: must match password

---

### 2. Login User

**POST** `/login`

Authenticate user and receive JWT token.

**Request:**

```json
{
  "email": "john@example.com",
  "password": "secure123"
}
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Login successful",
  "timestamp": "2024-04-27T10:30:00.000Z",
  "data": {
    "user": {
      "id": "66abcd1234ef5678901ghijk",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

---

### 3. Get User Profile (Protected)

**GET** `/profile`

Retrieve authenticated user's profile information.

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response (200 OK):**

```json
{
  "success": true,
  "message": "Profile retrieved successfully",
  "timestamp": "2024-04-27T10:30:00.000Z",
  "data": {
    "user": {
      "id": "66abcd1234ef5678901ghijk",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "isActive": true,
      "lastLogin": "2024-04-27T10:30:00.000Z",
      "createdAt": "2024-04-27T10:15:00.000Z",
      "updatedAt": "2024-04-27T10:30:00.000Z"
    }
  }
}
```

---

## Error Responses

### 400 Bad Request

```json
{
  "success": false,
  "message": "Email and password are required",
  "timestamp": "2024-04-27T10:30:00.000Z"
}
```

### 401 Unauthorized

```json
{
  "success": false,
  "message": "Invalid token",
  "timestamp": "2024-04-27T10:30:00.000Z"
}
```

### 409 Conflict

```json
{
  "success": false,
  "message": "Email already registered",
  "timestamp": "2024-04-27T10:30:00.000Z"
}
```

### 500 Internal Server Error

```json
{
  "success": false,
  "message": "Internal Server Error",
  "timestamp": "2024-04-27T10:30:00.000Z"
}
```

---

## Using JWT Tokens

### In React Frontend

Store token in localStorage/sessionStorage:

```javascript
// After login
const token = response.data.data.token;
localStorage.setItem('authToken', token);

// In API requests
const headers = {
  Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  'Content-Type': 'application/json',
};

// Fetch profile
fetch('http://localhost:5000/api/auth/profile', {
  headers: headers,
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Token Validation

Tokens expire based on `JWT_EXPIRE` setting (default: 7 days).

To refresh, user must login again.

---

## Making a User Admin

### Via MongoDB Atlas UI:

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Select your cluster → Collections
3. Find the `studyhub` database → `users` collection
4. Find the user document
5. Click edit (pencil icon)
6. Change `"role": "user"` to `"role": "admin"`
7. Click Update

### Via MongoDB Shell:

```bash
mongosh "mongodb+srv://<username>:<password>@cluster.mongodb.net/studyhub"
```

Then run:

```javascript
db.users.updateOne(
  { email: "user@example.com" },
  { $set: { role: "admin" } }
);
```

---

## Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `development` or `production` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret for signing JWT | Long random string |
| `JWT_EXPIRE` | Token expiration | `7d`, `24h`, etc. |

---

## MongoDB Setup

### 1. Create MongoDB Atlas Account

1. Go to [mongodb.com/cloud](https://www.mongodb.com/cloud)
2. Sign up for free
3. Create a new project
4. Create a cluster (free tier available)

### 2. Get Connection String

1. Click "Connect" on your cluster
2. Choose "Drivers" → "Node.js"
3. Copy the connection string
4. Replace `<password>` and `<username>` with your credentials
5. Change `/test` to `/studyhub` (database name)

### 3. IP Whitelist

Add your IP address in MongoDB Atlas security settings:

- Click "Network Access"
- Click "Add IP Address"
- Add your current IP or 0.0.0.0 (for development only)

---

## Features Implemented

### User Authentication

- ✅ Email/password registration
- ✅ Email uniqueness validation
- ✅ Password strength validation (minimum 6 chars)
- ✅ Password confirmation
- ✅ Secure password hashing (bcryptjs with salt)

### JWT Implementation

- ✅ Token generation on login/register
- ✅ Token verification middleware
- ✅ Automatic token expiration
- ✅ Payload includes user ID and role

### Role-Based Access

- ✅ User role assignment
- ✅ Admin role support
- ✅ Role extraction from JWT

### User Features

- ✅ Last login tracking
- ✅ Account activation status
- ✅ Profile retrieval
- ✅ Timestamps (createdAt, updatedAt)

---

## Testing the API

### Using cURL

**Register:**

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "secure123",
    "confirmPassword": "secure123"
  }'
```

**Login:**

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "secure123"
  }'
```

**Get Profile:**

```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Using Postman

1. Import the collection or create requests manually
2. Set method to POST/GET
3. Add URL: `http://localhost:5000/api/auth/register`
4. Add headers: `Content-Type: application/json`
5. Add body as JSON
6. Send request

---

## Security Best Practices

✅ Passwords hashed with bcryptjs (salt rounds: 12)  
✅ JWT tokens with expiration  
✅ Environment variables for secrets  
✅ Input validation on all endpoints  
✅ CORS enabled for frontend integration  
✅ Error messages don't leak sensitive info  
✅ Password removed from JSON responses  
✅ Admin role separation  

---

## Development vs Production

### Development

```env
NODE_ENV=development
JWT_SECRET=any-random-string-is-fine
```

### Production

```env
NODE_ENV=production
JWT_SECRET=very-long-random-string-use-cryptography
MONGO_URI=use-ssl-connection
```

---

## Troubleshooting

### MongoDB Connection Failed

- Check `MONGO_URI` is correct
- Verify IP address in MongoDB Atlas whitelist
- Check username/password credentials

### JWT Errors

- Ensure token is correctly passed in header
- Check token hasn't expired
- Verify `JWT_SECRET` matches in .env

### CORS Issues

- Frontend URL should match CORS origin
- Use `CLIENT_URL` environment variable
- Or allow all origins with `"*"`

---

## License

MIT License - Feel free to use this in your projects!

---

## Support

For issues or questions:

1. Check error messages carefully
2. Review API documentation above
3. Check MongoDB Atlas connection
4. Verify environment variables
5. Check browser console for frontend errors

---

**Happy Coding! 🚀**
