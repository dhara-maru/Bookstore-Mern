import React from 'react'
import googlelogo from '../assets/googlelogo.png'
import { Link, replace } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Login = () => {

    const { login, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Logged In Successfully!");
            navigate(from, {replace:true})
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
       
    };
//signup using google
const handleRegister=()=>{
    loginWithGoogle()
    .then((result)=>{
        const user = result.user;
        alert("Account successfully created with Google!")
        navigate(from, {replace:true})
    })
    .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage); // Display error message
        console.error("Error:", errorMessage);
    });
}

  return (
    <div className="h-screen md:flex">
            {/* Left Side */}
            <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-yellow-400 to-orange-600 justify-around items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-7xl" style={{

fontStyle: 'normal',
fontFamily: '"Rubik Doodle Shadow", serif',
fontWeight: 900,
}}>Comic Con</h1>
                    <p className="text-white mt-1">
                    Discover & Trade Rare Comic Trasures!
                    </p>
                    <button
                        type="button"
                        className="block p-5 bg-black text-white mt-4 py-2 border-2 border-white font-bold mb-2"
                    >
                        Explore Books
                    </button>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>

            {/* Right Side */}
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form
                   onClick={handleLogin}
                    className="bg-white w-full max-w-md p-8 rounded-lg shadow-md"
                >
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">
                        Login to your account
                    </h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">
                        Welcome to ComicCon - India's Largest Comic Store
                    </p>

                    {/* Email Field */}
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M2.003 5.884l8 4.882 8-4.882A2 2 0 0016.743 4H3.257a2 2 0 00-1.254.884z"
                            />
                            <path d="M18 8.118l-8 4.882-8-4.882V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none w-full"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            className="pl-2 outline-none border-none w-full"
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </div>



                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="block w-full border-black border-2 bg-yellow-400 text-black py-2 font-semibold mb-2 hover:bg-yellow-400 transition duration-300"
                    >
                        Login
                    </button>


                    {/* login using google  */}
                    <hr />
                    <div className="flex w-full items-center flex-col my-5 gap-3">
                    <button onClick={handleRegister} className='block'>
                        <img src={googlelogo} className='w-10 h-10 inline-block mx-3' />
                        Login with Google
                    </button>
                    </div>

                    {/* Login Link */}
                    <p className="text-sm mt-4 text-center text-gray-600">
                        New to ComicCon?{' '}
                        <Link
                            to="/signup"
                            className="text-yellow-500 hover:underline font-bold"
                        >
                            Create an Account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
  )
}

export default Login
