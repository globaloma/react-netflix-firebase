import React, { useState } from "react";
import { Link } from "react-router-dom";
import {UserAuth} from "../context/Authcontext"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
const {user, signUp} = UserAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      await signUp(email,password)
      console.log(user)
      navigate("/")
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/1f8bf493-1be8-440e-b5ac-1b2985346176/NG-en-20230508-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="fixed top-0 left-0 bg-black/20 bg-gradient-to-r from-black  w-full h-screen">
          <div className=" bg-black/80 max-w-[450px] mx-auto mt-20 rounded fixed: h-[500px] z-20 text-white">
            <div className="max-w-[320px] py-16 mx-auto px-4">
              <h1 className="text-3xl font-bold text-center mb-2">Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <input onChange={(event)=>{setEmail(event.target.value)}} className="bg-gray-600 p-3 my-2 w-full rounded" type="email" autoComplete="email" placeholder="Email..."/>
                <input onChange={(event)=>{setPassword(event.target.value)}} className="bg-gray-600 p-3 my-2 w-full rounded" type="password" autoComplete="current-password" placeholder="Password..."/>
                <button className=" bg-red-600 px-4 py-2 rounded w-full mt-4 font-bold">Sign Up</button>
                <div className="text-gray-500 text-sm flex justify-between items-center my-4">
                  <p><input type="checkbox" className="mr-2" /> Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className="mt-8"><span className="text-gray-500 ">Already Suscribed to Netflix? 
                  </span><Link to="/signIn" className="text-white"> Sign In</Link>
                  </p>
              </form>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default SignUp;
