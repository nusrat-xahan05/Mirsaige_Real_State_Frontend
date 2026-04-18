# 🏡 Real Estate Blog Frontend

## 📌 Project Overview

This is a modern, scalable real estate blog frontend built using Next.js. It allows users to browse property-related blog posts, view detailed content, and create new posts with image uploads. The application is designed with performance, user experience, and real-world architecture in mind.

---

## 🚀 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod + @hookform/resolvers
- Sonner (Toast notifications)
- Lucide React (Icons)
- use-debounce
- Fetch API (data fetching)
- Strapi (Headless CMS - Backend)
- PostgreSQL (Database)

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone "https://github.com/nusrat-xahan05/Mirsaige_Real_State_Frontend"
cd Mirsaige_Real_State_Frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env.local`

```
NEXT_PUBLIC_API_URL=https://mirsaige-real-state-backend.onrender.com/api
```

### 4. Run the development server

```
npm run dev
```

### 5. Open in browser

```
http://localhost:3000
```

---

## 🌐 Live Links

- 🔗 Frontend Live: https://mirsaige-real-state-frontend.vercel.app
- 🔗 Backend Live: https://mirsaige-real-state-backend.onrender.com
- 🔗 Backend Repo: https://github.com/nusrat-xahan05/Mirsaige_Real_State_Backend

---

## 🧠 Short Explanation (Important)

### ✅ What approach did I take?

I chose Next.js over traditional React due to its built-in support for server-side rendering, improved SEO capabilities, and optimized performance through the App Router. It allows a more production-ready architecture compared to a standard client-side React setup.

For the backend, I used Strapi as a headless CMS because it provides a flexible and scalable content structure with minimal setup. PostgreSQL was selected as the database for its reliability and scalability in real-world applications.

---

### ⚠️ What challenges did I face?

The initial challenge was working with Strapi, as I had no prior experience with headless CMS. However, after exploring its features, it became easier to manage content and APIs efficiently.

During deployment, I faced CORS issues when connecting the frontend (Vercel) with the backend (Render). This required proper middleware configuration.

Another challenge was memory limitations on Render's free tier, as Strapi can be resource-intensive. Additionally, handling media uploads with ephemeral storage required integrating Cloudinary to ensure persistence.

---

### 🚀 What would I improve with more time?

With more time, I would implement Docker to ensure a consistent development and production environment.

I would also introduce a proper authentication and role-based access system to restrict post creation to authorized users, making the application more secure and scalable.

---

## ✨ Features Implemented

- **Home Page**  
  Displays a list of real estate blog posts fetched from Strapi with search, tabs, and pagination.

- **Single Post Page**  
  Dynamic routing to view full details of a specific post.

- **Create Post Page**  
  A fully functional form allowing users to create new posts with image uploads.

- **Loading & Error Handling**  
  Includes loading states, error boundaries, and fallback UI for better user experience.

---

## 📌 Notes

This project follows a real-world full-stack architecture and demonstrates integration between a headless CMS and a modern frontend framework.
