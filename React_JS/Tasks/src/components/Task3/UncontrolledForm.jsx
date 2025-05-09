import React, { useRef } from 'react';

export default function UncontrolledForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <form onSubmit={e => {
      e.preventDefault();
      alert(`Username: ${usernameRef.current.value}, Password: ${passwordRef.current.value}`);
    }}>
      <h3>Uncontrolled Form</h3>
      <input ref={usernameRef} placeholder="Username" />
      <input ref={passwordRef} placeholder="Password" type="password" />
      <button type="submit">Submit</button>
    </form>
    
  );
}
