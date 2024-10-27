# 📚 Digital Store

An innovative e-commerce platform built to facilitate the buying and selling of academic materials among students. Featuring separate dashboards for users and admins, the platform aims to streamline the process of listing, purchasing, and managing academic resources.

## 🎯 Project Overview

This project was developed with a focus on providing a user-friendly interface and efficient management for student-driven academic sales. By leveraging Firebase and React, it delivers a responsive experience for both buyers and sellers.

- **Target Audience**: College and university students looking to exchange study materials.
- **Key Objective**: To offer a simple and secure online marketplace for academic resources.

## 🚀 Features

- **User Dashboard**:
  - Browse a categorized list of academic materials.
  - View product details, add items to the cart, and proceed to checkout.
  - Manage account settings and order history.

- **Admin Dashboard**:
  - **CRUD Functionality**: Admins can **Create**, **Read**, **Update**, and **Delete** products, maintaining control over the platform’s offerings.
  - Access to detailed product views and user information.
  - Ability to moderate listings and ensure quality standards.

- **User Authentication**: 
  - Uses Firebase for secure login and role-based access to dashboards.
  
- **Real-Time Updates**:
  - Data updates instantly, providing the latest listings and ensuring the platform remains up-to-date.

- **Responsive Design**: Mobile-friendly and accessible across devices, ensuring seamless usability.

## 🛠️ Technology Stack

- **Frontend**: [React](https://reactjs.org/) - for building dynamic user interfaces and responsive pages.
- **Backend & Database**: [Firebase](https://firebase.google.com/) - managing authentication, data storage, and real-time updates.
- **State Management**: [Redux](https://redux.js.org/) (optional, if applicable) - efficient state handling for scalable applications.
- **UI/UX**: CSS and component libraries for clean, user-friendly design.

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
│   ├── 📁 pages
│   │   ├── 📄 LoginPage.js
│   │   ├── 📄 SignupPage.js
│   │   └── ...
│   ├── 📄 App.js
│   ├── 📄 index.js
│   └── ...
└── 📄 README.md
