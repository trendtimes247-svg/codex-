# Project Prometheus RC1 Security Report

## Hardening Implemented
- HTTP-only signed session cookie flow.
- CSRF token added for login POST.
- Rate limits added to login and donation checkout APIs.
- Global CSP, frame, content-type, referrer, DNS prefetch, and permissions headers added.
- Payment checkout remains server-side only.

## Required Before Launch
- Replace seeded user store with persistent identity provider or database adapter.
- Add Stripe webhook verification and persistent donation records.
- Rotate production AUTH_SECRET and CSRF_SECRET.
