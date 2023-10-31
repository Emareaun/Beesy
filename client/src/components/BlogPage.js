import React, { useState, useEffect } from 'react';
import BlogDescription from './BlogDescription'; // BlogDescription component

const BlogPage = () => {
  
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
    
  ];
  const [blogs, setBlogs] = useState(initialBlogs);

  useEffect(() => {

    //  fetchBlogsFromBackend().then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blog-page">
      <h2>Blog Page</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogDescription key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;