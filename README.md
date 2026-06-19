# RoboMinds Workshop Experience

A premium, deployment-ready workshop registration system engineered to maximize conversion and demonstrate rigorous full-stack implementation.

## Overview

This project is a React-based frontend coupled with an Express/MongoDB backend, designed for a 4-week AI & Robotics Summer Workshop. The focus of this implementation is on flawless UX, strict runtime type safety, and production-ready code structure, eliminating typical "bootcamp" anti-patterns like dead code, loose typing, and hardcoded variables.

## Tech Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Framer Motion
- **Forms**: React Hook Form + Zod (Strict schema validation)
- **Backend**: Express, TypeScript, Zod (Validation Middleware)
- **Database**: MongoDB (Mongoose)
- **Tooling**: ESLint, PostCSS, Vite Env Variables

## Architecture & Engineering Decisions

1. **Decoupled Architecture**: Frontend and backend are strictly decoupled, enabling independent scaling and distinct deployment pipelines (e.g., Vercel for Frontend, Render for Backend). 
2. **Environment Configuration**: Hardcoded URLs have been entirely removed. The application relies exclusively on `VITE_API_URL` to route requests, falling back to localhost during local development only.
3. **End-to-End Type Safety & Validation**: Both the frontend forms and backend controllers share identical Zod schemas. The backend uses a centralized `validate.ts` middleware to parse and sanitize incoming payloads before hitting business logic, preventing NoSQL injection and malformed inserts.
4. **Unified Error Handling**: The Express application funnels all uncaught exceptions through `errorHandler.ts`, guaranteeing the client always receives a standardized `{ success: false, message: string, errors: any }` signature.

## Local Setup Instructions

Ensure you have Node.js (v18+) and MongoDB installed locally.

### 1. Environment Configuration
Create the required `.env` files based on the provided examples.
```bash
# In the frontend directory
cp .env.example .env

# In the backend directory
cp .env.example .env
```

### 2. Run Backend
```bash
cd backend
npm install
npm run dev
```

### 3. Run Frontend
```bash
cd frontend
npm install
npm run dev
```

## Future Improvements & Trade-offs
- **Authentication**: User authentication was purposefully removed from this iteration to reduce friction in the registration funnel. A robust system (like Clerk or Auth0) should be integrated only *after* lead capture, rather than blocking the initial conversion.
- **Rate Limiting**: `express-rate-limit` should be integrated into the `/api/enquiry` and `/api/registrations` endpoints to prevent automated spam prior to exposing the API publicly.
- **E2E Testing**: Introduce Playwright for critical path testing to guarantee the registration flow remains intact across future component refactors.
