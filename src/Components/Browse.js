import React from 'react'
import Header from './Header'
import usePlayingMovies from '../Hooks/usePlayingMovies'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcoming from '../Hooks/useUpcoming';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  usePlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcoming();

  return (
    <div>
      <Header />
    {showGptSearch ?  
    <GptSearchPage />
    : 
    <>
      <MainContainer />
      <SecondryContainer />
      </>
      }
      
    </div>
  )
}

export default Browse
