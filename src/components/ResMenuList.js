import React, { useEffect, useState } from 'react'
import ItemInMenu from './ItemInMenu';
import { FaArrowCircleDown } from "react-icons/fa";
const ResMenuList = ({info,showItems,setshowIndex}) => {
  // console.log("after ths");
  // console.log(showItems);
  // const [toShow,settoShow]=useState(showItems)
// console.log(info);
const [resItemList,setresItemList]=useState([])
useEffect(()=>{
    setresItemList(info?.card?.card?.itemCards)
},[])
// console.log(resItemList);

const handleClick=()=>{
  // console.log("clicked ");
setshowIndex()

}


  return (
    <div>
        <div className='flex justify-between  shadow-lg drop-shadow-lg p-8 cursor-pointer shadow-[#ada0a0] font-bold text-3xl' onClick={handleClick}>
            <span>{info?.card?.card?.title}({info?.card?.card?.itemCards?.length})</span>
            <FaArrowCircleDown />
        </div>
  <div className=' p-6'>
  {
         resItemList?.map((data,index)=>(
          showItems &&<ItemInMenu info={data} key={data?.card?.info?.id} />
        ))   
        }
  </div>
    </div>
  )
}

export default ResMenuList