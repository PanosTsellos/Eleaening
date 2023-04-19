import React, { useState } from 'react';
import DeleteUser from './DeleteUser';
import './update.css';


function UserUpdateUser({props, user, setSelectedUser, setUserList }) {
  const [account_id, setAccountID] = useState(user.account_id);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState(user.password);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [user_type, setUserType] = useState(user.user_type);
  const [status, setStatus] = useState(user.status);

  const updateUser = (updatedUser) => {
    setUserList((prevUserList) => {
      const updatedUserList = prevUserList.map((user) => {
        if (user.account_id === updatedUser.account_id) {
          return updatedUser;
        }
        return user;
      });
      return updatedUserList;
    });
    setSelectedUser(null);
  };

  const handleDeleteUser = (deletedUserID) => {
    setUserList((prevUserList) => {
      return prevUserList.filter((user) => user.account_id !== deletedUserID);
    });
    setSelectedUser(null);
  };

  const handleCancel = () => {
    setSelectedUser(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('account_id', account_id);
    data.append('username', username);
   
    data.append('email', email);
    data.append('name', name);
    data.append('user_type', user_type);
    data.append('status', status);

    const token = localStorage.getItem("token");
 // Hash the password
const encryptedPassword = btoa(password);

data.append('encryptedPassword', encryptedPassword);
    fetch('http://unn-w20024460.newnumyspace.co.uk/updateuser.php', {
      method: 'POST',
      headers: new Headers( { "Authorization": "Bearer " + token}),
      body: data,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        alert('User updated successfully. Please reload the page.');
        const updatedUser = {
          account_id: account_id,
          username: username,
        
          email: email,
          name: name,
          user_type: user_type,
          status: status,
        };
        setSelectedUser(null);
        updateUser(updatedUser);
        props.handleUpdate();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="updateform">
      <form onSubmit={handleSubmit} >
      <p> Edit user form</p>
    
        <label className="update-label">
         <span>Name:</span> 
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="update-field"
          />
        </label>
        <label className="update-label">
         <span>Username:</span> 
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="update-field"
          />
        </label>
       
        <label className="update-label">
         <span>Email:</span> 
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="update-field"
          />
        </label>
        
      <div className='updateButtonsContainer'>
      <button type="submit" className="updatebtn">Update User</button>
      <DeleteUser account_id={account_id} onDeleteUser={handleDeleteUser} />
      <button type="button" onClick={handleCancel}className="updatebtn">Cancel</button>
      </div>
   </form>
  </div>
);
  }
  export default UserUpdateUser;