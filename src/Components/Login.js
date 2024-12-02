import { useState } from "react";
import Header from "./Header";

const Login = () => {

const [isbtnClicked, setIsbtnClicked] = useState(true);

const toggleSignup = () => {
    setIsbtnClicked(!isbtnClicked);
    
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

            
            <form className='rounded-lg absolute bg-black bg-opacity-80 h-auto lg:w-[25rem] w-[20rem]  my-36 p-12 mx-auto right-0 left-0'>
             <h1 className="text-white font-bold text-3xl my-3"
             >{isbtnClicked ? "Sign In" : "Sign Up"}</h1>

             {!isbtnClicked && (<input className='bg-gray-600 border border-black w-[15rem] lg:w-[20rem] rounded-md p-4 m-3 mx-auto font-semibold text-white'
              type="text" placeholder='Name' />
             )}
            
             <input className='bg-gray-600 border border-black w-[15rem] lg:w-[20rem] rounded-md p-4 m-3 mx-auto font-semibold text-white'
              type="email" placeholder='Enter your email' />

             <input className='bg-gray-600 border border-black w-[15rem] lg:w-[20rem] rounded-md p-4 m-3 mx-auto font-semibold text-white'
             type="password" placeholder='Enter your password' />
             
             
             <button className='rounded-md p-2 m-3 px-20 mx-auto  w-[15rem] lg:w-[20rem] bg-red-600 text-white font-semibold'
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