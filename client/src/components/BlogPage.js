import React from 'react';

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

  return (
    <div className="blog-page">
      <h2>Blog Page</h2>
      <div className="blog-list">
        {initialBlogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <img src={blog.imageUrl} alt="Blog" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;