<div id="top"></div>

<div align="left">

<<<<<<< HEAD
# React Essentials Practice — Investment Calculator

A small React practice project (Udemy “React Essentials”) that calculates and displays yearly investment growth based on user inputs.

<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=react&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=vite&logoColor=white" alt="Vite">
=======
# React Essentials Practice — Project Management App

A small React practice project (Udemy “React Essentials”) to create projects, view details, and manage tasks per project.

<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=react&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
>>>>>>> 332e07a (Readme Update)
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=javascript&logoColor=black" alt="JavaScript">

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
<<<<<<< HEAD
  - [Run the App](#Run)
- [Project Structure](#project-structure)
- [License](#License)
=======
  - [Run the App](#run)
- [Project Structure](#project-structure)
- [License](#license)
>>>>>>> 332e07a (Readme Update)

---

## Overview

<<<<<<< HEAD
This app calculates investment results over time using:

- Initial investment
- Yearly contribution
- Expected return (%)
- Duration (years)

It then renders a results table showing the yearly breakdown.

[![Live Demo](https://img.shields.io/badge/Click%20Here%20to%20Try-805AD5?style=for-the-badge&logo=google-chrome)](https://investment-calculator-one-weld.vercel.app/)
=======
This app lets you:

- Create and select projects (title, description, due date)
- View project details
- Add and remove tasks for the selected project

Notes:

- Data is stored **in memory** (React state) — refreshing the page resets everything.
- Form validation uses a **Modal** (React Portal) when inputs are missing.
>>>>>>> 332e07a (Readme Update)

---

## Features

<<<<<<< HEAD
- **Live calculations** as you change inputs
- **Year-by-year results table**
- **Clean component structure** (Header / Inputs / Results)
- **Utility-based calculation logic** (`src/util/investment.js`)
=======
- **Create projects** with title / description / due date
- **Select and view projects** from a sidebar
- **Delete a project** from the details view
- **Add tasks per project** and **clear tasks**
- **Validation modal** for empty inputs (uses `createPortal` into `#modal-root`)
>>>>>>> 332e07a (Readme Update)

---

## 🚀Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node)

### Installation

1. **Clone the repository:**

<<<<<<< HEAD
    ```sh
     git clone https://github.com/AAshry10/Investment-Calculator.git
    ```

2. **Navigate to the project directory (If not already navigated):**

    ```sh
     cd Investment-Calculator
    ```

3. **Install the dependencies:**

   ```sh
    npm install
   ```
=======
```sh
git clone https://github.com/<your-username>/<your-repo>.git
```

2. **Navigate to the project directory:**

```sh
cd "<your-repo>"
```

3. **Install the dependencies:**

```sh
npm install
```
>>>>>>> 332e07a (Readme Update)

### Run

Run the project with:

<<<<<<< HEAD
   ```sh
    npm run dev
   ```

**Navigate to your [localhost:5173](https://localhost:5173)**

--- 

## 🏗️Prooject Structure

```sh
└── Udemy-React-Course-Practice-Project-1/
    ├── public/
    ├── src/
    │   ├── Components/
    │   │   ├── Header/
    │   │   ├── InputFields/
    │   │   └── Results/
    │   ├── util/
    │   │   └── investment.js
    │   ├── App.jsx
    │   └── index.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```
=======
```sh
npm run dev
```

Then open the local URL printed in your terminal (usually `http://localhost:5173`).

---

## 🏗️Project Structure

```sh
Project Managment App/
  public/
  src/
    assets/
    components/
      Button.jsx
      Input.jsx
      Modal.jsx
      NewProject.jsx
      NewTask.jsx
      NoProjectSelected.jsx
      ProjectSideBar.jsx
      SelectedProject.jsx
      Tasks.jsx
    App.jsx
    main.jsx
    index.css
  index.html
  package.json
  tailwind.config.js
  vite.config.js
```

>>>>>>> 332e07a (Readme Update)
---

## 🧾License

<<<<<<< HEAD
[MIT License](https://choosealicense.com/licenses). For more details, refer to the [LICENSE](./LICENSE) file.

---

💖 *Built with love by [Ahmed ELashry](https://github.com/AAshry10)*  

---

=======
No license file is included yet. If you want, I can add an MIT `LICENSE` file.

---

*Built for practice as part of the Udemy React course.*
>>>>>>> 332e07a (Readme Update)

