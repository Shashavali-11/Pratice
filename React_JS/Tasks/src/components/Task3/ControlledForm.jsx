import React, { useState } from 'react';

export default function ControlledForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form onSubmit={e => { e.preventDefault(); alert(`Name: ${name}, Email: ${email}`); }}>
      <h3>Controlled Form</h3>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />&nbsp;&nbsp;&nbsp;&nbsp;
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}
