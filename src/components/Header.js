
import { CART_URL , LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
// import onlineStatus from "../utils/useOnlineStatus"

const Header = () => {

    const onlineStatus = useOnlineStatus();
const [logInBtn , setLogInBtn] = useState("LogIn")
    return (
        <header className='flex justify-between align-middle'>
            <div > <img  className =' h-24' src={LOGO_URL}></img> </div>
           
            <ul className='flex mt-3 p-4 '  >

            <li className='m-3'>  Online Status : { onlineStatus ?  "✅" : "🛑" } </li>
                
                <li className='m-3' > 
                <Link to='/' >Home</Link> </li>
                <li className='m-3' >
                    <Link to='/about' >About</Link> </li>
                <li className='m-3' >
                <Link to='/contact' >ContactUs</Link> </li>
                <li className='m-3 -mt-2'> <img className ='h-14' src={CART_URL} ></img> </li>

              <button className="-mt-2" 
                 onClick= { () => {
                    logInBtn === "LogIn" ? setLogInBtn("LogOut") : setLogInBtn("LogIn")
                  } }
                > {logInBtn} </button> 
            </ul>
        </header>
    )
}

export default Header;