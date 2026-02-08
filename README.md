AI-Powered Service Booking Platform

A frontend application for booking services with an AI assistant to guide users. Users can browse services, book appointments, view their bookings, and interact with an AI assistant for help.

Table of Contents

Features

System Overview

Pages & Components

AI Integration

Technical Stack

App Flow

Setup Instructions

Screenshots / Demo

Notes

Features

Browse services with search and filters

View service details and available slots

Book appointments with confirmation feedback

View upcoming bookings

Interact with an AI assistant for guidance

Responsive design, clean UI, and smooth state management

System Overview

Service Browsing – Users can explore available services with details like name, duration, and price.

Booking Flow – Select a service, pick a date and time, and confirm booking.

My Bookings – Users can see all upcoming bookings and optionally cancel them.

AI Assistant – A chat interface helps users with booking-related queries and recommendations.

Pages & Components
1. Home / Services Page

Lists all available services

Search and filter by category, price, or duration

Shows service name, duration, and price

2. Service Details Page

Detailed service info

Select booking date

Display available time slots from API

“Book Now” button

3. Booking Flow

Select date & time

Confirm booking

Show success or error feedback

4. My Bookings Page

List all upcoming bookings

Show booking status

Optionally cancel bookings

5. AI Assistant

Floating chat widget or dedicated page

Answer booking-related queries:

“Which service should I book?”

“What slots are available today?”

“How do I cancel my booking?”

Maintains chat session history

Shows loading state while AI responds

AI Integration

API Used: OpenAI GPT (or Gemini API)

Integration Approach:

AI API called directly from frontend

Chat maintains session history

Loading states and error handling implemented

Note:

Free OpenAI API key has reached quota

You need a Pro subscription key for continued AI usage

Optional AI Enhancements:

Suggest services based on user interaction

Context-aware AI responses

Technical Stack

Frontend: React / Next.js (component-based structure)

Styling: Tailwind CSS / Custom CSS

API Integration: fetch or axios

State Management: React useState / Context API

Responsive Layout and mobile-first design

Bonus Features: Animations, transitions, dark mode toggle

App Flow

Browse Services: Users start at the home page and filter/search services.

View Service: Clicking a service shows details and available time slots.

Book Appointment: Select date & time → Confirm booking → Feedback displayed.

View Bookings: Users see upcoming bookings and optionally cancel.

AI Assistance: Floating chat allows users to ask questions anytime.

Flow Diagram (simplified):

Home / Services Page
        │
        ▼
Service Details Page
        │
        ▼
Booking Flow → Confirmation
        │
        ▼
My Bookings Page
        │
        ▼
AI Assistant (floating chat)

Setup Instructions

Clone the repository:

git clone 



Install dependencies:

npm install
# or
yarn install


Set up environment variables:

NEXT_PUBLIC_OPENAI_API_KEY=your_pro_openai_api_key


⚠️ Important: Free OpenAI API quota is exhausted. You need a Pro key to use the AI assistant.

Start the development server:

npm run dev
# or
yarn dev


Open http://localhost:3000
 in your browser.

Screenshots / Demo


Notes

AI assistant works best with a valid Pro API key

All API responses are handled with proper loading and error states

Booking data can be integrated with a backend later; currently uses mock API or dummy data
