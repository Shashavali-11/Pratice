import useState from 'react';
// components/UserCard.js
export default function UserCard({ user }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>City:</strong> {user.address.city}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide' : 'View'} Details
      </button>
      {showDetails && (
        <div>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      )}
    </div>
  );
}
