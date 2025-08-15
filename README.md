# Wiremit - Send Money App

A web app for Zimbabwean parents to send money to their children studying abroad (UK or South Africa).

## Features

- User authentication (signup/login) with Firebase
- Dashboard with three main sections:
  - Send money with fee calculation and FX rates
  - Advertisement carousel
  - Transaction history with pagination
- Mobile responsive design with Tailwind CSS
- TypeScript for type safety
- File-based routing with Next.js

## Technologies Used

- Next.js 13 with App Router
- Firebase Authentication
- Tailwind CSS for styling
- TypeScript
- React Hook Form for form handling
- React Slick for carousel
- React Hot Toast for notifications

## Getting Started

1. Clone the repository
2. Create a file in the root folder called .env.local and paste the code below


NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyA36CbimQNofSy_v_4VqJVlK9kNzD2vUO0"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="wiremit-48b11.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="wiremit-48b11"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="wiremit-48b11.firebasestorage.app"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="154590709281"
NEXT_PUBLIC_FIREBASE_APP_ID="1:154590709281:web:93c2ab604921c0ca408560"


3. Install dependencies:

npm install

4. Start the project

npm run dev