# 🎥 ZegoMeet - Video Conferencing Application

A modern video conferencing application built with React, powered by ZEGOCLOUD SDK for real-time communication. Features include video calls, screen sharing, and virtual meetings with multiple participants.

## ✨ Features

- 💻 One-on-One Video Calls
- 👥 Group Video Conferences
- 🖥️ Screen Sharing Capability
- 💬 Real-time Chat During Calls
- 🔐 Secure Room Creation
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design

## 🚀 Tech Stack

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool
- [ZEGOCLOUD SDK](https://www.zegocloud.com/) - Video calling infrastructure
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/) - Navigation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm or yarn
- ZEGOCLOUD account and credentials

## ⚙️ Installation

1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/zegomeet.git
    cd zegomeet
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory
    ```env
    VITE_ZEGOCLOUD_APP_ID=your_app_id
    VITE_ZEGOCLOUD_SERVER_SECRET=your_server_secret
    ```

4. Start the development server
    ```bash
    npm run dev
    ```

## 🛠️ Configuration

1. Sign up for a ZEGOCLOUD account
2. Create a new project in the ZEGOCLOUD Console
3. Copy your App ID and Server Secret
4. Update the `.env` file with your credentials

## 📁 Project Structure
src/ 
├── components/ 
 Reusable UI components
├── pages/
 Route pages
├── contexts/ 
 React contexts 
├── hooks/
Custom hooks
├── services/ 
 API and service functions 
├── utils/ 
 Helper functions
└── App.jsx 
 Main application component
