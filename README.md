# 🌟 Amarnath's Portfolio

> A modern, accessible portfolio showcasing my frontend development skills and projects

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

![Portfolio Preview](./docs/images/portfolio-preview.png)
<!-- TODO: Add portfolio-preview.png to /docs/images/ -->

**[View Live Demo]([INSERT YOUR DEPLOYED URL])** | **[Download Resume](./resume.pdf)**

---

## 📑 Table of Contents
- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Key Components](#-key-components)
- [Performance](#-performance)
- [Accessibility](#-accessibility)
- [Browser Support](#-browser-support)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 👋 About

This portfolio represents my journey as a frontend developer, built to showcase my technical skills and real-world projects to potential employers. It features a modern, responsive design with a focus on professional aesthetics and smooth user experiences.

I built this portfolio to provide recruiters and hiring managers with a central hub to explore my work, evaluate my coding standards, and verify my ability to ship production-ready React applications.

---

## ✨ Features

- 📱 **Mobile-First Design**: Fully responsive layout that looks great on everything from small smartphones to large desktop monitors.
- 🌙 **Dark/Light Mode**: Seamless theme switching with system preference detection and local storage persistence.
- ♿ **Accessibility Focused**: Built with semantic HTML and WCAG AA guidelines in mind for an inclusive experience.
- 🚀 **Performance Optimized**: Leverages Vite's fast build cycles, lazy-loading, and efficient asset management for lightning-fast load times.
- 📧 **Contact Integration**: Functional contact form with real-time validation and professional feedback loops.
- 📁 **Project Case Studies**: Detailed project cards highlighting technical focus, status, and key learning outcomes.

---

## 🛠 Tech Stack

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | React 18 | Component-based architecture for high reusability and state management. |
| **Styling** | Tailwind CSS | Utility-first approach for rapid, consistent styling and design token management. |
| **Build Tool** | Vite | Provides an extremely fast development environment and optimized production bundles. |
| **Icons** | Material Symbols | Clean, recognizable iconography that scales perfectly across themes. |
| **Deploy** | Netlify / Vercel | Automatic CI/CD pipelines for fast and reliable deployments. |

---

## 📸 Screenshots

### Dark Mode Preview
![Dark Mode](./docs/images/dark-preview.png)
*Professional, high-contrast dark mode for reduced eye strain and modern aesthetics.*

### Mobile Responsive Preview
![Mobile View](./docs/images/mobile-preview.png)
*Optimized layouts for mobile-first accessibility.*

### Projects Section Preview
![Projects Section](./docs/images/projects-preview.png)
*Detailed case studies showcasing technical competency.*

> **Note:** Add these screenshots to the `/docs/images/` folder to display them here.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amar-295/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # OR using yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### Environment Variables
For contact form functionality, create a `.env` file in the root directory:
```env
# Example configuration for Formspree or EmailJS
VITE_CONTACT_SERVICE_ID=your_id_here
```

---

## 📂 Project Structure

```text
src/
├── assets/             # Images, SVGs, and static assets
├── components/         # Reusable UI components (Button, Card, Logo, etc.)
├── data/               # Centralized data files (projects, skills, contact)
├── pages/              # Main section components (Hero, About, Projects)
├── context/            # React Context providers (Theme, etc.)
├── App.jsx             # Main application entry point
└── index.css           # Global styles and Tailwind directives
```

---

## 🧩 Key Components

- **`Button.jsx`**: A versatile, multi-variant button component supporting `primary` and `outline` styles with theme-aware transitions.
- **`ProjectCard.jsx`**: A sophisticated card component for showcasing projects, including technical focus, status tags, and learning outcomes.
- **`Logo.jsx`**: A hand-drawn, high-detail SVG brand identity optimized for both light and dark mode visibility.
- **`Hero.jsx`**: Features a premium `CodeWindow` visual and high-impact typography to establish brand identity immediately.

---

## 📈 Performance

I prioritize performance to ensure a smooth user experience and better SEO.

- **Lighthouse Score**: 90+ across all categories (Performance, Accessibility, Best Practices, SEO).
- **Techniques**:
  - Image optimization and lazy loading.
  - Component-level code splitting.
  - Minified production bundles via Vite.
  - Efficient CSS purging using Tailwind.

---

## ♿ Accessibility

This portfolio is built to be inclusive and accessible to all users.

- **Compliance**: Targeting WCAG 2.1 Level AA standards.
- **Features**:
  - Semantic HTML5 elements for screen reader support.
  - Full keyboard navigation support (`tabindex`, `focus-visible`).
  - High-contrast color ratios for readability in both modes.
  - Descriptive `alt` text for all meaningful images.
- **Testing**: Validated using **axe DevTools** and Chrome Lighthouse audits.

---

## 🌐 Browser Support

- **Chrome**: (Latest 2 versions)
- **Firefox**: (Latest 2 versions)
- **Safari**: (Latest 2 versions)
- **Edge**: (Latest 2 versions)
- **Mobile**: Fully compatible with iOS Safari and Android Chrome.

---

## 🗺 Roadmap / Future Improvements

- [ ] **Blog Integration**: Add a Markdown-based technical blog to share learning insights.
- [ ] **Framer Motion**: Integrate advanced micro-interactions and page transitions.
- [ ] **i18n Support**: Implement multi-language support (English/Hindi).
- [ ] **Testing Suite**: Add Vitest for component unit testing and coverage reports.

---

## 🤝 Contributing

This is a personal portfolio repository. While it's not currently open for large-scale contributions, I welcome suggestions and bug reports! Feel free to open an **Issue** if you spot something that could be improved.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

I am currently **open to opportunities** for Frontend Developer internship or junior roles. Let's connect!

- **Email**: [YOUR EMAIL]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [@amar-295](https://github.com/amar-295)
- **Portfolio**: [[INSERT YOUR DEPLOYED URL]]([INSERT YOUR DEPLOYED URL])

---

Best regards,  
**Amarnath**
