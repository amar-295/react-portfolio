# ⚡ Amarnath's Portfolio

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

> **A modern, high-performance frontend developer portfolio built to showcase technical proficiency and creative design.**

---

## 🚀 Live Demo

### [👉 View Live Portfolio](https://react-portfolio-lilac-nine.vercel.app/)

---

## 📖 Table of Contents

- [About](#-about)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Performance & Accessibility](#-performance-&-accessibility)
- [Contact](#-contact)

---

## 👋 About

This portfolio is a representation of my journey and skills as a **Frontend Developer**. It is designed not just to display my projects, but to demonstrate my ability to build **clean, responsive, and accessible** web applications.

The site features a polished **Dark/Light mode**, smooth transitions, and a component-driven architecture that emphasizes maintainability and scalability.

---

## ✨ Key Features

- **🎨 Dynamic Theme System**: Robust Light/Dark mode with system preference detection and local storage persistence.
- **📱 Fully Responsive**: "Mobile-First" design approach ensuring perfect rendering on all devices from phones to 4K monitors.
- **⚡ Blazing Fast**: Powered by **Vite** for instant server starts and optimized production builds.
- **♿ Accessible**: Built with semantic HTML5 and WCAG guidelines (keyboard navigation, proper contrast, aria attributes).
- **🛠️ Modern Stack**: Utilizes **React 19** and **Tailwind CSS v4** for cutting-edge development capabilities.
- **📨 Functional Contact Form**: Integrated with **Formspree** for reliable email delivery without a backend.
- **📁 Detailed Project Showcases**: Rich project cards with status tags, links, and learning outcomes.

---

## 🛠 Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Core** | [React 19](https://react.dev/) | Latest library features for building interactive UIs. |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework for rapid UI development. |
| **Build Tool** | [Vite 7](https://vitejs.dev/) | Next-generation frontend tooling. |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | Popular icon packs (Fa, Fi, Si) included as components. |
| **Forms** | [@formspree/react](https://formspree.io/) | Serverless form handling. |
| **Linting** | ESLint + Prettier | Code quality and formatting consistency. |

---

## 📂 Project Structure

A quick look at the top-level directory structure:

```bash
react-portfolio/
├── public/              # Static assets (favicon, manifest, etc.)
├── src/
│   ├── assets/          # Images, logos, and global static files
│   ├── components/      # Reusable UI components (Buttons, Cards, Navbar)
│   ├── context/         # React Context (ThemeContext, etc.)
│   ├── data/            # Static data files (projects.js, skills.jsx)
│   ├── pages/           # Page sections (Hero, About, Contact)
│   ├── App.jsx          # Main application layout
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles & Tailwind imports
├── .eslintrc.cjs        # Linting configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amar-295/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view it in the browser.

### Building for Production

To create a production-ready build:
```bash
npm run build
```

---

## 📨 Environment Variables

To make the Contact Form functional, you need to set up **Formspree**.

1. Create a `.env` file in the root directory.
2. Add your Formspree Service ID:

```env
VITE_CONTACT_SERVICE_ID=your_service_id_here
```

---

## 📈 Performance & Accessibility

This project is optimized for high performance and accessibility:
- **Lighthouse Score**: Targeting 90+ on all metrics.
- **Semantic HTML**: Using `<nav>`, `<main>`, `<section>`, and `<footer>` for better SEO and screen readers.
- **Lazy Loading**: Assets are optimized and loaded efficiently.

---

## 📬 Contact

I am open to **Frontend Developer** roles and interesting freelance projects.

- **Email**: [612amar@gmail.com](mailto:612amar@gmail.com)
- **GitHub**: [github.com/amar-295](https://github.com/amar-295)
- **LinkedIn**: [Search "Amarnath"](https://linkedin.com)

---

### [⬆️ Back to Top](#-amarnaths-portfolio)
