import React, { useState } from 'react'
import { Outlet,createBrowserRouter } from 'react-router-dom';
import Header  from './Header';
import About from './About';
import Contact from'./Contact'
import MainContainer from './MainContainer';
import ResMenuContainer from './ResMenuContainer';
import UserContext from '../utils/UserContext';
function Body() {
  const [userName,setuserName]=useState("Kaju")
  return (
<UserContext.Provider value={{loggedInUser:userName,setuserName}}>
< div className=''>
    <Header/>
    <Outlet/>  
     </div>
</UserContext.Provider>
  );
}

export const appLayout=createBrowserRouter(
  [
      {
          path:"/",
          element:<Body/>,
          children:[
            {
              path:"/",
              element:<MainContainer/>
          },
              {
                  path:"about-us",
                  element:<About/>
              },
              {
                  path:"contact-us",
                  element:<Contact/>
              },
              {
                path:"menu/:id",
                element:<ResMenuContainer/>
              }

          ],
          // errorElement
      }
  ]
)


export default Body