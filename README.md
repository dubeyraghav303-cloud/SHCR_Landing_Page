# SHCR (Self-Healing Crash Runtime) - Landing Page

Welcome to the official landing page for **SHCR**, the macOS runtime that intercepts crashes and heals applications live.

## 🔷 Project Overview

**SHCR** is a low-level macOS runtime that intercepts crashes (SIGSEGV, SIGFPE, bad instructions) using Mach exceptions, classifies faults using an AI pipeline, applies live binary patches, and resumes execution — **without source code changes**.

This repository contains the source code for the landing page built for the hackathon demonstration.

## 🚀 Live Demo & Download

**Download the SHCR Installer (.dmg):**
[Download v1.0 Installer](https://github.com/dubeyraghav303-cloud/SHCR/releases/download/v1.0/SHCR_Installer.dmg)

> **Note:** This is a hackathon build and is not notarized by Apple. You may need to Right Click > Open to run the installer.

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 💻 Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/dubeyraghav303-cloud/SHCR_Landing_Page.git
   cd SHCR_Landing_Page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📦 Deployment

This project is configured for deployment on **Netlify** or **Vercel**.

### Build Command
```bash
npm run build
```

### Output Directory
```bash
dist
```

## ⚠️ Hackathon Disclaimer

This landing page and the associated SHCR software are proof-of-concept prototypes developed for a hackathon. The software modifies running process memory and is intended for educational/research purposes only. use at your own risk.
