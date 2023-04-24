/**
 * @author Panagiotis Tsellos w20024460
 */

import React, { useState, useEffect, useRef } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import LoadingScreen from './loadingscreen';
import image1 from '../img/LearnGreek01.png';
import image2 from '../img/LearnGreek02.png';
import image3 from '../img/LearnGreek03.png';
import Footer from './footer';

function Main(props) {
  
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [isAddingInfo, setIsAddingInfo] = useState(false);
  const [newInfoTitle, setNewInfoTitle] = useState("");
  const [newInfoContent, setNewInfoContent] = useState("");  
  const [newInfoDate, setNewInfoDate] = useState("");  
  const [newInfoImage, setNewInfoImage] = useState("");  
  const [submitting, setSubmitting] = useState(false);
  const [addInfoMessage, setAddInfoMessage] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);


    const title = 'Learn GREEK!';
    const northumbria =
      'THIS PROJECT WAS CREATED FOR SUBMISSION TO NORTHUMBRIA UNIVERSITY.';
  
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
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
    const fetchData = async () => {
      try {
        const response = await fetch('http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/homepage', {
        });
        const responseData = await response.json();
        if (Array.isArray(responseData.data)) {
          setData(responseData.data);
          setLoading(false);
        } else {
          console.log('Invalid data returned from API:', responseData);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  function handleDelete(title) {
    const confirmed = window.confirm("Are you sure you want to delete this Info?");
    if (!confirmed) return;
  
    fetch("http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/deletehomeinfo?title=" + title, {
            method: 'POST',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('The data cannot be fetched');
                }
                alert('The Info has been deleted successfully. Please refresh the screen.');
            })
            .catch((error) => {
                console.error('Error reason:', error);
            });
    }

    //to allow one value instead of two in the db when adding an home information
    

    const formRef = useRef(null);

    
    function handleAddInfo(home) {
      home.preventDefault(); // Prevent the form from submitting twice
      if (submitting) {
        return;
      }
      setSubmitting(true); // Set the flag to true to indicate that the form is being submitted
      const title = newInfoTitle.trim();
      const  content = newInfoContent.trim();
      const  date_published = newInfoDate.trim();
      const  img_url = newInfoImage.trim();
      
    
      if (title === "") {
        alert("Please enter the title of this new content. The tile has to be unique.");
        setSubmitting(false); // Reset the flag to false
        return;
      }
    
      if ( content === "") {
        alert("Please enter the content appropriate with the title.");
        setSubmitting(false); // Reset the flag to false
        return;
      }
      if ( date_published === "") {
        alert("Please enter the date that this information was published.");
        setSubmitting(false); // Reset the flag to false
        return;
      }
      if ( img_url === "") {
        alert("Please enter the an Image URL if you want an image to be displaied as well as the content.");
        setSubmitting(false); // Reset the flag to false
        return;
      }
      
      const token = localStorage.getItem('token');

    
      fetch(`http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/addhomeinfo?title=${title}&content=${content}&date_published=${date_published}&img_url=${img_url}`, {
        method: 'POST',
        headers: new Headers( { "Authorization": "Bearer " + token}),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('The data cannot be fetched');
          }
          alert('The Info has been added successfully. Please refresh the screen.');
          console.log(response);
          setNewInfoTitle('');
          setNewInfoContent('');
          setNewInfoDate('');
          setNewInfoImage('');
          setSubmitting(false); // Reset the flag to false
        })
        .catch((error) => {
          console.error('Error reason:', error);
          setSubmitting(false); // Reset the flag to false
        });
    }

   return (   
<div>
    {isLoading ? <LoadingScreen /> : null} {/* render the LoadingScreen component if isLoading is true */}
   
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

    <div className="Data">
      
      <strong>Search a specific title here!</strong>  
      <div className="search-bar">
        <input type="text" placeholder="Search" value={searchTerm} onChange={title => setSearchTerm(title.target.value)} />
      </div>

        
      <div className="add-homeInfo">
        <button type="button" onClick={() => setIsAddingInfo(true)}>Add Home Information Here!</button>
        {isAddingInfo &&
          <form ref={formRef} onSubmit={handleAddInfo}>
           <input type="text" placeholder="Add Info title. It needs to be unique to insert the data." value={newInfoTitle} onChange={home => setNewInfoTitle(home.target.value)} />

           <input type="text" placeholder="Add Info content" value={newInfoContent} onChange={home => setNewInfoContent(home.target.value)}style={{ resize: 'vertical' }} />

           <input type="text" placeholder="Add Info date." value={newInfoDate} onChange={home => setNewInfoDate(home.target.value)} />

           <input type="text" placeholder="Add Info Image URL." value={newInfoImage} onChange={home => setNewInfoImage(home.target.value)} />
            <button type="submit" disabled={submitting}>Submit</button>

            <button type="button" onClick={() => {setIsAddingInfo(false); setAddInfoMessage(null)}}>Cancel</button>
          </form>
        }
        {addInfoMessage &&
          <p>{addInfoMessage}</p>
        }
      </div>


      <div className="grid-container">
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
              <p>
              
</p>
            <button type="button" className="delete-btn" onClick={() => handleDelete(item.title)}>Delete</button>
          </div>

        ))}
      </div>



    </div>
    <ScrollToTopButton />
    <Footer></Footer>
    </div>
);

  

}

export default Main;