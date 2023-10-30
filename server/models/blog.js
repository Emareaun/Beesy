const mongoose = require('mongoose');

const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes'); 

app.use('/api', blogRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
