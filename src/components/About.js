
import { Component } from "react";
import AboutClass from "./AboutClass.js";
import AboutUser from "./AboutUser.js";

class About extends Component{
    constructor (props) {
        super(props);
// console.log("parent constructor")
    }
componentDidMount(){
    // console.log("parent compo did mount ")
}
    render(){
        // console.log("parent render")
        return(
            <div>
            <h1>About</h1>
            <h2>This is about Page</h2>
            
               <AboutClass name={"first"} location={"Karad"} />
               <AboutUser name={"first"} location={"Karad"} />
            </div> 
        )
    }
}


export default  About;