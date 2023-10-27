const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/your-database-name'; // mongo uri

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
