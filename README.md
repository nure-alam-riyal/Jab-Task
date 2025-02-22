# Job Task  

## 🚀 Introduction  
Job Task is a task management application where users can **add**, **edit**, **delete**, and **reorder** tasks. The project utilizes **Firebase** for authentication and integrates modern UI libraries for a seamless experience.  

## 📜 Table of Contents  
- [Features](#-features)  
- [Installation](#-installation)  
- [Usage](#-usage)  
- [Configuration](#-configuration)  
- [Dependencies](#-dependencies)  
- [Troubleshooting](#-troubleshooting)  
- [Contributing](#-contributing)  
- [License](#-license)  

## ✨ Features  
- ✅ Add new tasks  
- ✏️ Edit existing tasks  
- ❌ Delete tasks  
- 🔄 Reorder tasks using drag-and-drop  
- 🔐 Firebase authentication for secure access  

## 🛠 Installation  
### Prerequisites  
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)  
- [Git](https://git-scm.com/) installed  

### Steps  
1. Clone the repository:  
   ```sh
   git clone https://github.com/yourusername/job-task.git](https://github.com/nure-alam-riyal/Jab-Task.git
   cd job-task
Install dependencies:
sh
Copy
Edit
npm install
Start the development server:
sh
Copy
Edit
npm run dev
🚀 Usage
Sign in using Firebase authentication.
Add tasks using the input field and submit button.
Edit tasks by clicking on the task text.
Delete tasks using the delete icon.
Reorder tasks using drag-and-drop functionality.
⚙️ Configuration
To connect Firebase authentication, create a .env file in the project root and add:

env
Copy
Edit
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
📦 Dependencies
The project uses the following major dependencies:

React (19.0.0) – Core library
Firebase (11.3.1) – Authentication
React Router (7.2.0) – Navigation
TanStack React Query (5.66.9) – Data fetching
Axios (1.7.9) – API requests
Ant Design (5.24.1) – UI components
Tailwind CSS (3.4.17) – Styling
React DnD (16.0.1) – Drag-and-drop functionality
Check package.json for the full list of dependencies.

❓ Troubleshooting
Q: Firebase authentication is not working

Ensure you have added the correct Firebase credentials in the .env file.
Check if Firebase is properly initialized in your code.
Q: Styles are not applying correctly

Verify that Tailwind CSS is properly configured in postcss.config.js and tailwind.config.js.
Run npm run dev again to refresh changes.
🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new feature branch:
sh
Copy
Edit
git checkout -b feature-branch
Make your changes and commit them:
sh
Copy
Edit
git commit -m "Add new feature"
Push to your branch:
sh
Copy
Edit
git push origin feature-branch
Open a Pull Request.
📜 License
This project is licensed under the MIT License. See LICENSE for details.
