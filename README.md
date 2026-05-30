# Areteus Company Website

This is the company website for Areteus, a business specializing in technology and innovative solutions.

## Deployment

The website is deployed and can be viewed live at:

[https://areteus-company.web.app/]([https://areteus-company.web.app](https://project-37274da8-813d-4f1e-8b9.web.app/)/)

## Repository Structure 


- **`index.html`**: The main entry point of the application.
- **`styles.css`**: Custom CSS for styling and animations.
- **`script.js`**: JavaScript for interactive features and functionality.


## Server Overview

The server configures CORS for allowed origins, parses JSON payloads, and logs the running port. Environment variables are used for Stripe and Resend API keys.

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/subscribe` | `POST` | Subscribe to newsletter (Resend) |
| `/api/contact` | `POST` | Contact form submission |
| `/api/send-order-confirmation` | `POST` | Send order confirmation email (Stripe) |
| `/api/send-referral-emails` | `POST` | Send referral emails to friends |
| `/api/create-payment-intent` | `POST` | Create Stripe payment intent |
