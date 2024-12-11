import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
