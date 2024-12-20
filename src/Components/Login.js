import { useState, useRef } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from '../utils/appSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

  const dispatch = useDispatch();
const [isbtnClicked, setIsbtnClicked] = useState(true);
const [errMsg, setErrMsg] = useState(null);


const name = useRef(null);
const email = useRef(null);
const password = useRef(null);

const toggleSignup = () => {
    setIsbtnClicked(!isbtnClicked);
    
}
const handlebtnClick = () => {
   
const msg = CheckValidData(email.current.value, password.current.value);
setErrMsg(msg)
console.log(msg);
if(msg) return;

if(!isbtnClicked){
    //sign up logic
    createUserWithEmailAndPassword(
    auth, 
    email.current.value,
    password.current.value
)
.then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, 
        photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
      })
      .then(() => {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      })
      .catch((error) => {
        setErrMsg(error.message)
      });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrMsg(errorCode + "-" + errorMessage);
    });
} else {
      //sign in logic  
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential)=>{
        //Signed in
        const user = userCredential.user;
        console.log(user);
        
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg(errorCode + "-" + errorMessage);
      });

}      
}




    return (
        <div >
            <div className="absolute ">
            <Header />
                <img 
                className="lg:h-[50rem] sm:h-[40rem] h-[40rem]"
                alt="bg-img"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg"/>
            </div>

            
            <form onSubmit={(e)=> e.preventDefault()}
            className='rounded-lg absolute bg-black bg-opacity-80 h-auto lg:w-[25rem] w-[20rem]  my-36 p-12 mx-auto right-0 left-0'>
             <h1 className="text-white font-bold text-3xl my-3"
             >{isbtnClicked ? "Sign In" : "Sign Up"}</h1>

             {!isbtnClicked && (
             <input ref={name}
             className='bg-gray-600 border border-black w-[15rem] lg:w-[20rem] rounded-md p-4 m-3 mx-auto font-semibold text-white'
              type="text" placeholder='Name' />
              )}

            {/**this email is the reference of this input */}
             <input ref={email}
             className='bg-gray-600 border border-black w-[15rem] lg:w-[20rem] rounded-md p-4 m-3 mx-auto font-semibold text-white'
             type="email" placeholder='Enter your email' />

             <input ref={password}
             className='bg-gray-600 border border-black w-[15rem] lg:w-[20rem] rounded-md p-4 m-3 mx-auto font-semibold text-white'
             type="password" placeholder='Enter your password' />
             <p className="text-red-600">{errMsg}</p>
             
             <button onClick={handlebtnClick}
             className='rounded-md p-2 m-3 px-20 mx-auto  w-[15rem] lg:w-[20rem] bg-red-600 text-white font-semibold'
             >{isbtnClicked ? "Sign In" : "Sign Up"}</button>
             <div className="text-white">
               <p onClick={toggleSignup}
                className="mt-5 ml-1 cursor-pointer ">
                {isbtnClicked ? "New to Netflix? Sign up now" : "Already registered? Sign In"}   
                </p>
             </div>
          </form> 
        
        </div>
    )
}
export default Login;