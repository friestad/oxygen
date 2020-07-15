const express = require('express');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.json({
    Message: 'Hello',
  });
});

app.listen(PORT, HOST);
console.log(`Listening on http://${HOST}:${PORT}`);