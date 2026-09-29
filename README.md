# Privacy Buddy

A production-oriented interactive login experience built with Next.js, React, TypeScript, Tailwind CSS, React Three Fiber, Drei, Motion, Zustand, React Hook Form, and Zod.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demo login

- Email: `demo@privacybuddy.dev`
- Password: `privacy123`

Any other credential pair triggers the validation-error reaction.

## Interaction states

The centralized Zustand interaction store drives a prioritized mascot state resolver:

1. Success
2. Submitting
3. Validation error
4. Password visible / peek
5. Password hidden / privacy cover
6. Email focus and typing
7. Idle cursor tracking

Continuous animation stays inside React Three Fiber's render loop to avoid frame-by-frame React updates. The experience respects `prefers-reduced-motion`, caps device pixel ratio, uses lightweight geometry and lighting, and keeps the login form usable through a static mascot fallback if WebGL is unavailable.

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm build
```
