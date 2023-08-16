import React, { useState } from 'react';
import '../styles.css';
import {NavLink} from "react-router-dom"

export default function SignUpPagee({setIsClick,isclick}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  let handleSign=() =>{
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all the inputs');
      } else {
          setIsClick(!isclick)&& alert("you are signed in")
    }

};


 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
            />
          </div>
          <button>Sign Up</button><br/>
          <NavLink to="/login">already have an account?</NavLink>
        </form>
        
      </header>
    </div>
  );
}

