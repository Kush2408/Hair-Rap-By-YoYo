# 🤖 **AI-Powered Service Booking Platform**

A **frontend application** for booking services with an **AI assistant** to guide users.  
Users can browse services, book appointments, view their bookings, and interact with an AI assistant for help.

---

## 📑 **Table of Contents**

- [✨ Features](#-features)  
- [🛠 System Overview](#-system-overview)  
- [🖥 Pages & Components](#-pages--components)  
- [🤖 AI Integration](#-ai-integration)  
- [💻 Technical Stack](#-technical-stack)  
- [🗂 App Flow](#-app-flow)  
- [⚡ Setup Instructions](#-setup-instructions)  
- [📸 Screenshots / Demo](#-screenshots--demo)  
- [📝 Notes](#-notes)  

---

## ✨ **Features**

- 🔍 *Browse services* with search and filters  
- 📄 *View service details* and available slots  
- 🗓 *Book appointments* with confirmation feedback  
- 📌 *View upcoming bookings*  
- 🤖 *Interact with an AI assistant* for guidance  
- 📱 *Responsive design* with clean UI and smooth state management  

---

## 🛠 **System Overview**

### 1. **Service Browsing**
- Explore available services with **name, duration, and price**  

### 2. **Booking Flow**
- Select a service, pick a date and time, and **confirm booking**  

### 3. **My Bookings**
- See all **upcoming bookings** and optionally cancel them  

### 4. **AI Assistant**
- Chat interface helps users with **booking-related queries** and recommendations  

---

## 🖥 **Pages & Components**

### 1️⃣ **Home / Services Page**
- Lists all available services  
- Search and filter by **category, price, or duration**  
- Shows **service name, duration, and price**  

### 2️⃣ **Service Details Page**
- Detailed service info  
- Select booking date  
- Display available time slots from API  
- **“Book Now”** button  

### 3️⃣ **Booking Flow**
- Select date & time  
- Confirm booking  
- Show **success or error feedback**  

### 4️⃣ **My Bookings Page**
- List all upcoming bookings  
- Show **booking status**  
- Optionally **cancel bookings**  

### 5️⃣ **AI Assistant**
- Floating chat widget or dedicated page  
- Answer booking-related queries, e.g.:  
  - *“Book an Appointment”*  
  - *“Explore Services”*  
  - *“My Bookings?”*  
- Maintains **chat session history**  
- Shows **loading state** while AI responds  

---

## 🤖 **AI Integration**

- **API Used:** OpenAI GPT (or Gemini API)  
- **Integration Approach:**  
  - AI API called **directly from frontend**  
  - Chat maintains **session history**  
  - **Loading states** and **error handling** implemented  

> ⚠️ **Note:** Free OpenAI API key has reached quota. You need a **Pro subscription key** for continued AI usage.

**Optional AI Enhancements:**  
- Suggest services based on **user interaction**  
- Context-aware **AI responses**  

---

## 💻 **Technical Stack**

- **Frontend:** React + Vite (TypeScript) 
- **Styling:** Tailwind CSS 
- **API Integration:** fetch  
- **State Management:** React useState / Context API  
- **Responsive Layout:** Mobile-first design  
- **Bonus Features:** Animations, transitions, dark mode toggle  

---

## 🗂 **App Flow**

1. **Browse Services:** Users start at the home page and filter/search services  
2. **View Service:** Clicking a service shows details  
3. **Book Appointment:** Select all the details → Confirm booking → **View Bookings**  
4. **View Bookings:** Users see upcoming bookings and optionally cancel  
5. **AI Assistance:** Floating chat allows users to ask questions anytime  

**Flow Diagram (simplified):**  
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



---

## ⚡ **Setup Instructions**

**Clone the repository:**  

```bash
git clone https://github.com/Kush2408/Hair-Rap-By-YoYo.git
cd Hair-Rap-By-YoYo


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

📸 Screenshots / Demo
<img width="1916" height="870" alt="Screenshot 2026-02-08 174737" src="https://github.com/user-attachments/assets/581f103f-89d6-4bb6-9df3-dcb30c8ccb5f" />
<img width="1919" height="841" alt="Screenshot 2026-02-08 174855" src="https://github.com/user-attachments/assets/0fb05724-5d0e-4389-bfcf-578d856e718b" />
<img width="1916" height="838" alt="Screenshot 2026-02-08 174950" src="https://github.com/user-attachments/assets/35670a62-533f-46f2-9e9f-7cb54ee79ed2" />
<img width="1909" height="964" alt="Screenshot 2026-02-08 174532" src="https://github.com/user-attachments/assets/be5f5f39-db22-4480-bd8f-3cd0e83896f1" />
<img width="1917" height="864" alt="Screenshot 2026-02-08 174546" src="https://github.com/user-attachments/assets/f164e6a0-bd10-4f31-94c6-3972f280d22f" />
<img width="1919" height="866" alt="Screenshot 2026-02-08 174602" src="https://github.com/user-attachments/assets/c58966a3-f248-45fd-b4c6-e825464d7636" />
<img width="1916" height="869" alt="Screenshot 2026-02-08 174615" src="https://github.com/user-attachments/assets/a37036ab-c685-489b-8005-2c8055535465" />
<img width="1917" height="869" alt="Screenshot 2026-02-08 174637" src="https://github.com/user-attachments/assets/ecd24ced-b9a9-40ca-8cc1-7e4b9e15eed0" />
<img width="1919" height="866" alt="Screenshot 2026-02-08 174704" src="https://github.com/user-attachments/assets/6d113dd1-7270-47e9-80da-bdca6c1bf6f0" />
<img width="1917" height="858" alt="Screenshot 2026-02-08 174725" src="https://github.com/user-attachments/assets/82845046-16d9-4b93-85aa-7003fbb35865" />



📝 Notes

AI assistant works best with a valid Pro API key

All API responses are handled with proper loading and error states

Booking data can be integrated with a backend later; currently uses mock API or dummy data
