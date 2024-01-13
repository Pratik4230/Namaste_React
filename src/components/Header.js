import { CART_URL , LOGO_URL } from '../utils/constants';
const Header = () => {
    return (
        <header className='header'>
            <div id='logo-container'> <img id='logo' src={LOGO_URL}></img> </div>

            <ul className='ul'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li id='cart'> <img id='cart-img' src={CART_URL} ></img> </li>
            </ul>
        </header>
    )
}

export default Header;