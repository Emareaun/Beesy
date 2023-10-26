import React from 'react';

const BlogDescription = ({ blog }) => {
  return (
    <div className="blog-description">
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <img src={blog.imageUrl} alt="Blog" />

      {/* comments,info */}
    </div>
  );
};

export default BlogDescription;
