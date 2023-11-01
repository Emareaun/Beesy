import React from 'react';

const UserProfile = () => {
  const userName = "John Doe";
  const userEmail = "john.doe@example.com";

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Name: {userName}</p>
      <p>Email: {userEmail}</p>
    </div>
  );
};

export default UserProfile;