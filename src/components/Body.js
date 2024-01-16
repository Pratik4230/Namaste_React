import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer'

const Body = () => {


const [gotList, setGotList] = useState([]);

const [filterdList , setFilterdList] = useState([]);

const [searchText , setSearchText] = useState("");

useEffect( () => {
    fetchData();
    console.log("got it")
} , [] );

 const fetchData = async () => {
  const data = await fetch(  "https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559" );
  const gotData = await data.json();
    
  setGotList(gotData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  setFilterdList(gotData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  console.log(gotData);
  }


    return gotList.length === 0 ?  <Shimmer /> : 
    (
        <main className='body'>
            <div> 
                <button className="btn" onClick={ () => {
                    let updated = gotList.filter( (res) => res.info.sla.deliveryTime < 25 );
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
      <RestaurantCard key ={re.info.id} resData={re} />
     ) )} 
      </section>
        </main>
    )
}

export default Body;