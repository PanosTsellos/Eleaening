import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';
function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // send the registration data to the server
    const data = new FormData();
    data.append('username', username);
    data.append('password', password);
    data.append('email', email);
    data.append('name', name);

    fetch('http://unn-w20024460.newnumyspace.co.uk/adduser.php', {
      method: 'POST',
      body: data
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    // reset the form fields
    setUsername('');
    setPassword('');
    setEmail('');
    setName('');
    
    alert("Your account has been created!");
  
  };

  return (
    <div className="registration">
       <h2 className="container__heading">Register</h2>
      <form onSubmit={handleSubmit} className="reg-form">
      <label className="reg-label">
          Name:  
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} 
         className="registration-input"
         required 
      minLength="1"
          />
        </label>
  <label className="reg-label">
    Username:
  <input 
      type="text" 
      value={username} 
      onChange={(event) => setUsername(event.target.value)} 
      className="registration-input"
      required 
      minLength="1"
    />
  </label>
        <label className="reg-label">
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} 
          className="registration-input"
          required 
      minLength="1"
          />
        </label>
        <label className="reg-label">
  Email:
  <input 
    type="email" 
    value={email} 
    onChange={(event) => setEmail(event.target.value)} 
    className="registration-input"
    required 
    minLength="1"
    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
  />
</label>

        <button type="submit"className="Reg-button">Register</button>
      </form>
     
     <div className="if-restriction">If you have an account please:</div>
     <button type="submit"className="Login-button"><Link to="/admin" >
       click here</Link></button>
    </div>
  );
}

export default RegisterPage;