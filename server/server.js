const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/Beesy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api', require('./routes/blogRoutes')); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
