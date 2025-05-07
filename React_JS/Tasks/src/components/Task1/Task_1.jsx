import React, { useState } from 'react';
import UserCard from './UserCard1';


function Task_1() {
  const [showProfile, setShowProfile] = useState(true);

  const user = {
    name: 'Hardik Pandya',
    age: 29,
    location: 'India',
    // avatar: 'https://static.toiimg.com/thumb/msid-117942315,imgsize-36816,width-400,resizemode-4/117942315.jpg'
    avatar:'https://upload.wikimedia.org/wikipedia/commons/f/fc/Hardik_Pandya_in_PMO_New_Delhi.jpg'
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={toggleProfile}
        className="mb-4 px-4 py-2 bg-blue-1600 text-white rounded hover:bg-blue-700"
      >
        {showProfile ? 'Hide Profile' : 'Show Profile'}
      </button><br /> <br />

      {showProfile && <UserCard {...user} />}
    </div>
  );
}

export default Task_1;