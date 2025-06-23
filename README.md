# 🎓 Student Portal

A responsive and feature-rich web app to manage academic information, view schedules, download reports, and more — built using **React** and **Tailwind CSS**.

---

## 🔗 Live Demo

👉 [Live Demo](https://student-portal-snehagg88.netlify.app)

## 📂 GitHub Repo

👉 [GitHub Repo](https://github.com/Snehagg88/student-portal)

---

## 🔧 Features Implemented

- 🔐 **Secure Login & Signup**
- 📋 **User Management** – Explore and manage student users with search/sort
- 📊 **Dashboard** – Interactive semester-wise statistics (GPA, Attendance, credits, etc.)
- 📄 **PDF Report Download** – Download semester-wise academic performance
- 📅 **Timetable** – Organized day-wise schedule view
- 🌙 **Light/Dark Mode Toggle**
- 💬 **Testimonial Section** – Hear from other students

---

## 📸 Screenshots

### 🏠 Home Page (Light Mode)
![Home Light](./screenshots/home_light.jpg)

### 🌙 Home Page (Dark Mode)
![Home Dark](./screenshots/home_dark.jpg)

### 📊 Dashboard (Light Mode)
![Dashboard Light](./screenshots/dashboard_light.jpg)

### 📊 Dashboard (Dark Mode)
![Dashboard Dark](./screenshots/dashboard_dark.jpg)

### 👤 Profile Page
![Profile](./screenshots/profile.jpg)

### 👥 Users Page (Light Mode)
![Users Light](./screenshots/users_light.jpg)

### 👥 Users Page (Dark Mode)
![Users Dark](./screenshots/users_dark.jpg)

### 📅 Timetable (Light Mode)
![Schedule Light](./screenshots/schedule_light.jpg)

### 📅 Timetable (Dark Mode)
![Schedule Dark](./screenshots/schedule_dark.jpg)

### 📄 Semester-wise Downloaded Report
![Report](./screenshots/semester_report.jpg)

### 🔐 Login
![Login](./screenshots/login.jpg)

### 📝 Signup
![Signup](./screenshots/signup.jpg)

---

## 🧠 What I Learned & Challenges Faced

- Structured a scalable **multi-page React app** using React Router and Context API for global state management.
- Learned and applied **Tailwind CSS** for utility-first, responsive design — enabling clean layouts and dark mode support.
- Faced challenges aligning responsive **feature cards**, solved using Tailwind's `grid-cols` and `gap` utilities.
- Integrated **`html2pdf.js`** to generate downloadable, formatted PDF reports — overcame issues with rendering and export.
- Understood the importance of proper **routing fallback** using Netlify redirects for single-page applications.
- Gained hands-on experience with **Git**, GitHub version control, and **Netlify deployment pipelines**.

---

## 🚀 Tech Stack

- ⚛️ React
- 🎨 Tailwind CSS
- 🛠️ Create React App (CRA)
- 🌐 Netlify
- 📄 html2pdf.js
- 🧭 React Router
- 🧰 Git & GitHub
- 🧪 ESLint
- ⚙️ Node.js & npm

---

## 📁 Folder Structure

```plaintext
student-portal/
├── build/                  # Production build (auto-generated)
├── node_modules/           # Installed dependencies
├── public/
│   └── _redirects          # For Netlify routing
├── screenshots/            # App screenshots used in README
├── src/
│   ├── components/
│   │   └── Navbar.jsx      # Navigation bar
│   ├── context/
│   │   └── AuthContext.jsx # Auth state using Context API
│   ├── pages/              # Core pages
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── Schedule.jsx
│   │   ├── Signup.jsx
│   │   └── Users.jsx
│   ├── App.css
│   ├── App.js              # Main app file
│   ├── App.test.js
│   ├── index.css
│   ├── index.js            # Entry point
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env                    # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md

---

## 📁 Getting Started

Clone the project and run locally:

```bash
git clone https://github.com/Snehagg88/student-portal.git
cd student-portal
npm install
npm start
```

---

## ▶️ Run the App

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page will reload when you make changes.  
You may also see any lint errors in the console.

