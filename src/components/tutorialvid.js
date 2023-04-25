import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import LoadingScreen from './loadingscreen';
import Footer from './footer';

/**
 * This page shows tutorial videos.
 * 
 * @author Panagiotis Tsellos w20024460
 */

import { Container } from 'react-bootstrap';

function TutorialVideos() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  useEffect(() => {
    fetch('http://unn-w20024460.newnumyspace.co.uk/GreekLearner/api/tutorialvids', {
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

  return (
    <div>
   <Container>
     {isLoading ? <LoadingScreen /> : null}
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

          </div>

        ))}
</Container>
<Footer></Footer>

</div>
);
<footer>
    
</footer>
}

export default TutorialVideos;
