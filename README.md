# My Portfolio 

This is my personal portfolio website built using **Next.js 15**, **React 19**, **Tailwind CSS 3** and **Typescript 5**. The website showcases my skills, experiences and testimonials as a developer. It is designed to be fully responsive, fast, and modern.

Check it out here : https://www.antoineludeau.com/

<p align="center">
  <img width="1467" alt="Capture d’écran 2024-12-09 à 19 35 13" src="https://github.com/user-attachments/assets/f709b194-895a-4908-bd56-cb63cb182dbe">
</p>


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Using Docker](#using-docker)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Features

- Built with **Next.js 15** for fast and SEO-friendly rendering
- Styled with **Tailwind CSS 3**, a utility-first CSS framework
- Developed using **TypeScript 5** for robust type checking and maintainability
- Fully responsive layout for various devices and screen sizes
- Modular and reusable components for easier maintenance
- Dockerized for quick local deployment

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js** (v18.18.0 or later) – [Download Node.js](https://nodejs.org/)
- **npm** – comes with Node.js or can be installed separately

If you want to deploy using docker and docker compose : 
- **Docker** (v20.10 or later)
- **Docker Compose** (v2.0 or later)
The easiest and recommended way to get Docker and Docker Compose is to install [Docker Desktop](https://www.docker.com/products/docker-desktop/). It includes Docker Compose along with Docker Engine and Docker CLI which are Compose prerequisites.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/antoineludeau/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

Using npm:
  ```bash
  npm install
  ```

This step is not needed for a docker deployment

### Running the Development Server

Once all dependencies are installed, you can start the development server:
  ```bash
  npm run dev
  ```

Open http://localhost:3000 in your browser to see the running application.

This step is not needed for a docker deployment

### Using Docker

You can also run the application locally using Docker for a containerized environment.

Simply run the command : 
  ```bash
  docker compose up --build -d
  ```

Open http://localhost:3000 in your browser to view the application.

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
  ├── .dockerignore           # Docker ignore file
  ├── .eslintrc.json          # ESLint configuration file
  ├── .gitignore              # Git ignore file
  ├── compose.yml             # Docker Compose configuration
  ├── Dockerfile              # Docker configuration for production
  ├── Dockerfile.dev          # Docker configuration for development
  ├── LICENSE.md              # License file
  ├── next.config.mjs         # Next.js configuration file
  ├── package-lock.json       # Lock file for npm dependencies
  ├── package.json            # Project dependencies and scripts
  ├── postcss.config.mjs      # PostCSS configuration for Tailwind CSS
  ├── README.md               # Documentation for the project
  ├── tailwind.config.ts      # Tailwind CSS configuration
  └── tsconfig.json           # TypeScript configuration file
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.