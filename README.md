# My Portfolio

This is my personal portfolio website built using **Next.js 14**, **Tailwind CSS 3** and **Typescript 5**. The website showcases my skills, experiences and testimonials as a developer. It is designed to be fully responsive, fast, and modern.


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Features

- Built with **Next.js 14** for fast and SEO-friendly rendering
- Styled with **Tailwind CSS 3**, a utility-first CSS framework
- Fully responsive layout for various devices and screen sizes
- Modular and reusable components for easier maintenance

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (v18.17 or later) – [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** – comes with Node.js or can be installed separately

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/antoineludeau/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

If you're using npm:
  ```bash
  npm install
  ```

If you're using yarn:
  ```bash
  yarn install
  ```

### Running the Development Server

Once all dependencies are installed, you can start the development server:
  ```bash
  npm run dev
  # or
  yarn dev
  ```

Open http://localhost:3000 in your browser to see the running application.

The page will automatically reload if you make edits. You will also see any lint errors in the console.

## Folder structure

This folder uses :
- the **app** router
- the Atomic Design pattern

  ```bash
  my-nextjs-portfolio/
  ├── app/                    # Next.js 'app' directory for routing and pages
  │   ├── layout.tsx          # Root layout component
  │   ├── page.tsx            # Homepage component (default route)
  │   └── globals.css         # Global CSS (can import Tailwind CSS here)
  ├── components/             # Reusable UI components
  │   ├── atoms               # Atoms components, the most basic building blocks of the UI
  │   ├── molecules           # Molecules components, groups of atoms bonded together
  │   └── organisms           # Organisms components, groups of molecules and/or atoms
  ├── public/                 # Static assets (images, fonts, etc.)
  ├── .gitignore              # Git ignore file
  ├── LICENSE.md              # License file
  ├── next.config.mjs         # Next.js configuration file
  ├── postcss.config.mjs      # PostCSS configuration for Tailwind CSS
  ├── tailwind.config.ts      # Tailwind CSS configuration
  ├── tsconfig.json           # TypeScript configuration file
  ├── package.json            # Project dependencies and scripts
  └── README.md               # Documentation for the project
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.