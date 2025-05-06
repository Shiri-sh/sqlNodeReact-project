const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments', require('./routes/comments'));
app.use('/api/todos',  require('./routes/todos'));
app.use('/api/users', require('./routes/users'));

app.listen(3000, () => {
  console.log('🚀 Server is running on port ');
});