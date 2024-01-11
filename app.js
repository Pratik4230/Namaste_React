import React from 'react';
import ReactDOM from 'react-dom/client';

/* 
components : 
Header - logo ,nav-items
Body - search , restaurent container : restaurantcard
Footer - copyright , links, address
*/
const Header = () => {
    return (
        <header className='header'>
            <div id='logo-container'> <img id='logo' src='https://img.freepik.com/premium-vector/healthy-food-logo_476121-98.jpg'></img> </div>

            <ul className='ul'>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li id='cart'> <img id='cart-img' src='https://media.istockphoto.com/id/1389111152/vector/shopping-cart-with-a-leaf-inside-circle-organic-shop-icon.jpg?s=612x612&w=0&k=20&c=TjNiLnPB7eUEni6mlvyTWd80LJdO8zig5DmKiHz8Lkk='></img> </li>
            </ul>
        </header>
    )
}

const RestaurantCard = () => {
    return (
        <div className='Card'>
            <div> <img className='foodImage' src='https://cdn.pixabay.com/photo/2016/02/02/15/33/dishes-1175493_1280.jpg'></img></div>
            <h1>NameOfFood</h1>
            <h4>someInfo</h4>
            <div className='otherInfo'>
                <span>Price</span>
                <span>Delivery time</span>
                <span>Rating</span>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <body className='body'>
            <div>search</div>

      <section className='RestaurantContainer'>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
       <RestaurantCard/>
      </section>

        </body>
    )
}

const AppLayout = () => {
    return (
        <div id ="app" >
          <Header/>
          <Body/>
        </div>
    )
}


 const root = ReactDOM.createRoot(document.getElementById('root'))

 root.render(<AppLayout/>);
