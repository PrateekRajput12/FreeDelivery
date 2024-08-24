import React from "react";
import {appLayout} from '../src/components/Body'
import {RouterProvider} from 'react-router-dom'
function App() {
  return (
   <>
      <RouterProvider router={appLayout}/>
      </>
  );
}



export default App;
