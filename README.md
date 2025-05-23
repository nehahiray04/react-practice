# Initial Commit
# 👥 User Directory

A modern and responsive **User Directory** built using **React (Vite + TypeScript)**. This app fetches a list of users from a public API and displays them in a searchable table. Clicking a user opens a popup with detailed information.

---

## 🚀 Features

- 🔍 **Search users** by name or email
- 📃 **List view** of all users in a table
- 👤 **Detailed popup** with full user info
- 🎯 **Context API + useReducer** for global state management
- 🎨 **Tailwind CSS** for styling
- ⚡ Powered by **Vite** for fast development and build times
- ✅ **TypeScript** for type safety and better dev experience

---

## 🧱 Project Structure
<!-- user-directory/
├── components/
│ ├── UserList.tsx
│ ├── UserTable.tsx
│ ├── SearchBar.tsx
│ └── UserDetail.tsx
├── context/
│ └── UserContext.tsx
├── models/
│ └── User.ts
├── App.tsx
├── index.tsx
├── main.css
└── vite.config.ts -->


---

## 📦 Installation

```bash
# Step 1: Create the project using Vite
npm create vite@latest user-directory -- --template react-ts
cd user-directory

# Step 2: Install dependencies
npm install

# Step 3: Install Tailwind CSS
npm install tailwindcss @tailwindcss/vite
npx tailwindcss init -p

# Step 4: Configure Tailwind (tailwind.config.js)
# Add inside 'content':
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

# Step 5: Add Tailwind to src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# Step 6: Start the development server
npm run dev
