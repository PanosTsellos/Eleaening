/**
 * Landing page: Recourses/Reference Page
 * 
 * @author Panagiotis Tsellos w20024460
 */

import { useState, useEffect } from 'react';

import '../App.css';
import LoadingScreen from './loadingscreen';
import Footer from './footer';


function Recourses() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(() => {
    fetch('http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/recourses', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      if (Array.isArray(data.data)) {
        setData(data.data);
        setLoading(false);
      } else {
        console.log('Invalid data returned from API:', data);
      }
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <LoadingScreen />
      </div>
    );
  }

  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
    {isLoading ? <LoadingScreen /> : null}
    <div className='main'>
      <h1><center>Recourses / References</center></h1>
      </div>
    <div className="grid-container">
          {filteredData.map((item) => (
            <div className="grid-item" key={item.title}>
              <p>
                <strong>Title: </strong>
                {item.title}
              </p>
              <p>
                <strong>Content: </strong>
                {item.content}
              </p>              
            </div>
          ))}
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Recourses;

