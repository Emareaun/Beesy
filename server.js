const mongoose = require('mongoose'); 

const mongoURI = 'mongodb://localhost:27017/your-database-name'; // mongo uri
const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogRoutes'); 

app.use('/api', blogRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
