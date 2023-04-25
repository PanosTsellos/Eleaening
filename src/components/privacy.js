/**
 * Landing page: Privacy Page
 * Located at the footer 
 * @author Panagiotis Tsellos w20024460
 */

import { useState, useEffect } from 'react';

import '../App.css';
import LoadingScreen from './loadingscreen';
import Footer from './footer';


function Privacy() {
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
      <h1><center>Privacy</center></h1>
      </div>
      <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.</p>

<p>We only collect personal information when you provide it to us voluntarily, such as when you register for an account, sign up for our newsletter, or fill out a contact form. The personal information we collect may include your name, email address, and other contact information.</p>

<p>We may use this personal information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>

<p>We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.</p>

<p>We may use cookies on our website to enhance your experience. A cookie is a small text file that our website may place on your computer as a tool to remember your preferences. You may refuse the use of cookies by selecting the appropriate settings on your browser, however, please note that if you do this, you may not be able to use the full functionality of our website.</p>

<p>Our website may contain links to other websites. Please be aware that we are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personal information.</p>

<p>We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, we cannot guarantee that these precautions will prevent every unauthorized attempt to access, use, or disclose your personal information.</p>

<p>By using our website, you agree to the terms of this privacy policy.</p>

<p>If you have any questions about this privacy policy, please contact us.</p>

        <Footer></Footer>
    </div>
  );
}

export default Privacy;

