import React, { useEffect, useState } from 'react'
import { GIT_API } from '../utils/constants'


// class About extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Hlooooo</h1>
//       </div>
//     )
//   }
// }

const About=()=>{

  const [myInfo,setmyInfo]=useState([])
  useEffect(()=>{
    fetchData(myInfo)
  },[])
  const fetchData=async()=>{
const data=await fetch(GIT_API)
const response=await data.json()
console.log(response);
setmyInfo(response)
  }
  const {name,location,bio,avatar_url}=myInfo
  return(<div className='p-10 m-10'>
   

   <div className=' shadow-lg shadow-black w-[30rem] p-8'>
    <img src={avatar_url} alt='profile' className=''/>
    <div>
      <h1 className='font-bold text-3xl '>{name}</h1>
<h2 className='font-bold text-2xl'>{location}</h2>
<h3 className='text-xl font-semibold'>{bio}</h3>

    </div>
   </div>
  </div>)
}

export default About