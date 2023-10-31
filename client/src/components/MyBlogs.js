import React, { useState, useEffect } from 'react';

const MyBlogs = () => {
  const [userBlogs, setUserBlogs] = useState([]);
  const userId = 123; 

  useEffect(() => {
   
  }, [userId]);
  return (
    <div className="my-blogs">
      <h2>My Blogs</h2>
      {userBlogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul>
          {userBlogs.map((blog) => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <img src={blog.imageUrl} alt="Blog" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBlogs;