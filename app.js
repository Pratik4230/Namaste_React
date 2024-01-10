import React from 'react';
import ReactDOM from 'react-dom/client';


 const JsxHeading = () =>  (
 <h1 className='heading'>
 this is jsx
  in  
  multuple line</h1> );
   

   //functional component
   const FunctCompo = () => (
    <div> 
        {/* component composition = compo in compo */}
        {JsxHeading()}
         <JsxHeading/>
         <JsxHeading></JsxHeading>
         <h2>{ 4 + 3 }</h2>
        <h1> function that return Jsx  Element </h1>
    </div> );


 const root = ReactDOM.createRoot(document.getElementById('root'))

 root.render(<FunctCompo/>);
