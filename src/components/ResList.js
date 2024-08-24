import React from 'react'
import { IMG_CDN } from '../utils/constants';
 
const ResList = (props) => {
    // console.log(resInfo)
    // console.log("calld");;
    const {resInfo}=props
    const {name,avgRating,cuisines,cloudinaryImageId,costForTwo}=resInfo?.info
  return ( 
    <div className='w-[25rem] h-[25rem] rounded-[2rem] overflow-hidden'>
        <img src={IMG_CDN+cloudinaryImageId} alt='resImg' className='w-full h-[60%] rounded-[2rem]'/>
       <div className='ml-[0.6rem]'>
       <h1 className='font-bold text-3xl'>{name}</h1>
        <h2 className='text-2xl font-bold'>
            <span>⭐{avgRating}         </span>
            <span>{costForTwo}</span>
        </h2>
        <p className='text-2xl font-semibold'>{cuisines.join(" ")}</p>
       </div>
    </div>
  )
}

export const WithPromotedLabel=(ResList)=>{
  return(props)=>{
    return(
      <div>
        <label className='bg-black text-white font-bold text-md px-5 py-3 absolute rounded-2xl'>Promoted</label>
        <ResList {...props}/>
      </div>
    )
  }
}


export default ResList

