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

* **Pages**:

  * **Home Page**:
    Displays a small curated list of popular attractions from across Germany.

  * **Attractions Page**:
    Displays a full list of attractions from various German cities with search functionality.

* **Components (So far)**:

  * **Navbar**: Responsive navigation with links (more links to be added as project grows).
  * **MainSection**: Hero or introduction section for the Home page.
  * **AttractionsList**: Lists all available attractions (or filtered results based on search).
  * **Attraction**: Individual attraction card/component.

* **Layout**:

  * A **MainLayout** wraps all pages, providing consistent layout and navigation across routes.

---

## 🔍 Features (Current)

* ✅ Routing between Home and Attractions pages
* ✅ Responsive UI styled with Tailwind CSS
* ✅ Local JSON backend (via JSON Server) for dynamic data
* ✅ Search bar on Attractions page to filter attractions by title
* ✅ React Hooks used for state and data fetching
* ✅ Future-ready modular structure for adding more pages and components

---

## 📌 Installation & Running Locally

1. **Clone the repo:**

```bash
git clone https://github.com/your-username/local-explorer.git
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

Then visit: [http://localhost:5173](http://localhost:5173)

---

## 🎯 Roadmap / Planned Features

* Adding more German cities and attractions
* Filters by city or category
* Details page for each attraction
* User reviews / ratings section
* Possibly add map integration
* Deployment for public demo

---

## ✅ Honest Status:

This is an **actively developing personal learning project**, with core focus on:

* **Front-end React skills**
* **State management**
* **Routing**
* **Mock API integration**
* **Tailwind styling**

Not yet production-ready.
