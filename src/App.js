import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import UserPage from './components/UserPage';
import logo from './greek&britishFlag.jpg';
import Main from './components/main';
import Alphabet from './components/alphabet';
import ContactUs from "./components/contactus";
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import TutorialVideos from "./components/tutorialvid";
import BasicsOfGreekLanguage from "./components/basicsofgreeklanguage";
import TutorialLive from "./components/tutoriallive";
import BasicsOfGreekLanguage2 from "./components/BasicsOfGreekLanguage2";
import Footer from "./components/footer";
import Main2 from "./components/adminmain";
import TutorialVideos2 from "./components/admintutorialvid";
import EmailSubmissions from './components/emailsubs';
import GeneralQuiz from "./components/generalquiz";
import AllQuizes from "./components/allquizes";
import AdminPage from './components/AdminPage';
import UpdateUser from './components/UpdateUser';
import AddUser from './components/AddUser';
import RegisterPage from './components/RegisterPage';
import DeleteUser from'./components/DeleteUser';
import Recourses from './components/resources';
import Recourses2 from "./components/adminrecourses";
/**
 * Application land page
 * 
 * @author Panagiotis Tsellos w20024460
 */

function App() {
  const name = "Panagiotis Tsellos";
  const auth = localStorage.getItem('user_type');
  const [users,setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const[authenticated, setAuthenticated]=useState(false);
  const handleAuthenticated = (isAuthenticated) => {setAuthenticated(isAuthenticated)}
  const [update,setUpdated] = useState(0);
  
  useEffect( () => {
      fetch("http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/dashboard")
      .then(
          (response) => response.json()
      )
      .then(
          (json) => {
              setUsers(json.data)
              setLoading(false)
              console.log(json.data)
          }
      )
         .catch(
             (e) => {
                 console.log(e.message)
             }
         )
     },[update]);
   
     const handleUpdate = () => {setUpdated(update+1)}

//these are the links for the admins and admins only.
if (auth === 'admin') {
  return (
    <div className="App">
  <header className="App-header">
   
    <title>Learn</title>
    <img src={logo} className="App-logo" alt="logo"/>

<nav className="navbar">
<div className="logo_header">
  <a href="/GreekLearner/app/main" className="logo">Learn</a>
 
</div>


<ul className="main_nav">

  <li>
  <div className="dropdown">
    <a href="#" className="dropbtn">Modules ↓</a>  
<div className="dropdown-content">
<a href="/GreekLearner/app/tutoriallive">Tutorial Live-Stream</a>
<a href="/GreekLearner/app/alphabet">Alphabet</a>
<a href="/GreekLearner/app/tutorialvid">Tutorial Videos</a>
<a href="/GreekLearner/app/allquizes">All quizes</a>
</div>
</div>
  </li>
  <li>
    <a href="/GreekLearner/app/ContactUs" className="nav_links">Contact</a>
  </li>
  <li>
    <a href="http://unn-w20024460.newnumyspace.co.uk/GreekLearner/Chat/" className="nav_links">Chat</a>
  </li>
  <li>
    <a href="/GreekLearner/app/admin" className="nav_links">Sign in</a>
  </li>
</ul>
</nav>  
  </header>
      
    <Routes>
    <Route path="/admin" element={ <AdminPage users={users} authenticated={authenticated} 
      handleAuthenticated={handleAuthenticated} 
      handleUpdate={handleUpdate} />}  />
      <Route path="/delete" element ={<DeleteUser />} />
      <Route path="/register" element ={<RegisterPage />} />
      <Route path="/addUser" element ={<AddUser users={users}  />} />
      <Route path="/update" element={ <UpdateUser users={users}  authenticated={authenticated} 
      handleAuthenticated={handleAuthenticated}  handleUpdate={handleUpdate}/>} 
      />
    <Route path="/main" element={<Main2 />}/>
    <Route path="/tutorialvid" element={<TutorialVideos2 />}/>
    <Route path="/emailsubmissions" element = {<EmailSubmissions/>}/>
    <Route path="/ContactUs" element={<ContactUs />}/>

    <Route path="/alphabet" element={<Alphabet />}/>
<Route path="/BasicsOfGreekLanguage" element={<BasicsOfGreekLanguage />}/>
<Route path="/BasicsOfGreekLanguage2" element={<BasicsOfGreekLanguage2 />}/>
<Route path="/tutoriallive" element = {<TutorialLive/>}/>
<Route path="/generalquiz" element = {<GeneralQuiz/>}/>
<Route path="/allquizes" element = {<AllQuizes/>}/>
<Route path="/recourses" element = {<Recourses2/>}/>


    <Route path="*" element={<p>Not Found</p>} />
  </Routes>
  </div>

  );
}else if(auth==='user'){
  //These are the functionalities the user has.
return(
  <div className="App">
  <header className="App-header">
   
    <title>Learn</title>
    <img src={logo} className="App-logo" alt="logo"/>

<nav className="navbar">
<div className="logo_header">
  <a href="/GreekLearner/app/main" className="logo">Learn</a>
 
</div>


<ul className="main_nav">

  <li>
  <div className="dropdown">
    <a href="#" className="dropbtn">Modules ↓</a>  
<div className="dropdown-content">
<a href="/GreekLearner/app/tutoriallive">Tutorial Live-Stream</a>
<a href="/GreekLearner/app/alphabet">Alphabet</a>
<a href="/GreekLearner/app/tutorialvid">Tutorial Videos</a>
<a href="/GreekLearner/app/allquizes">All quizes</a>
</div>
</div>
  </li>
  <li>
    <a href="/GreekLearner/app/ContactUs" className="nav_links">Contact</a>
  </li>
  <li>
    <a href="http://unn-w20024460.newnumyspace.co.uk/GreekLearner/Chat/" className="nav_links">Chat</a>
  </li>
  <li>
    <a href="/GreekLearner/app/admin" className="nav_links">Sign in</a>
  </li>
</ul>
</nav>  
  </header>
<Routes>
<Route path="/admin" element={ <UserPage users={users} authenticated={authenticated} 
      handleAuthenticated={handleAuthenticated} 
      handleUpdate={handleUpdate} />}  />
      
<Route path="/main" element={<Main />}/>
<Route path="/alphabet" element={<Alphabet />}/>
<Route path="/ContactUs" element={<ContactUs />}/>
<Route path="/BasicsOfGreekLanguage" element={<BasicsOfGreekLanguage />}/>
<Route path="/BasicsOfGreekLanguage2" element={<BasicsOfGreekLanguage2 />}/>
<Route path="/tutorialvid" element={<TutorialVideos />}/>
<Route path="/tutoriallive" element = {<TutorialLive/>}/>
<Route path="/generalquiz" element = {<GeneralQuiz/>}/>
<Route path="/allquizes" element = {<AllQuizes/>}/>
<Route path="/recourses" element = {<Recourses/>}/>

</Routes>
</div>
);
}




//these are for the Everyone who access:
  return (
    <div className="App">
      <header className="App-header">
       
        <title>Learn</title>
        <img src={logo} className="App-logo" alt="logo"/>

  <nav className="navbar">
    <div className="logo_header">
      <a href="/GreekLearner/app/main" className="logo">Learn</a>
     
    </div>

    
    <ul className="main_nav">
      

      <li>
      <div className="dropdown">
        <a href="#" className="dropbtn">Modules ↓</a>  
  <div className="dropdown-content">
  <a href="/GreekLearner/app/admin" onClick={() => alert("You must be signed in to access this page.")}>Tutorial Live-Stream</a>
  <a href="/GreekLearner/app/admin" onClick={() => alert("You must be signed in to access this page.")}>Alphabet</a>
  <a href="/GreekLearner/app/admin" onClick={() => alert("You must be signed in to access this page.")}>Tutorial Videos</a>
  <a href="/GreekLearner/app/admin" onClick={() => alert("You must be signed in to access this page.")}>All quizes</a>
  </div>
</div>
      </li>
      <li>
        <a href="/GreekLearner/app/ContactUs" className="nav_links">Contact</a>
      </li>
      <li>
        <a href="/GreekLearner/app/admin" className="nav_links" onClick={() => alert("You must be signed in to access this page.")}>Chat</a>
      </li>
      <li>
        <a href="/GreekLearner/app/admin" className="nav_links">Sign in</a>
      </li>
    </ul>
      
  </nav>
      
       
      </header>

<Routes>
<Route path="/admin" element={ <AdminPage users={users} authenticated={authenticated} 
          handleAuthenticated={handleAuthenticated} 
          handleUpdate={handleUpdate} />}  />
       
          <Route path="/delete" element ={<DeleteUser />} />
          <Route path="/register" element ={<RegisterPage />} />


<Route path="/main" element={<Main />}/>
<Route path="/main2" element={<Main2 />}/>
<Route path="/alphabet" element={<Alphabet />}/>
<Route path="/ContactUs" element={<ContactUs />}/>
<Route path="/BasicsOfGreekLanguage" element={<BasicsOfGreekLanguage />}/>
<Route path="/BasicsOfGreekLanguage2" element={<BasicsOfGreekLanguage2 />}/>
<Route path="/tutorialvid" element={<TutorialVideos />}/>
<Route path="/tutorialvid2" element={<TutorialVideos2 />}/>
<Route path="/tutoriallive" element = {<TutorialLive/>}/>
<Route path="/emailsubmissions" element = {<EmailSubmissions/>}/>
<Route path="/generalquiz" element = {<GeneralQuiz/>}/>
<Route path="/allquizes" element = {<AllQuizes/>}/>
<Route path="/recourses" element = {<Recourses/>}/>



</Routes>


    </div>
  );
}

export default App;
