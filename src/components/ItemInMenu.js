import React from 'react'
import { IMG_CDN } from '../utils/constants';

const ItemInMenu = ({info}) => {
    console.log(info);
    const {isVeg,name,description,imageId,price,category,defaultPrice,ratings}=info?.card?.info
    const {rating,ratingCountV2}=ratings?.aggregatedRating
  return (
    <div className='flex  py-20 justify-between items-center border-b border-gray-400 '>
  
<div className='leading-[2.5rem]'>
<p className='text-3xl'>{isVeg?"🟢":"🔴"}</p>
        <h2 className='font-bold text-2xl'>{name}</h2>
        <h2 className='font-bold text-2xl'>₹{price?price/100:defaultPrice/100}</h2>
        <p className='font-semibold tetx-xl'><span className='text-green-600 text-xl font-bold'>⭐{rating} </span>({ratingCountV2})</p>
<p className='max-w-[90%] text-[1.6rem] md:block hidden'>{description}</p>
</div>
<div className='relative flex justify-center items-center flex-col'>
{imageId?<img src={IMG_CDN+imageId} className='md:min-w-[18rem] md:max-w-[18rem] max-w-[10rem] min-w-[10rem] h-[14rem] rounded-3xl '/>
:""}
{imageId?<button className='bg-black text-white  md:px-10 md:py-4 px-6 py-2 font-bold md:text-2xl text-xl md:absolute md:top-44 md:left-[4.7rem] rounded-3xl  '>Add+</button>
:
<button className='bg-black text-white  md:px-10 md:py-4 px-6 py-2 font-bold md:text-2xl text-xl md:absolute md:top-12 md:-left-56  rounded-3xl  '>Add+</button>

}</div>

    </div>
  )
}

export default ItemInMenu