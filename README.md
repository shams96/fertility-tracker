# Fertility Tracker Full-Stack App

This project helps couples track fertility with gender-based logs and shared dashboards.

## 📁 Structure

```
fertility-tracker-fullstack/
├── backend/       # Node.js Express backend
│   ├── server.js
│   └── data/
│       └── logs.json
├── client/        # React frontend (drop your /client folder here)
│   └── src/
│       └── App.js
└── README.md
```

## 🔧 Setup Instructions

### Backend Setup

```bash
cd backend
npm install express cors
node server.js
```

Runs on: http://localhost:5000

### Frontend Setup

```bash
cd client
npm install
npm start
```

Runs on: http://localhost:3000

Ensure your frontend uses `/api/sperm-log` and `/api/cycle-log` for data submission.

