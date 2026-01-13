<div id="top"></div>

<div align="left">

# React Practice — Project Management App

Concepts : 
- Components
- Props
- State
- Styling React Apps
- Refs & Portals

A small React practice project (Udemy “React Course”) to create projects, view details, and manage tasks per project.

<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=react&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=javascript&logoColor=black" alt="JavaScript">

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run the App](#run)
- [Project Structure](#project-structure)
- [License](#license)

---

## Overview

This app helps you manage multiple projects and their tasks:

- Create projects (title, description, due date)
- Select a project from the sidebar and view details
- Add tasks to the selected project
- Clear tasks and delete projects

Notes:

- Data is stored **in memory** (React state) — refreshing the page resets everything to a hard coded list of projects.
- Missing inputs show a validation **Modal** rendered via a React Portal (`#modal-root`).

[![Live Demo](https://img.shields.io/badge/Click%20Here%20to%20Try-805AD5?style=for-the-badge&logo=google-chrome)](https://project-management-app-two-khaki.vercel.app/)

---

## Features

- **Create projects** with title, description, and due date
- **Project sidebar** to list and select projects
- **Project details view** with formatted due date + description
- **Delete projects** from the details view
- **Task management per project** (add tasks + clear tasks)
- **Input validation modal** for empty fields (React Portal via `#modal-root`)
- **Clean component structure** (`ProjectSideBar`, `NewProject`, `SelectedProject`, `Tasks`, `Modal`)

--- 

## 🚀Getting Started

### Prerequisites

- **Node.js** 
- **npm** (comes with Node)

### Installation

1. **Clone the repository:**

    ```sh
     git clone https://github.com/AAshry10/Project-Management-App.git
    ```

2. **Navigate to the project directory (If not already navigated):**

    ```sh
     cd Project-Management-App
    ```

3. **Install the dependencies:**

   ```sh
    npm install
   ```

### Run

Run the project with:

   ```sh
    npm run dev
   ```

**Navigate to your [localhost:5173](https://localhost:5173)**

--- 

## 🏗️Project Structure

```sh
└── Project-Management-App/
    ├── public/
    │   └── logo.png
    ├── src/
    │   ├── assets/
    │   │   └── no-projects.png
    │   ├── components/
    │   │   ├── Button.jsx
    │   │   ├── Input.jsx
    │   │   ├── Modal.jsx
    │   │   ├── NewProject.jsx
    │   │   ├── NewTask.jsx
    │   │   ├── NoProjectSelected.jsx
    │   │   ├── ProjectSideBar.jsx
    │   │   ├── SelectedProject.jsx
    │   │   └── Tasks.jsx
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    └── vite.config.js
```

---

## 🧾License

[MIT License](https://choosealicense.com/licenses). For more details, refer to the [LICENSE](./LICENSE) file.

---

💖 *Built with love by [Ahmed ELashry](https://github.com/AAshry10)*  

---

