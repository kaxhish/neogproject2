// Signup.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { likeContext } from '../contexts/likeContext';
import "../styles.css"

 export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

let {handleLogined,handleSignClose} = useContext(likeContext)

  const handleSignup = async (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all the inputs');
    } else {
      try {
        const response = await axios.post('/api/signup', { name, email, password });
        alert('You are succesfully signed in');
        console.log('Signup successful');
      } catch (error) {
        console.error('Signup failed:', error);
      }
    }
  };

  return (
    <div className='signpage'>
       <div className='hash-log'># Hash-media</div>
      <div className='desp-log'>A great Social Media application</div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className='sign-form'>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={() => handleLogined() && handleSignClose()}>Signup</button>
      </form>
    </div>
  );
};
