import React, { lazy , Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from  './components/Body';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom';
import ResMenu from './components/ResMenu';

//chunking //Code Splitting //Dynamic Bundling  //Lazy Loading  //on demand Loading // dynamix import

const About = lazy( () =>  import('./components/About')  );

const AppLayout = () => {
    return (
        <div id ="app" >
          <Header/>
          <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([

  {
    path : '/',
    element : <AppLayout/>,
    children : [
      {
        path : '/',
        element : <Suspense fallback={ <h1>this is Suspence</h1> } >  <Body/>  </Suspense>
    },

        {
          path : '/about',
          element :  <Suspense fallback={ <h1>this is Suspence</h1> } >  <About/>  </Suspense>
      },
        {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/restaurants/:resId',
        element : <ResMenu/>
      }
    ],
   errorElement : <Error/>
  }  
  ])
  



 const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
 
 ;
