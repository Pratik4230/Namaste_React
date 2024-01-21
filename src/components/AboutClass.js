import React from "react";

class AboutClass extends React.Component{
constructor(props){
    super(props); 
}

    render(){
        
    const {name , location} = this.props;
        return (
            <div className="userInfo" >
            <h1>Name : {this.props.name}</h1>
       <h2>Location : {location} </h2>
       <h3>Contact</h3>

        </div>
        )
    }
    
}

export default AboutClass;