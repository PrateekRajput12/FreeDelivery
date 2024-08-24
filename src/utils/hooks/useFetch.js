import  { useEffect, useState } from 'react'

const useFetch = (API) => {

    const [data,setdata]=useState([])
    const fetchData=async()=>{
        const response=await fetch(API)
        const data =await response.json()
setdata(data)
    }
   useEffect(()=>{
    fetchData()
   },[])


  return data
}

export default useFetch