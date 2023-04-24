import "./Footer.css";
import React, { useState, useEffect } from "react";

function Footer() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    var today = new Date();
    
    console.log(currentDate); 

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="main-footer">
      <div className="container-footer">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>About us</h4>
            <h1 className="list-unstyled">
              <li><button className="footerbutton">Learn about us.</button></li>
              
              <li><p className="parody">Location: Newcastle Upon Tyne, Unoted Kingdom</p></li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Services</h4>
            <ui className="list-unstyled">
           <li> <a href="/GreekLearner/app/ContactUs" target="_blank" rel="noopener noreferrer">
        <button className="footerbutton">Contact Us.</button></a>
        </li></ui>

            <ui className="list-unstyled">
            <li><a href="/GreekLearner/app/recourses" target="_blank" rel="noopener noreferrer">
        <button className="footerbutton">Recourses</button></a>
        </li></ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Social Media</h4>
            <ui className="list-unstyled">
            <li><button className="footerbutton">Twitter.</button></li>
            <li><button className="footerbutton">Instangram.</button></li>
            </ui>
          </div>
        </div>
        <hr />
        
        <div className="row">
          <p className="col-sm">
            Current Date:
            {currentDate} <br>
            </br>
            Current Time:
            {time.toLocaleTimeString()}
            <br></br>
            © Panagiotis Tsellos | All rights reserved |
           <button className="footerbutton"> Terms Of Service </button>|
           <button className="footerbutton"> Privacy 
           </button>|
           
           </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;