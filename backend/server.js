const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const LOG_PATH = path.join(__dirname, 'data', 'logs.json');

if (!fs.existsSync(LOG_PATH)) {
  fs.writeFileSync(LOG_PATH, JSON.stringify({ spermLogs: [], cycleLogs: [] }, null, 2));
}

const readLogs = () => JSON.parse(fs.readFileSync(LOG_PATH));
const saveLogs = (data) => fs.writeFileSync(LOG_PATH, JSON.stringify(data, null, 2));

app.post('/api/sperm-log', (req, res) => {
  const logs = readLogs();
  logs.spermLogs.push({ ...req.body, timestamp: new Date().toISOString() });
  saveLogs(logs);
  res.status(200).json({ success: true });
});

app.post('/api/cycle-log', (req, res) => {
  const logs = readLogs();
  logs.cycleLogs.push({ ...req.body, timestamp: new Date().toISOString() });
  saveLogs(logs);
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Fertility app backend running on http://localhost:${PORT}`);
});
