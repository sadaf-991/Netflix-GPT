import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";



const usePlayingMovies = () => {

  const dispatch = useDispatch();
const getMovieData = async () => {
    const data = await
     fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
       API_OPTIONS
      );
    const json = await data.json();
    
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getMovieData();
  },[]);
};

export default usePlayingMovies;
