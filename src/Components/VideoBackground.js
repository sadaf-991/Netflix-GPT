import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = () => {

//fetch trailer video

const getMovieVides = async () => {
    const data = await fetch(
'https://api.themoviedb.org/3/movie/912649/videos?language=en-US', 
API_OPTIONS);
const json = await data.json();
console.log(json); 

const filterData = json.results.filter((video) => video.type === "Trailer");
const trailer = filterData[0];
console.log(trailer);
};

useEffect(()=>{
    getMovieVides();
},[]);

  return (
    <div>
    <h1>VBG</h1>
    </div>
  )
}

export default VideoBackground
