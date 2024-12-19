import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants';


const GptSearchBar = () => {
  const languageKey = useSelector((store)=> store.lang.language);
 
  return (
    <div className=' pt-[7rem] px-[15rem] p-[20rem] '>
        <form className='bg-gray-900 rounded-md w-[48rem] h-[4rem] py-2 px-1'>
      <input className='bg-white p-2 w-[40rem] mr-4 rounded-md' type='text' 
      placeholder={lang[languageKey].gptSearchPlaceholder}/>
      <button
      
      className='bg-red-600 px-3 py-2 text-white font-bold rounded-md'>
        {lang[languageKey].search}
      </button>
      </form>
    </div>
  )
}

export default GptSearchBar;
