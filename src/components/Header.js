import React from "react";
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Header = () => {
  const {setuserName}=useContext(UserContext)

  const isOnline=useOnline()
  const {loggedInUser}=useContext(UserContext)
  // console.log(userData);
  // console.log(isOnline);
  return (
    <div
     className="sm:px-28 px-8 md:px-[15rem] border border-black bg-[#f0f0f0]  min-w-full items-center 
      flex justify-between md:p-[2rem] md:gap-10 text-[1.8rem]">
      <div>
        <img
        alt="Logo"
        className="md:w-[14rem] max-w-[14rem] "
         src={logo}
       />
        </div>
      <div>
        <ul className="   gap-16 hidden lg:flex">
        
          <li>{  isOnline?"🟢":"🔴"}</li>
          
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/contact-us">
            <li> Contact Us</li>
          </Link>
          <Link to="/about-us">
            <li>About Us</li>
          </Link>
          <li>   
    <input type='text' placeholder='Enter Your Name' 
    className='px-6 text-left text-[1.2rem] py-2 border border-black'
//  change={searchValue}
    onChange={(e)=>{setuserName(e.target.value)}}
    />
</li>

        </ul>
      </div>
      <div className="flex   justify-center items-center gap-8">
      <button className="">
      Login
    </button>
     <button>{loggedInUser}</button>
      </div>
    </div>
  );
};

export default Header;
