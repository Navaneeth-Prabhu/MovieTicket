import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { defaultListboxReducer } from '@mui/base';

function Trailler() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/movie/trailler');
        const youtubeUrl = response.data;
        const videoId = youtubeUrl.split('/')[3];
        videoRef.current.src = `https://www.youtube.com/embed/${videoId}`;
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div xs={{backgroundColor:'red'}}>
      <h1>asdfjasoifasdflahw feo</h1>
      <iframe ref={videoRef} width="100%" height="315" margin='30px' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default Trailler