import React, {useState, useEffect} from 'react';
import {Buffer} from 'buffer';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import './admin.css';
import { useNavigate } from "react-router-dom";
import Footer from './footer';

function AdminPage(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status,setStatus] = useState("");
  const [user_type,setUserType] = useState("");
  const storedUsername = localStorage.getItem("username");
  const storedStatus = localStorage.getItem("status");
  const storedUserType = localStorage.getItem("user_type");
  const [linkClicked,setLinkClicked] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [token,setToken] = useState("");
  const navigate = useNavigate()
  
  useEffect(
    () => {
      if (localStorage.getItem('token')) { 
        props.handleAuthenticated(true)
      }
    }, []
  )

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  const handleStatus = (event) => {
    setStatus (event.target.value);
  }
  const handleUserType = (event) => {
    setUserType (event.target.value);
  }

  const handleClick = () => {
    const encodedString = Buffer.from(`${username}:${password}`).toString("base64");
  
    fetch("http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/auth", {
      method: "POST",
      headers: new Headers({ Authorization: "Basic " + encodedString }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === 'Success') {
          if(json.data.user_type ==='admin' ){
            props.handleAuthenticated(true);
            localStorage.setItem('token', json.data.token);
            localStorage.setItem('username', username);
          
            localStorage.setItem('status',json.data.status);
            localStorage.setItem('user_type',json.data.user_type);
            alert("Admin Logged in.");
            navigate('/admin');
          }
          else if(json.data.user_type ==='user' ){
            props.handleAuthenticated(true);
            localStorage.setItem('token', json.data.token);
            localStorage.setItem('username', username);
          
            localStorage.setItem('status',json.data.status);
            localStorage.setItem('user_type',json.data.user_type);
          alert("User Logged in!");
            navigate('/main');
          }
        } else{
          alert("Access denied. Your account has been suspended. Please contact us using the provided contact form to report this issue.");
        }
      })
  
      .catch((e) => {
        console.log(e.message,"error");
      });
  };
  const handleDashboardClick = () => {
    localStorage.setItem('dashboardClicked', true);
  }
  
  const handleSignOut = () => {
    props.handleAuthenticated(false);
    setPassword("");
    setUsername("");
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('status');
    localStorage.removeItem('user_type');
    setLinkClicked(false);
  }
  const loggedInAccount = storedUsername;

  return (
 
<div className="container">
  
    {props.authenticated && 
      <div>
        <h2>Administrator Dashboard</h2>
        <p>Logged in as: {loggedInAccount}</p>
        <center> <a href="/GreekLearner/app/emailsubmissions" target="_blank" rel="noopener noreferrer">
        <button className="footerbutton">Admin - Submissions!</button>
        </a></center>
    
        <Dashboard handleUpdate={props.handleUpdate} />
        <input type="button" value="Sign out" onClick={handleSignOut} className="signout"/>
      </div>
    }
      {!props.authenticated && 
        <div>
          <h1>Sign in</h1>
          <input 
            type="text" 
            placeholder ="username"  
            value={username} 
            onChange={handleUsername} 
          />        
          <input 
            type="password" 
            placeholder="password" 
            value={password} 
            onChange={handlePassword} 
          />
          <input 
            type="button" 
            value="Submit" 
            onClick={handleClick}
          />
        </div>
      }
      { !linkClicked && !props.authenticated &&
      <div>
       If you are not registered please:
       <p><Link to="/register">clickhere</Link>
       </p>
      </div>
      }
     <Footer></Footer>
    </div>
   
  )
}
export default AdminPage;