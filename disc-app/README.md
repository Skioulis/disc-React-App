# Disc React App

A React + Vite application for exploring and managing songs/albums with a clean UI. This project uses Vite for a fast dev experience and includes components like a Navbar, Search Bar, Dropdown, and a Song List.

## Features
- Fast React app bootstrapped with Vite
- Modular components (Navbar, Search, Dropdown, SongList)
- CSS modules per component for scoped styling

## Project Structure
The main app source code is located in `disc-app/src` with components under `src/components`:
- `components/navbar` – top navigation bar with search and dropdown
- `components/SongList` – list and styling for songs
- `App.jsx` – app entry composition

## Prerequisites
- Git (optional, to clone the repo)
- Node.js (LTS recommended)
- A package manager: npm (bundled with Node.js), or yarn/pnpm if you prefer

### How to install Node.js
- Recommended: Install the current LTS version from the official site: https://nodejs.org/
- Windows/macOS: Download the installer, run it, and follow the prompts. Ensure that “Add to PATH” is enabled (it is by default on Windows).
- Verify install in a new terminal:
  - `node -v` should print a version like `v18.x` or `v20.x`
  - `npm -v` should print the npm version

## Getting Started (Run Locally)
These steps assume your project root is `F:/WebProjects/disc-React-App`.

1. Open a terminal in the project root
2. Navigate into the app folder:
   - `cd disc-app`
3. Install dependencies (only needed the first time or when deps change):
   - `npm install`
4. Start the development server:
   - `npm run dev`
5. Open the app in your browser:
   - Vite will print a local URL like `http://localhost:5173/`. Press `o` in the terminal to open automatically.

## Useful Scripts
Run these from the `disc-app` directory:
- `npm run dev` – Start the local dev server with HMR
- `npm run build` – Create a production build
- `npm run preview` – Preview the production build locally

## Troubleshooting
- If `npm run dev` fails with a port in use error, either close the other app using that port or run: `npm run dev -- --port 5174`
- If you changed Node versions, delete `node_modules` and run `npm install` again
- On Windows PowerShell, if scripts are blocked, run PowerShell as Administrator and execute: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`

## License
This codebase is provided as-is under your project’s chosen license. Update this section if you need to specify a license.
