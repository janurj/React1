import React from 'react';
import './UserProfile.css'; // Import styles

const UserProfile = ({ name, email, bio }) => {
  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
