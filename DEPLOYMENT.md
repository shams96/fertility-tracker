# 🚀 Deployment Options for Fertility Tracker App

## 🌐 Local Development

### Start Backend (Node.js):
```bash
cd backend
npm install
node server.js
```

### Start Frontend (React):
```bash
cd client
npm install
npm start
```

---

## ☁️ Deployment Options

### Option 1: Deploy to Render (Free Tier)

1. Go to [https://render.com](https://render.com)
2. Create a new Web Service for the backend:
   - Select your GitHub repo
   - Build command: `npm install`
   - Start command: `node server.js`
   - Environment: `PORT=5000`
3. Add a static site for your React frontend:
   - Build command: `npm install && npm run build`
   - Publish directory: `client/build`

### Option 2: Railway (Node + React Full Stack)
- Use Railway’s template deployment
- Add frontend and backend as separate services
- Define environment variables from `.env`

---

## 🛡️ Security Notes
- Never commit `.env` to Git
- Enable CORS only for your frontend domain in production
- Set up HTTPS if handling sensitive data

