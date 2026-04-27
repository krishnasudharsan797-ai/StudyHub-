# API Testing Guide

Quick reference for testing StudyHub Authentication API

## Health Check

```bash
curl http://localhost:5000/health
```

## 1. Register a New User

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "email": "jane@example.com",
    "password": "Password123",
    "confirmPassword": "Password123"
  }'
```

**Expected Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "...",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## 2. Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "password": "Password123"
  }'
```

**Save the token from response:**

```bash
TOKEN="your_token_here"
```

## 3. Get Profile (Protected Route)

```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer $TOKEN"
```

## Error Testing

### Invalid Password

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jane@example.com",
    "password": "wrongpassword"
  }'
```

### Missing Email

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "password": "Pass123",
    "confirmPassword": "Pass123"
  }'
```

### Invalid Token

```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer invalid_token"
```

## Testing with Postman

### Import Collection

1. Open Postman
2. Create new collection: "StudyHub Auth"
3. Add these requests:

#### Request 1: Register

- Method: POST
- URL: `http://localhost:5000/api/auth/register`
- Body (raw JSON):
  ```json
  {
    "name": "Test User",
    "email": "test@example.com",
    "password": "Test123",
    "confirmPassword": "Test123"
  }
  ```

#### Request 2: Login

- Method: POST
- URL: `http://localhost:5000/api/auth/login`
- Body (raw JSON):
  ```json
  {
    "email": "test@example.com",
    "password": "Test123"
  }
  ```

#### Request 3: Get Profile

- Method: GET
- URL: `http://localhost:5000/api/auth/profile`
- Headers:
  - Key: `Authorization`
  - Value: `Bearer <token_from_login>`

## Response Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success (Login, Get Profile) |
| 201 | Created (Register) |
| 400 | Bad Request (Validation Error) |
| 401 | Unauthorized (Invalid Token) |
| 409 | Conflict (Email Already Exists) |
| 500 | Server Error |

## Common Issues

**Issue:** CORS Error  
**Solution:** Check frontend URL matches `CLIENT_URL` in .env

**Issue:** Token Expired  
**Solution:** Login again to get new token

**Issue:** MongoDB Connection Error  
**Solution:** Check MONGO_URI in .env, verify IP whitelist

---

**Ready to test? Start the server with `npm run dev`** 🚀
