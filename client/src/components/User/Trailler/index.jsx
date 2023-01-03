import React, { useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import { defaultListboxReducer } from '@mui/base';
import { MovieContext } from '../../../context/movieContext';
import { margin, padding } from '@mui/system';

function Trailler() {
  const{MovieDetails} = useContext(MovieContext)
  const videoRef = useRef(null);

  // /movie/trailler

  useEffect(() => {
    // const {} = MovieDetails
    // let Url = MovieDetails.youtubeLink
    // console.log('asfasfasfasdf',Url);
      try {
        const youtubeUrl = MovieDetails.youtubeLink;
        const videoId = youtubeUrl.split('v=')[1];
        console.log("asdfasdfasdfasfasdf",videoId);
        videoRef.current.src = `https://www.youtube.com/embed/${videoId}`;
      } catch (error) {
        console.error(error);
      }
  }, []);

  return (
    <div style={{marginTop:'100px',display:'flex',justifyContent:'center'}}>

      {/* <h1>{MovieDetails.title}</h1> */}
      <iframe ref={videoRef} width="70%" height="515" margin='30px' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true"></iframe>
    </div>
  );
}

export default Trailler