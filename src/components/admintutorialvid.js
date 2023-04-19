import React, { useState, useEffect, useRef } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import LoadingScreen from './loadingscreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import { Container } from 'react-bootstrap';


function TutorialVideos2(props) {
  
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [isAddingVideo, setIsAddingVideo] = useState(false);
  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [newVideoContent, setNewVideoContent] = useState("");  
  const [newVideoDate, setNewVideoDate] = useState("");  
  const [newVideoVideo, setNewVideoVideo] = useState("");  
  const [submitting, setSubmitting] = useState(false);
  const [addVideoMessage, setAddVideoMessage] = useState(null);
  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/tutorialvids', {
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
    const confirmed = window.confirm("Are you sure you want to delete this Video?");
    if (!confirmed) return;
  
    fetch("http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/deletetutorialvid?title=" + title, {
            method: 'POST',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('The data cannot be fetched');
                }
                alert('The Video has been deleted successfully. Please refresh the screen.');
            })
            .catch((error) => {
                console.error('Error reason:', error);
            });
    }

    //to allow one value instead of two in the db when adding an Video information
    

    const formRef = useRef(null);

    
    function handleAddVideo(video) {
      video.preventDefault(); // Prevent the form from submitting twice
      if (submitting) {
        return;
      }
      setSubmitting(true); // Set the flag to true to indicate that the form is being submitted
      const title = newVideoTitle.trim();
      const  content = newVideoContent.trim();
      const  date_published = newVideoDate.trim();
      const  video_url = newVideoVideo.trim();
      
    
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
      if ( video_url === "") {
        alert("Please enter the an Image URL if you want a video to be displaied as well as the content.");
        setSubmitting(false); // Reset the flag to false
        return;
      }
      
      const token = localStorage.getItem('token');

/*.js:106   
        POST http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/addtutorialvid?title=2&content=2&date_published=2&video_url=https://www.youtube.com/embed/zpOULjyy-n8 500 (Internal Server Error)
handleAddVideo @ admintutorialvid.js:106
callCallback @ react-dom.deve 
*/

        fetch(`http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/addtutorialvid?title=${title}&content=${content}&date_published=${date_published}&video_url=${video_url}`, {
        method: 'POST',
        headers: new Headers( { "Authorization": "Bearer " + token}),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('The data cannot be fetched');
          }
          alert('The Info has been added successfully. Please refresh the screen.');
          console.log(response);
          setNewVideoTitle('');
          setNewVideoContent('');
          setNewVideoDate('');
          setNewVideoVideo('');
          setSubmitting(false); // Reset the flag to false
        })
        .catch((error) => {
          console.error('Error reason:', error);
          setSubmitting(false); // Reset the flag to false
        });
    }

   return (   
    
<div>
<Container>
    {isLoading ? <LoadingScreen /> : null} {/* render the LoadingScreen component if isLoading is true */}
   
    <div className="Data">
      
     

      <div className="add-Video-Info">
        <button type="button" onClick={() => setIsAddingVideo(true)}>Add Video Information Here!</button>
        {isAddingVideo &&
          <form ref={formRef} onSubmit={handleAddVideo}>
           <input type="text" placeholder="Add Video title. It needs to be unique to insert the data." value={newVideoTitle} onChange={home => setNewVideoTitle(home.target.value)} />

           <input type="text" placeholder="Add Video content" value={newVideoContent} onChange={home => setNewVideoContent(home.target.value)}style={{ resize: 'vertical' }} />

           <input type="text" placeholder="Add Video date." value={newVideoDate} onChange={home => setNewVideoDate(home.target.value)} />

           <input type="text" placeholder="Add Video Video URL." value={newVideoVideo} onChange={home => setNewVideoVideo(home.target.value)} />
            <button type="submit" disabled={submitting}>Submit</button>

            <button type="button" onClick={() => {setIsAddingVideo(false); setAddVideoMessage(null)}}>Cancel</button>
          </form>
        }
        {addVideoMessage &&
          <p>{addVideoMessage}</p>
        }
      </div>
     
<div>
<h1>Learn the basics of Greek Language (part1)!</h1>
<div className="ratio ratio-16x9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/4P8NwDgt2ic" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

      <a href="/BasicsOfGreekLanguage" target="_blank" rel="noopener noreferrer">
        <button>Click to test your knowledge!</button>
      </a>
    </div>

    <div>
<h1>Learn the basics of Greek Language (part 2)!</h1>
<div className="ratio ratio-16x9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/lgzSoUTRZe8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

      <a href="/BasicsOfGreekLanguage2" target="_blank" rel="noopener noreferrer">
        <button>Click to test your knowledge!</button>
      </a>
    </div>

    <strong>Search a specific title here!</strong>  
      <div className="search-bar">
        <input type="text" placeholder="Search" value={searchTerm} onChange={title => setSearchTerm(title.target.value)} />
      </div> 
    
          {filteredData.map((item) => (
            <div className="grid-item" key={item.title}>
            <div className="ratio ratio-16x9">
  <iframe
    width="560"
    height="315"
    src={`${item.video_url}`}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

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
    </Container>
    <ScrollToTopButton />
    <Footer></Footer>
    </div>
);

  

}

export default TutorialVideos2;