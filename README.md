# Task-manager-backend


A simple RESTful API for managing tasks using **Node.js** and **Express**. Tasks are stored in a local JSON file (`tasks.json`), and the API supports full CRUD functionality.


## 🔧 Features

- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Add a new task
- `PUT /api/tasks/:id` - Mark a task as completed
- `DELETE /api/tasks/:id` - Delete a task
- `GET /` - Health check route ("API is running" page)

---

## 📁 Project Structure

Tsk-mnager-backend/
├── tasks.json
├── server.js
├── package.json
└── README.md


---

## Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) installed (v14+ recommended)
- npm (usually installed with Node.js)

### 2. Clone the repository or download the code

```bash
git clone https://github.com/your-username/Task-manager-backend.git
cd Task-manager-backend
