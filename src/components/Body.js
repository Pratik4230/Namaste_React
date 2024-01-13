import RestaurantCard from "./RestaurantCard";
import { useState } from 'react';
import {resList}  from "../utils/mockData";


const Body = () => {

    // const [resList, setresList] = useState(resList);  X
const [ResList, setResList] = useState(resList);

    return (
        <main className='body'>
            <div> 
                <button className="btn" onClick={ () => {
                    let updated = ResList.filter( (res) => res.info.sla.deliveryTime < 25 );
                 setResList(updated);
                 console.log(updated);
                } 
                } >This is Button</button>
            </div>

      <section className='RestaurantContainer'>
      
     {ResList.map( (re) => (
      <RestaurantCard key ={re.info.id} resData={re} />
     ) )} 
      </section>
        </main>
    )
}

export default Body;