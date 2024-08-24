import React, {  useEffect, useState } from 'react'
import ResList,{WithPromotedLabel} from './ResList'
import { RES_API } from '../utils/constants'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'

const MainContainer = () => {

// console.log(setuserName);
const [resList,setresList]=useState(null)
const [tempResList,settempResList]=useState([])
const [searchValue,setsearchValue]=useState([])

const RestaurantCardPromoted=WithPromotedLabel(ResList)

const fetchData =async()=>{
  const data=await fetch(RES_API)
  const response = await data.json()
  console.log(response);
  setresList(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  settempResList(response?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
 
  // settempResList(resList)
}
useEffect(()=>{
  fetchData()
},[])

// console.log(resList);
if(!resList){
  return <Shimmer/>
}
  return (
    <div className='w-[100%] md:w-[85%] md:mx-auto my-[3rem] mx-0'>
<div className=' w-full md:text-start text-center mb-24 flex flex-wrap items-center justify-between    '>
<div>    <input type='text' placeholder='Enter Restaurant Name' 
    className='px-8 text-left text-[1.6rem] py-4 border border-black'
//  change={searchValue}
    onChange={(e)=>{setsearchValue(e.target.value)}}
    />
  <button className='bg-green-600 text-white md:ml-4  font-bold md:text-[1.7rem] text-[1rem] md:py-4 md:px-10 px-5 py-2 rounded-[3rem]'
  onClick={()=>{
    const filteredData=resList?.filter((e)=>{
      return(e.info.name.toLowerCase().includes(searchValue?.toLowerCase()))
    })
    settempResList(filteredData)
  }}
  >
    Search</button> 
   
   
   
   
   
   
   
   
   
   
   
    <button
    className="bg-green-600 text-white md:ml-4  font-bold md:text-[1.7rem] text-[1rem] md:py-4 md:px-10 px-5 py-2 rounded-[3rem]"
    onClick={()=>{
   const filteredData=resList?.filter((info)=>{
    return (info?.info?.avgRating>4)})
// console.log(filteredData);
settempResList(filteredData)
    }
  }

    >Filter</button></div>


</div>

<div  className='flex flex-wrap gap-8 md:gap-16  justify-center items-center'>
    {/* {
tempResList?.map((data,index)=>(
  <Link to={"menu/"+data?.info?.id } key={data?.info?.id}>
  {data?.info?.promoted}? <WithPromotedLabel   resInfo={data}/>:<ResList   resInfo={data}/>
  </Link>
))
    } */}

{
  tempResList?.map((data,index)=>(
<Link to={"menu/"+data?.info?.id }  key={data?.info?.id}>
{data?.info?.promoted?(<RestaurantCardPromoted  resInfo={data}/>)
: 
(<ResList resInfo={data}/>)
}
</Link>

  ))
}
</div>


    </div>
  )
}

export default MainContainer