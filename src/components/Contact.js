import { useEffect } from "react";

const Contact = () => {

    useEffect( () => {
       const timr = setInterval( () => {
            console.log("  abcc")
        },1000 );
        console.log("useeffet");
       
return () => {
     clearInterval(timr);
     console.log("return")
};
    }  ,[]);
    console.log("redrer")


    return (
        <div>
            <h1>Contact</h1>
          <h2>This is contact page</h2>
        </div>
    )
}

export default Contact;