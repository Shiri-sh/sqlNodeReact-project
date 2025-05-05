const express = require('express');
const app = express();
const db = require('../database/db'); // מבצע את ההתחברות ל-MySQL

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.listen(3000, () => {
  console.log('🚀 Server is running on port 3000');
});
