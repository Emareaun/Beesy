const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');


router.post('/blogs', async (req, res) => {
  const newBlog = new Blog(req.body);
  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
