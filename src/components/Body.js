import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {


const [gotList, setGotList] = useState([]);

const [filterdList , setFilterdList] = useState([]);

const [searchText , setSearchText] = useState("");

useEffect( () => {
    fetchData();
    console.log("got it")
} , [] );            
     //


 const fetchData = async () => {
  const data = await fetch(  "https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437" );
  const gotData = await data.json();
    
  setGotList(gotData?.data?.success.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  setFilterdList(gotData?.data?.success.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);  //
  
  }

   const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <h1>check  your internet connection</h1>
  }

    return gotList.length === 0 ?  <Shimmer /> : 
    (
        <main className='body'>
            <div> 
                <button className="btn" onClick={ () => {
                    let updated = gotList.filter( (res) => res.info.sla.deliveryTime < 30 );
                 setFilterdList(updated);
                 console.log(updated);
                } } >Less deliveryTime</button>

<input type="text" className="search-box"  value={searchText}
 onChange={ (e) => { setSearchText(e.target.value)
}} />

  <button onClick={ () => {
    console.log(searchText);

    const neww = gotList.filter((res) => 
    res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
setFilterdList(neww);
  } }
>Search</button>

            </div>

      <section className='RestaurantContainer'>
{filterdList.map( (re) => (
    <Link key ={re.info.id} >  <RestaurantCard  resData={re} /> </Link>
     ) )} 
      </section>
        </main>
    )
}

export default Body;
