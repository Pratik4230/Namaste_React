import React from "react";

class AboutClass extends React.Component{
constructor(props){
    super(props); 

    this.state = {
        count : 0,
        count2 : 2
    };
    // console.log( this.props.name + " child constructor")

}
componentDidMount(){
    // console.log( this.props.name + "child compo did mount ")
}
componentDidUpdate(prevState, prevProps){
 if( this.state.count !== prevState.count ){
    console.log("compo did  update")
 }

 this.componentWillUnmount(
    clearInterval()
    //clear mess here
 )
}
    render(){
        // console.log(  this.props.name + "child render")
       
    const {name , location} = this.props;
    const {count , count2} = this.state;

        return (
            <div className="userInfo" >
                 <h1>count : {count}</h1>
            <h1>count2 : {count2}</h1>
            <button onClick={ () => {
                this.setState(
                    { count : this.state.count + 2}
                )
                   
                
            } } > click here</button>
            <h1>Name : {this.props.name}</h1>
       <h2>Location : {location} </h2>
       <h3>Contact</h3>

        </div>
        )
    }
    
}

export default AboutClass;