const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

//const mongoURI = 'mongodb+srv://emareaun12345:Leftnut007@cluster0.ee5bojf.mongodb.net/?retryWrites=true&w=majority';


const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/projectThree';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
// const blogRoutes = require('./routes/blogRoutes');
// app.use('/api', blogRoutes);

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});



