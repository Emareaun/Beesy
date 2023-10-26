import React, { useState, useEffect } from 'react';
import BlogDescription from './BlogDescription'; // Import the BlogDescription component

const BlogPage = () => {
  // Sample data for demonstration
  const initialBlogs = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'Description for Blog 1',
      imageUrl: 'image1.jpg',
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'Description for Blog 2',
      imageUrl: 'image2.jpg',
    },
    // Add blog objects
  ];