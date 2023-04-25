/**
 * Landing page: About us Page
 * Located at the footer 
 * @author Panagiotis Tsellos w20024460
 */

import { useState, useEffect } from 'react';

import '../App.css';
import LoadingScreen from './loadingscreen';
import Footer from './footer';


function AboutUs() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    setLoading(false);
  }, []);

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
    <div className='main'>
      <h1><center>About Us!</center></h1>
      </div>
    <p>Welcome to our website! We are a dedicated team of Greek language enthusiasts who believe that language learning should be a fun and engaging experience. Our goal is to provide an immersive and multimodal approach to learning Greek, utilizing a variety of resources to make the language accessible to all learners. Whether you are a complete beginner or an advanced learner, our website offers a range of interactive activities and multimedia content designed to help you learn and practice Greek in a fun and effective way. From vocabulary and grammar exercises to videos and audio recordings, we have something for everyone. So come and explore our website, join our community of learners, and embark on a journey to discover the beauty of the Greek language!</p>
        <Footer></Footer>
    </div>
  );
}

export default AboutUs;

