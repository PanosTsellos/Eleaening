/**
 * @author Panagiotis Tsellos w20024460
 */

import React, { useState, useEffect, useRef } from 'react';
import LoadingScreen from './loadingscreen';import Footer from "./footer";

const Result =() =>{
  return(
      <p>Your message has been successfully sent. We will contact you as soon as possible</p>
  )
}

function ContactUs() {
  const [isLoading, setLoading] = useState(true);

  const [result, showResult] = useState(false);
 

  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  useEffect(() => {
    setLoading(false);
  }, []);
  function isEmpty(value) {
    return value == null || value === '' || (Array.isArray(value) && value.length === 0);
  }


  // handle the value
  const handleCHange = input => e => {
    setState({...state, [input]: e.target.value});
  };

  // when submit btn is clicked
  const submitForm = (e) => {
    e.preventDefault();

    const {name, email, message} = state;

    // create a new XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the response state and the step
      setState({
        ...state,
        emailStatus: xhr.responseText
      });
    });

    // open the request with the verb and the url
    xhr.open('GET', 'http://unn-w20024460.newnumyspace.co.uk/contact.php?sendto=' + email + 
    '&name=' + name + 
    '&message=' + message);

    // send the request
    xhr.send();
    e.target.reset();
    showResult(true);
    // reset the fields
    setState({
      name: '',
      email: '',
      message: '',
      emailStatus: ''
    });
  };

  const {name, email, message, emailStatus} = state;
  if (!isEmpty(emailStatus)) {
    console.log(emailStatus);
  }
  
  if (isLoading) {
    return (
      <div className="loading-screen">
        <LoadingScreen />
      </div>
    );
  }
  

    return (
   <div>
          {isLoading ? <LoadingScreen /> : null}
      <div className="contactme" id="contact">
        <div className="contactOverlay">
          <div className="container">
            <div className="contactform">
              <form onSubmit={submitForm}>
              
                <div className="formWord">
                  <h2>Contact Us</h2>
                  <span>Full Name</span>
                  <br />
                  <input className="input100" type="text" name="fullName" value={name} onChange={handleCHange('name')} placeholder="Name" required  />
                  <br />
                 
               
               <br />
                  <span>Email</span>
                  <br />
                  <input className="input100" type="email" name="email" value={email} onChange={handleCHange('email')} placeholder="Email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                  <br />
                  </div>
                   <div className="formWord">
                  
                 
                
               <span>Message</span>
                  <br />
                  <textarea  value={message} onChange={handleCHange('message')} placeholder="Message"></textarea>
                  <br />

                  
                  
             
                  <br />
                  <button type="submit">SUBMIT</button>                
 
                  <div className="row">{result ? <Result /> : null} </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
  
      </div>

  );
}

export default ContactUs;
