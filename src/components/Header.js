import React, { useEffect, useState } from "react";
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart } from "react-icons/hi";
const Header = () => {

  const[logInfo,setlogInfo]=useState("Login")

  const {setuserName}=useContext(UserContext)
const handleLogIn=()=>{
  if(logInfo==="Login"){
    setlogInfo("LogOut")
  }
  else{
    setlogInfo("Login")
  }
}
  const isOnline=useOnline()
  const {loggedInUser}=useContext(UserContext)
  // console.log(userData);
  // console.log(isOnline);

  // subscribing the store using Selector
  const cartItems=useSelector((store)=>store.cart.items)
console.log(cartItems);
// console.log(useSelector((store)=>store?.cart?.Items));
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
          <Link to="about-us">  <li>About Us</li> </Link>
          <Link to="/cartItems">
          
            <li className="flex items-center  justify-between gap-2 font-bold text-4xl"> <span>{<HiOutlineShoppingCart />}</span>   <span>    ({cartItems?.length})</span></li>
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
      <button className=" bg-black text-white font-bold text-xl px-6 py-3 rounded-2xl" onClick={handleLogIn}>
      {logInfo}
    </button>
     <button className="bg-black text-white font-bold text-xl px-6 py-3 rounded-2xl">{loggedInUser}</button>
      </div>
    </div>
  );
};

export default Header;
