import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MENU_API } from '../utils/constants'
import ResMenuList from './ResMenuList'
const ResMenuContainer = () => {

const {id}=useParams()
// console.log(id);
// console.log(param);

const [showIndex,setshowIndex]=useState(null)

const [resInformation,setresInformation]=useState([])
const [resMenu,setresMenu]=useState([])
const fetchData=async()=>{
    const data =await fetch(MENU_API+id)
    const response =await data?.json()
    // console.log(response);
    // console.log(response?.data?.cards[2]?.card?.card?.info);
    setresInformation(response?.data?.cards[2]?.card?.card?.info)
setresMenu(response?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
}
useEffect(()=>{
fetchData()
},[])
// console.log(resInformation);
// console.log(resMenu);
const {name,costForTwoMessage,avgRating,cuisines,locality,totalRatingsString,expectationNotifiers}=resInformation

// console.log(expectationNotifiers);
const{enrichedText}=expectationNotifiers[0]
  return (
    <div className='p-24 md:w-[60%] mx-auto '>

<ul className='flex gap-2 text-[#4f4d4d]'>
    <Link to="/"><li>Home     </li></Link>
    
    <li> / </li>
    <Link to=""><li>Delhi </li></Link>
    <li> / </li>
    <Link to="/menu/:id"><li>Pizza </li></Link>

</ul>

<div  className='mx-10  leading-[3rem] mb-16'>
    <h1 className='text-[2.5rem] font-bold m-8 md:text-start text-center'>{name}</h1>
    <div className='border border-[#D9DADB] rounded-3xl md:p-8 p-4 shadow-xl shadow-[#a3a3a4]'>
        <h2 className='font-bold md:text-3xl text-[1.29rem]'> ⭐{avgRating}({totalRatingsString}) * {costForTwoMessage}</h2>
        <Link><p className='md:text-[1.4rem] text-[1rem] text-[#FF5200] underline font-bold'>{cuisines}</p></Link>
        <p>{locality}</p>
        <hr className='text-[#767474] font-bold '></hr>
        <p className='text-[1.3rem]'>{enrichedText}</p>
    </div>
</div>

<div>
    <h2 className='font-semibold text-[1.65rem] text-center'>Menu</h2>

<div className='my-28'>
    {
        // controled components
        resMenu?.map((data,index)=>( 
            data?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"?
            <ResMenuList info={data} key={index}  
            showItems={index===showIndex?true:false} 
     
            setshowIndex={()=>setshowIndex(index)}
        
            />:""
        ))
    }
</div>
</div>
    </div>
  )
}

export default ResMenuContainer