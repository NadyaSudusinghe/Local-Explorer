# Local Explorer 🗺️

A React-based web application for exploring popular attractions across German cities. This is an **ongoing personal project**, aimed at showcasing front-end skills with React, Tailwind CSS, and working with mock backend data.


## 🚀 Tech Stack

* **React** (with Vite for fast builds)
* **React Router DOM** (for routing between pages)
* **Tailwind CSS** (for styling and responsive design)
* **React Icons** (for UI icons)
* **JSON Server** (for simulating a backend with local JSON data)
* **React Hooks**: `useState`, `useEffect` (for state management and side effects)

---

## 📄 Project Structure

### 🗂️ Pages

- **Home Page**  
  Displays a small curated list of popular attractions from across Germany.

- **Attractions Page**  
  Lists all available attractions from various cities, with a search bar and clickable details.

- **Add Attraction Page**  
  A form that lets users add new attractions dynamically to the list.

- **Attraction Details Page**  
  Displays detailed info for a selected attraction. Includes edit and delete options.

- **Edit Attraction Page**  
  Allows editing existing attraction data and saves changes via mock API.

---

### 🧩 Components

- **Navbar**: Responsive navigation bar
- **MainSection**: Hero or introduction section on the Home page
- **AttractionsList**: Renders a list of attraction cards (with search support)
- **Attraction**: Individual card for each attraction
- **AttractionDetails**: Detailed view of a selected attraction
- **Form Components**: Reusable components for adding/editing attractions

---

### ⚙️ Layout

- **MainLayout** wraps all routes and maintains consistent structure/navigation across the app.

---

## 🔍 Features (Current)

- ✅ Routing between multiple pages using React Router
- ✅ Responsive UI with Tailwind CSS
- ✅ Local JSON backend using JSON Server
- ✅ Search functionality on the Attractions page
- ✅ Add Attraction form (dynamically adds to the list)
- ✅ Attraction Details Page with:
  - Edit attraction (with full form and redirect)
  - Delete attraction (with browser confirmation)
- ✅ Modular, scalable file structure
- ✅ Hooks-based architecture for clean state and effect handling

---

## 📌 Installation & Running Locally

1. **Clone the repo:**

```bash
git clone https://github.com/NadyaSudusinghe/Local-Explorer.git
cd local-explorer
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the JSON server (fake backend):**

```bash
npx json-server --watch data/attractions.json --port 5000
```

4. **Start the React app:**

```bash
npm run dev
```

Then open: http://localhost:5173

---

## 🎯 Roadmap / Planned Features

* Adding more German cities and attractions
* Filters by city or category
* Improved form validation and user feedback
* User reviews / ratings section
* Loading and error handling states
* Authentication for protected routes
* Deployment for public demo

---

## ✅ Project Status:

This is an **actively developed personal project**, focused on:

* **Front-end development with React**
* **Local API simulation and CRUD operations**
* **Component-based architecture**
* **State management**
* **Routing**
* **Tailwind styling**

Not yet production-ready.
