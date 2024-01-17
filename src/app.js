import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from  './components/Body';
import About from './components/About';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';


const AppLayout = () => {
    return (
        <div id ="app" >
          <Header/>
          <Body/>
        </div>
    )
}

const router = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
  },

  {
    path : "/about",
    element : <About/>
  }
])



 const root = ReactDOM.createRoot(document.getElementById('root'))

 root.render(<RouterProvider router = {router}/>
 );
