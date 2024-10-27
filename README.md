# 📚 Digital Store

An e-commerce platform designed specifically for students to buy and sell academic materials. With separate dashboards for users and admins, the website ensures a streamlined experience for both buyers and sellers.

## 🚀 Features

- **User Dashboard**: 
  - Browse academic materials listed by other students.
  - Add items to a shopping cart and proceed to checkout.
  - Manage personal account details and view order history.

- **Admin Dashboard**: 
  - **CRUD Operations**: Admins can **Create**, **Read**, **Update**, and **Delete** products from the catalog.
  - View and manage all user accounts.
  - Oversee product listings, ensuring the platform is organized and up-to-date.

- **Authentication**: Secure login mechanism for users and admins.
- **User Interface**: Intuitive and user-friendly interface with smooth navigation between different sections.

## 🛠️ Technology Stack

- **Frontend**: [React](https://reactjs.org/) - for a dynamic, responsive UI.
- **Backend & Database**: [Firebase](https://firebase.google.com/) - handling authentication and database storage.
- **State Management**: [Redux](https://redux.js.org/) (optional, if applicable) for managing the app's state efficiently.

## 📂 Project Structure

```plaintext
📦 project-root
├── 📁 public
├── 📁 src
│   ├── 📁 components
│   │   ├── 📄 UserDashboard.js
│   │   ├── 📄 AdminDashboard.js
│   │   └── ...
│   ├── 📁 firebase
│   │   └── 📄 config.js
│   ├── 📄 App.js
│   ├── 📄 index.js
│   └── ...
└── 📄 README.md
