import React, { useState } from 'react';

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = () => {
    // Handle blog creation and submission
    // send data backend 
    const blogData = {
      title,
      description,
      image,
    };

  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="blog-form">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Blog Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button onClick={handleSubmit}>Publish Blog</button>
      </div>
    </div>
  );
};

export default Dashboard;
