# CRUD-OPERATED-APP

A full-featured CRUD (Create, Read, Update, Delete) application built using the **MEN stack** (MongoDB, Express, Node.js). This app allows users to create, view, update, and delete chat entries.

---

## 🚀 Features

- Add new chat entries
- View all chats
- Update existing chats
- Delete chats (with optional confirmation logic)
- Server-side rendering using EJS
- MongoDB for persistent storage

---

## 📦 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Server framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM to interact with MongoDB
- **EJS** – Templating engine for rendering HTML
- **Bootstrap** – For basic styling (optional)

---

## 📁 Project Structure

```bash
project/
├── models/
│   └── Chat.js              # Mongoose model
├── views/
│   ├── chats/
│   │   ├── index.ejs        # View all chats
│   │   ├── new.ejs          # Add new chat
│   │   ├── edit.ejs         # Edit existing chat
├── public/                  # Static files (CSS, JS, images)
├── index.js                 # Main application file
├── init.js                  # Initialisation of data in DB for test
├── package.json             # NPM dependencies and scripts
└── README.md                # This file

