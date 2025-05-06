import React from "react";

const UserCard = ({ name, age, location, avatar }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center w-72 border-2 border-blue-500">
      <img
  src={avatar}
  alt={name}
  className="w-[220px] h-[200px] rounded-full mx-auto  mb-4 mt-4 border border-gray-300"
  
/>
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{location}</p>
      <p className="mt-2 text-gray-800">Age: {age}</p>
    </div>
  );
};

export default UserCard;
