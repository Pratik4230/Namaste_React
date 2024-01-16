
import { CART_URL , LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () => {

const [logInBtn , setLogInBtn] = useState("LogIn")
    return (
        <header className='header'>
            <div id='logo-container'> <img id='logo' src={LOGO_URL}></img> </div>

            <ul className='ul'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li id='cart'> <img id='cart-img' src={CART_URL} ></img> </li>

              <button className="log" 
                 onClick= { () => {
                    logInBtn === "LogIn" ? setLogInBtn("LogOut") : setLogInBtn("LogIn")
                  } }
                > {logInBtn} </button> 
            </ul>
        </header>
    )
}

export default Header;