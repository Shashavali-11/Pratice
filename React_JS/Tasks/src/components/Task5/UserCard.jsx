import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

 const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '16px',
  marginBottom: '16px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#f9f9f9',
  width: '250px', // ensure fixed width for alignment
  flexShrink: 0   // prevent shrinking
};

  const buttonStyle = {
    marginTop: '10px',
    padding: '8px 12px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: '#fff'
  };

  return (
    <div style={cardStyle}>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.address.city}</p>

      <button style={buttonStyle} onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide' : 'View'} Details
      </button>

      {showDetails && (
        <div style={{ marginTop: '10px' }}>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> <a style={{color:'red'}}  href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>

          {/* <p><strong>Website:</strong> {user.website}</p> */}
        </div>
      )}
    </div>
  );
};

export default UserCard;
