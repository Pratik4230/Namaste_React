import RestaurantCard , {withPromotedLable} from "./RestaurantCard";
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer'
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {


const [gotList, setGotList] = useState([]);

const [filterdList , setFilterdList] = useState([]);

const [searchText , setSearchText] = useState("");

const RestaurantCardPromoted = withPromotedLable(RestaurantCard);

useEffect( () => {
    fetchData();
    console.log("got it")
    console.log(gotList)
} , [] );            
    


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

return (
        <main className='  m-1 p-1'>
            <div > 
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

      <section className='flex flex-wrap'>
{filterdList.map( (re) => (
    <Link
     key ={re.info.id}
      to={"/restaurants/" + re.info.id}
      > 

      {re.info.promoted ? (
         <RestaurantCardPromoted resData={re} />
          ) : (
             <RestaurantCard  resData={re}/>
              ) }
       
       </Link>
     ) )} 
      </section>
        </main>
    )
}

export default Body;
