// pages/index.js (SSG Example)
import { useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

export default function Task_5({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMoreUsers = async () => {
    setLoading(true);
    let url = 'https://jsonplaceholder.typicode.com/users'
    // let url = 'https://fakestoreapi.com/products'
    try {
      const res = await axios.get(url);
      setUsers([...users, ...res.data]);
    } catch (err) {
        console.log(err); // Mine 
      setError('Failed to load more users');
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div>
      <h1>User Directory App</h1>
      {users.map(user => <UserCard key={user.id} user={user} />)}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <button onClick={loadMoreUsers}>Load More Users</button>
    </div>
  );
}

// Static Site Generation (SSG)
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const initialUsers = await res.json();
  return {
    props: { initialUsers },
  };
}
