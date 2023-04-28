/**
 * Landing page: Main Page
 * 
 * @author Panagiotis Tsellos w20024460
 */

import { useState, useEffect } from 'react';
import image1 from '../img/LearnGreek01.png';
import image2 from '../img/LearnGreek02.png';
import image3 from '../img/LearnGreek03.png';
import '../App.css';
import LoadingScreen from './loadingscreen';
import Footer from './footer';


function Main() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const title = 'Learn GREEK!';
  const northumbria =
    'THIS PROJECT WAS CREATED FOR SUBMISSION TO NORTHUMBRIA UNIVERSITY.';

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  useEffect(() => {
    setLoading(false);
  }, []);
  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 2 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? 2 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    fetch('http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/homepage', {
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
    <h1>{title}</h1>
    {northumbria}
    <div id='slideshow-container'>
      <img
        className='slideshow-image'
        src={currentSlideIndex === 0 ? image1 : currentSlideIndex === 1 ? image2 : image3}
        alt={`Slide ${currentSlideIndex + 1}`} 
      />
      <div className='slideshow-buttons'>
        <button className='slideshow-button' onClick={handlePrev}>
        ⬅
        </button>
        <button className='slideshow-button' onClick={handleNext}>
        ➡
        </button>
      </div>
    </div>
  </div>
  <div className="grid-container-vertical"> // added CSS class for vertical display
    {filteredData.map((item) => (
      <div className="grid-item" key={item.title}>
        <img
          src={`${item.img_url}`}
          alt="home"
        />
        <p>
          <strong>Title: </strong>
          {item.title}
        </p>
        <p>
          <strong>Content: </strong>
          {item.content}
        </p>
        <p>
          <strong>Date: </strong>
          {item.date_published}
        </p>              
      </div>
    ))}
  </div>
  <Footer></Footer>
</div>

  );
}

export default Main;

