const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.get('/status', (req, res) => {
  const uptime = process.uptime();
  res.json({
    status: 'OK',
    uptime_seconds: uptime,
    hostname: os.hostname()
  });
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Server started, waiting connections...');
});

server.on('error', (err) => {
  console.error('Error on server:', err);
});

process.on('uncaughtException', (err) => {
  console.error('Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Rejected on promise:', reason);
});
