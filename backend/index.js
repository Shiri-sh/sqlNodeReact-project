const express = require('express');
const app = express();

app.use(express.json());
const todoRouter = require('./routes/todos'); 
const userRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');  
const commentRoutes = require('./routes/comments');
app.use('/api', postsRoutes);
app.use('/api', commentRoutes);
app.use('/api', todoRouter);
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('🚀 Server is running on port ');
});