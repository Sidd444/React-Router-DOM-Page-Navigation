import React from "react"
import {Link,NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex justify-between mt-2 mb-1">
      <button className="ml-12 h-10 bg-black pb-10 mr-12">
        <Link to='/dashboard'>
        <img
          id="nav-img"
          className="h-24 w-20"
          src="https://upskillmafia.com/mern/assets/logo-B822Tgcs.svg"
          alt="logo"
        /></Link>
      </button>
      <button className="ml-96 text-2xl h-10 py-1 bg-black text-white font-bold">
        <NavLink
        className={({isActive})=>(
          `${isActive ? "text-sky-700":"text-white"}`
         )}
        to='/'
        >Home</NavLink>
      </button>
      <button className="text-white bg-green-500 ml-96 h-10 w-20 py-1 px-1 rounded font-bold">
        <NavLink 
        className={({isActive})=>(
          `${isActive ? "text-blue-700":"text-white"}`
         )}
        to='/login'>Log In</NavLink>
      </button>
      <button className="text-white bg-green-500 ml-1 mr-8 h-10 w-20 py-1 px-1 rounded font-bold">
        <NavLink 
        className={({isActive})=>(
          `${isActive ? "text-blue-700":"text-white"}`
         )}
        to='/signup'>Sign Up</NavLink>
      </button>
    </div>
  );
}
