import React from 'react'
import Header from './Header'
import usePlayingMovies from '../Hooks/usePlayingMovies'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {
  usePlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
      {/**
       MainContainer
           - VideoBackground
           - VideoTitle
       SecondaryContainer
           - MoviList * n
           - cards * n
       */}
    </div>
  )
}

export default Browse
