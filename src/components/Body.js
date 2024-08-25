import React, { lazy, useState } from 'react'
import { Outlet,createBrowserRouter } from 'react-router-dom';
import Header  from './Header';
// import About from './About';
import Contact from'./Contact'
import MainContainer from './MainContainer';
import ResMenuContainer from './ResMenuContainer';
import UserContext from '../utils/UserContext';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
// import CartItems from './CartItems';
import { Suspense } from 'react';
import About from './About';

const CartItems=lazy(()=>(import('./CartItems')))
function Body() {
  const [userName,setuserName]=useState("Kaju")


  // const CartItems=lazy(()=>import('./CartItems'))
  // const CartItems=lazy(()=>import('./CartItems'))


  return (
<Provider store={appStore}>
<UserContext.Provider value={{loggedInUser:userName,setuserName}}>
< div className=''>
    <Header/>
    <Outlet/>  
     </div>
</UserContext.Provider>
</Provider>
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
              },
              {
                path:"/cartItems",
                element:<Suspense fallback={"There is something Wrong"}><CartItems/></Suspense>
              }

          ],
          // errorElement
      }
  ]
)


export default Body