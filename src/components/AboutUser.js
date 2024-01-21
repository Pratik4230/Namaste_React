import { useState } from "react";

const AboutUser = (props) => {

const [count, setCount] = useState(0);
const [count2, setCount2] = useState(2);
 
    const {name , location} = props; 
    return (
        <div className="userInfo" >
            <h1>count : {count}</h1>
            <h1>count2 : {count2}</h1>
            <h1>Name : {name}</h1>
       <h2>Location : {location} </h2>
       <h3>Contact</h3>

        </div>
    )
}

export default AboutUser;