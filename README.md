# PASIYA-discover

# PASIYA Discover (Local Development)

## Prerequisites
- Node.js 18+
- MongoDB running locally or a MongoDB Atlas URI

## Backend
cd backend
cp .env.example .env (edit values)
npm install
npm run seed   # creates admin user + sample lesson
npm run dev

## Frontend
cd frontend
cp .env.example .env
npm install
npm start

Frontend will run at http://localhost:3000 and backend at http://localhost:5000 by default.

Admin credentials (seed): admin@pasiya.local / admin123
