import { useEffect, useState } from "react"

const useOnline=()=>{


    const [indicator,setindicator]=useState(true)


useEffect(()=>{
    window.addEventListener("online",()=>{
        setindicator(true)
    })
window.addEventListener("offline",()=>{
    setindicator(false)
})
},[])


    return indicator
}

export default useOnline