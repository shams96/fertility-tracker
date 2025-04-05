# Fertility Tracker Backend (Node.js + Express)

This backend handles sperm and cycle logs from the fertility app frontend.

## 📁 Structure
```
backend/
├── server.js
├── data/
│   └── logs.json
```

## 🔧 Setup & Run
1. Install dependencies:
```bash
npm install express cors
```

2. Start server:
```bash
node server.js
```

Backend runs on: http://localhost:5000

## 📡 Endpoints

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| POST   | `/api/sperm-log`    | Log sperm health data  |
| POST   | `/api/cycle-log`    | Log cycle tracking     |
