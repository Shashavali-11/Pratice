// pages/index.js (SSG Example)
import { useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

export default function Task_5({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMoreUsers = async () => {
    setLoading(true);
    let url = 'https://jsonplaceholder.typicode.com/users'
    try {
      const res = await axios.get(url);
      const data = res.data;
      console.log(data)
      const remaining = res.data.slice(users.length, users.length+5); // remaining 5
      setUsers([...users, ...remaining]); // add new users to the existing list
      if (users.length + remaining.length >= 10) {
        setTimeout(() => { setError('No more users to load') }, 5000); // Simulate a delay
      //  setError('Failed to load more users..!')
    }
    } catch (err) {
        console.log(err); // Mine 
      setError('Failed to load more users');
    } finally {
      setLoading(false);
    }
    
  };


  
  return (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'lightgray',
    height: 'auto',
    minHeight: '100vh'
  }}>
    <h1>User Directory App</h1>

   <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  padding: '16px',
  justifyItems: 'center'
}}>
      {users?.map(user => <UserCard key={user.id} user={user} />)}
    </div>

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





