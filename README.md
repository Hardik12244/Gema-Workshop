# RoboMinds Workshop Experience

A premium, high-conversion workshop landing page and registration system designed to maximize engagement and demonstrate engineering rigor.

## Architecture & Technical Decisions

The architecture follows a strict separation of concerns, decoupling the presentation layer from the persistence layer to ensure scalability and maintainability.

### Frontend 
- **React + Vite + TypeScript**: Chosen for rapid hot-module replacement and strict type safety across components.
- **Framer Motion**: Utilized extensively for scroll-linked animations, micro-interactions, and premium layout transitions to create a "Kidrove-inspired" aesthetic without sacrificing performance.
- **Tailwind CSS**: For utility-first styling. Custom design tokens (fonts, colors, border radii) are injected into the Tailwind config to enforce a consistent design system.
- **React Hook Form + Zod**: The optimal combination for accessible, performant, and strictly typed form validation. Validation schemas are defined securely and mirror backend requirements.

### Backend 
- **Express + TypeScript**: Provides a lightweight but robust RESTful API.
- **Mongoose / MongoDB**: Selected for flexible schema design, allowing rapid iteration on registration and enquiry models.
- **Centralized Validation Middleware**: Implemented a global Zod validation layer (`middleware/validate.ts`) that guarantees runtime type-safety for incoming payloads before they hit the controllers.
- **Global Error Handling**: Uncaught exceptions and validation failures are funnelled through a global error handler (`middleware/errorHandler.ts`), guaranteeing standard `{ success, message, errors }` responses across the API.

## Trade-offs and Simplifications

During the implementation phase, several architectural simplifications were made to prioritize the core assignment requirements:

1. **Authentication Removal**: The original implementation included Clerk Authentication. This was aggressively removed to reduce friction in the registration funnel. A landing page's primary goal is conversion; forcing auth prior to capturing lead data is a known anti-pattern.
2. **Simulated Payments**: To maintain a pure engineering focus on layout, UI/UX, and data flow, third-party payment gateway logic (Razorpay/Stripe) was stripped out. The system cleanly simulates a transaction and successfully persists the record to MongoDB.

## Running Locally

Requirements: `Node.js >= 18`, `MongoDB`

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## Future Improvements
- **Rate Limiting & DDoS Protection**: Add `express-rate-limit` to the `/api/enquiry` and `/api/registrations` endpoints to prevent automated spam.
- **E2E Testing**: Introduce Playwright for critical path testing (verifying the registration funnel from landing page to dashboard).
- **Edge Caching**: Deploy the frontend via Vercel Edge Network for near-zero latency delivery of static assets.
