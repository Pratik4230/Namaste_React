import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react';
import {resList}  from "../utils/mockData";


const Body = () => {

    // const [resList, setresList] = useState(resList);  X
const [gotList, setGotList] = useState(resList);

useEffect( () => {
    console.log("got it")
    fetchData();
} , [] );

 const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437");
  const gotData = await data.json();
  console.log(gotData);
  setGotList(gotData.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
  }
//   const data = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");



    return (
        <main className='body'>
            <div> 
                <button className="btn" onClick={ () => {
                    let updated = gotList.filter( (res) => res.info.sla.deliveryTime < 25 );
                 setGotList(updated);
                 console.log(updated);
                } 
                } >This is Button</button>
            </div>

      <section className='RestaurantContainer'>
{gotList.map( (re) => (
      <RestaurantCard key ={re.info.id} resData={re} />
     ) )} 
      </section>
        </main>
    )
}

export default Body;