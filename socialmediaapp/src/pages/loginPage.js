// Login.js
import React, { useState , useContext } from 'react';
import axios from 'axios';
import { likeContext } from '../contexts/likeContext';
import {NavLink} from "react-router-dom"
import "../styles.css"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 let {handleLogined,handleSIgnDisplay,isSignDisplay} = useContext(likeContext)
 

  const handleLogin = async (e) => {
 
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all the inputs');
    } else {
    try {
      const response = await axios.post('/api/login', { email, password });
      // Handle successful login response
      console.log('Login successful');
      alert('You are successfully logged in');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  }
  };

  return (
    <div className='loginPage' style={{display: isSignDisplay ? "none" : "flex"}}>
      <div className='hash-log'># Hash-media</div>
      <div className='desp-log'>A great Social Media application</div>
      <h2>Log In</h2>
      <form onSubmit={handleLogin} className='login-form'>
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
        <button type="submit" onClick={() => handleLogin() && handleLogined() }>Login</button>
        <button onClick={() => handleLogin() &&  handleLogined()}>Guest Mode</button>
     <span>Dont't have an account ? <NavLink to="/sign" onClick={() => handleSIgnDisplay()}><b>Sign Up</b></NavLink></span>  
      </form>
    </div>
  );
};


