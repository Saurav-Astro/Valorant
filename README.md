<div align="left" style="position: relative;">
<img src="https://img.icons8.com/?size=512&id=55494&format=png" align="right" width="30%" style="margin: -20px 0 0 20px;">
<h1>VALOTANT</h1>
<p align="left">
	<em><code>❯ An immersive web experience that brings the agents of Valorant to life. Explore every agent in a stunning neon glass UI, complete with dynamic animations and interactive effects designed to capture the high-tech, stylish world of the game.</code></em>
</p>
<p align="left">
	<img src="https://img.shields.io/github/license/Astro-Saurav/Valotant?style=for-the-badge&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Astro-Saurav/Valotant?style=for-the-badge&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Astro-Saurav/Valotant?style=for-the-badge&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Astro-Saurav/Valotant?style=for-the-badge&color=0080ff" alt="repo-language-count">
</p>
<p align="left">Built with the tools and technologies:</p>
<p align="left">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=for-the-badge&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=for-the-badge&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Zod-3E67B1.svg?style=for-the-badge&logo=Zod&logoColor=white" alt="Zod">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/datefns-770C56.svg?style=for-the-badge&logo=date-fns&logoColor=white" alt="datefns">
</p>
</div>
<br clear="right">

## 🔗 Quick Links

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

<code>❯ This project is a high-fidelity, interactive showcase designed as a tribute to the iconic agents of Valorant. Built with a modern tech stack including React, TypeScript, and Framer Motion, it offers a seamless single-page experience.
From the moment you land on the page, you're greeted with a dynamic, auto-playing hero section that cycles through different agents, changing the entire page's theme in real-time to match the featured character.
Users can seamlessly scroll down to explore a detailed agent overview with an interactive 3D card effect, or jump to a complete grid of all agents. Clicking on any agent reveals a modal with their full backstory and ability kit. The entire experience is enhanced with a custom, theme-aware cursor and subtle visual effects, all wrapped in a sleek, responsive design that looks great on any device.
</code>

---

## 👾 Features

<code>❯ Dynamic Hero Carousel: The landing page features a full-screen, auto-playing carousel that cycles through Valorant agents, dynamically theming the entire page in real-time.
Interactive 3D Agent Cards: Agent profiles tilt and respond to mouse movement with a subtle 3D parallax effect, creating an engaging, tactile feel.
Complete Agent Database: Browse a comprehensive grid of all playable agents. Clicking an agent opens a beautifully animated modal with their detailed biography and a full list of abilities.
Themed Custom Cursor: A custom-rendered cursor follows your mouse, changing color to match the currently featured agent’s theme, enhancing the immersive experience.
Fluid Animations & Transitions: Built with Framer Motion, the entire interface is full of seamless page transitions, staggered animations, and responsive interactions that make the UI feel alive.
Auto-Hiding Header: The navigation bar smoothly hides when you scroll down and reappears when you scroll up, maximizing screen real estate for content.
Dark/Light Theme Toggle: A sleek, animated toggle allows users to instantly switch between a polished dark and light theme.
True Single-Page Experience: Smooth, anchor-based scrolling provides a fast, seamless journey through all content sections without page reloads, all powered by React Router.</code>

---

## 📁 Project Structure

```sh
└── Valotant/
    ├── LICENSE
    ├── README.md
    ├── bun.lockb
    ├── components.json
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── data
    │   ├── favicon.ico
    │   ├── placeholder.svg
    │   └── robots.txt
    ├── src
    │   ├── App.css
    │   ├── App.tsx
    │   ├── components
    │   ├── data
    │   ├── hooks
    │   ├── index.css
    │   ├── lib
    │   ├── main.tsx
    │   ├── pages
    │   └── vite-env.d.ts
    ├── tailwind.config.ts
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vercel.json
    └── vite.config.ts
```
---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with Valotant, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


### ⚙️ Installation

Install Valotant using one of the following methods:

**Build from source:**

1. Clone the Valotant repository:
```sh
❯ git clone https://github.com/Astro-Saurav/Valotant
```

2. Navigate to the project directory:
```sh
❯ cd Valotant
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run Valotant using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm run dev
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

<details open>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Astro-Saurav/Valotant
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Astro-Saurav/Valotant/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Astro-Saurav/Valotant">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [MIT-LICENSE](https://github.com/Astro-Saurav/Valotant?tab=MIT-1-ov-file).

---
