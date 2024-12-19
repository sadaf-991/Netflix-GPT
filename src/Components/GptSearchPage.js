import React from 'react'
import GptSearchBar from './GptSearchBar';
import { BG_URL } from '../utils/constants';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearchPage = () => {
  return (
    <div className=''>
      <div className=''>
      <img alt="background-img" 
      className='absolute -z-10'
      src={BG_URL}/>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
