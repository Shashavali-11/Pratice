import React, { useState } from 'react';
import UserCard from './components/UserCard';

function App() {
  const [showProfile, setShowProfile] = useState(true);

  const user = {
    name: 'Jane Doe',
    age: 28,
    location: 'New York City',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={toggleProfile}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {showProfile ? 'Hide Profile' : 'Show Profile'}
      </button>

      {showProfile && <UserCard {...user} />}
    </div>
  );
}

export default App;
