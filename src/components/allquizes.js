/**
 * AllQuizes Page
 * Here all the created quizes will be shown.
 * 
 * @author Panagiotis Tsellos w20024460
 */
import { Link } from "react-router-dom";
import "./AllQuizes.css"; // import CSS file for the quizes
import React, { useState, useEffect, useRef } from 'react';
import Footer from "./footer";
import LoadingScreen from "./loadingscreen";

function AllQuizes() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div>
    {isLoading ? <LoadingScreen /> : null} {/* render the LoadingScreen component if isLoading is true */}
    <div className="all-quizzes-container">
      <h1 className="all-quizzes-title">All Quizzes</h1>
      <ul className="all-quizzes-list">
        <li>
          <Link to="/generalquiz" className="all-quizzes-link">
            Quiz 1 (General Quiz)
          </Link>
        </li>
        <li>
          <Link to="/BasicsOfGreekLanguage" className="all-quizzes-link">
            Quiz 2 (Video 1)
          </Link>
        </li>
        <li>
          <Link to="/BasicsOfGreekLanguage2" className="all-quizzes-link">
            Quiz 3 (Video 2)
          </Link>
        </li>
      </ul>
    </div>
    <Footer></Footer>

    </div>  
  );
}

export default AllQuizes;
