import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utils/appSlice";
import { toggleGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { languageChange } from '../utils/languageSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate('/');
    })
    .catch((error) => {
      // An error happened.
      navigate("/error");
    })
  }; 

  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
          uid: uid, 
          email: email, 
          displayName: displayName,
          photoURL: photoURL,
        }));
    navigate("/browse");
      }else{
        dispatch(removeUser());
       navigate("/")
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  },[]);

  const handleGptSearch = () => {
    // toggle gpt search
    dispatch(toggleGptSearch());
  }

  const handleLanguageChange = (e) => {
     dispatch(languageChange(e.target.value))
  };

  return (
    <div>
    <div className='flex justify-between absolute py-2 px-8 bg-gradient-to-b from-black z-10 w-screen'>
      <img 
        className="w-44 "
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
       {user &&

       <div className='flex'>
       {showGptSearch && <select 
        onChange={handleLanguageChange}
        className='my-4 rounded-md bg-gray-800 border border-white text-white'>
        {SUPPORTED_LANGUAGES.map((lang)=> <option key={lang.id} value={lang.id}>{lang.name}</option>)}
        </select>}
        <button 
        onClick={handleGptSearch}
        className='bg-white text-red-600 font-bold px-2 my-4 ml-3 rounded-lg'>
          {showGptSearch ? "GPT Search" : "Homepage"}</button>
          <img 
          className='w-10 h-10 m-2 mt-3'
          alt='user-icon'
          src={user.photoURL}
          />
          <button
          onClick={handleSignOut}
          className='font-bold text-white'>
            (Sign Out)</button>
            </div>}
          </div>
          
    </div>
  )
}

export default Header
