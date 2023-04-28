/**
 * @author Panagiotis Tsellos w20024460
 */

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
              <li><a href="/GreekLearner/app/aboutus" target="_blank" rel="noopener noreferrer">
        <button className="footerbutton">Learn about us.</button></a></li>
              <li><p className="parody">Location: Newcastle Upon Tyne, United Kingdom</p></li>
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
        <button className="footerbutton">Resources.</button></a>
        </li></ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Social Media</h4>
            <ui className="list-unstyled">
            <li><button className="footerbutton">Twitter.</button></li>
            <li><button className="footerbutton">Instagram.</button></li>
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
            © Panagiotis Tsellos |
          <a href="/GreekLearner/app/Terms" target="_blank" rel="noopener noreferrer">
        <button className="footerbutton">Terms Of Service </button></a>|
        <a href="/GreekLearner/app/Privacy" target="_blank" rel="noopener noreferrer">
        <button className="footerbutton">Privacy</button></a>
           
           </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;