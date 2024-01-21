import AboutUser from "./AboutUser";
import AboutClass from "./AboutClass.js";

const About = () => {
    return (
        <div>
        <h1>About</h1>
        <h2>This is about Page</h2>
           <AboutUser name={"Pratik"} location={"Karad"} />
           <AboutClass name={"Pratik"} location={"Karad"} />

        </div>
    )
}

export default  About;