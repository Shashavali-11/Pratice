// pages/ssr.js
import UserCard from './UserCard';

export default function Ssr({ users }) {
  return (
    <div >
      <h1>User Directory (SSR)</h1>
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
}

// Server Side Rendering (SSR)
// export async function a() {

//   const url = 'https://jsonplaceholder.typicode.com/users'
//   const res = await fetch(url);
//   const users = await res.json();

//   return {
//     props: { users },
//   };
// }
