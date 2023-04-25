/**
 * Landing page: TOS page located at the footer
 * 
 * @author Panagiotis Tsellos w20024460
 */

import { useState, useEffect } from 'react';

import '../App.css';
import LoadingScreen from './loadingscreen';
import Footer from './footer';


function Terms() {
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
      <h1><center>Tearms of service</center></h1>
      </div>
      <p>Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website.</p>

<p>By accessing this website, we assume you accept these terms and conditions in full. If you do not agree with these terms and conditions or any part of these terms and conditions, you must not use this website.</p>

<p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>

<p>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties: [insert list of personal information].</p>

<p>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>

<p>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</p>

<p>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>

<p>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</p>

<p>Your use of this website and any dispute arising out of such use of the website is subject to the laws of United Kingdom.</p>

        <Footer></Footer>
    </div>
  );
}

export default Terms;

