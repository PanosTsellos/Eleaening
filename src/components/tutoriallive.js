import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Footer from './footer';
import React, { useState, useEffect, useRef } from 'react';

/**
 * This page shows tutorial Live Stream.
 * This Stream is 24/7
 * @author Panagiotis Tsellos w20024460
 */

import { Container } from 'react-bootstrap';
import LoadingScreen from './loadingscreen';

function Tutoriallive() {
  const [isLoading, setLoading] = useState(true);
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
<Container>
{isLoading ? <LoadingScreen /> : null}

<h1>Learn Greek and information about Greece</h1>
<h2>Livestream 24/7!</h2>
<div className="ratio ratio-16x9">
<iframe width="560" height="315" src="https://www.youtube.com/embed/cdJPkSfNnL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</Container>

<Footer></Footer>

    </div>

);
}

export default Tutoriallive;
