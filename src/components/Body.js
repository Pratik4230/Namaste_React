import RestaurantCard from "./RestaurantCard";
import { useState } from 'react';
import {resList}  from "../utils/mockData";


const Body = () => {


// const [resList, setResList] = useState(resList);


    return (
        <main className='body'>
            <div> 
                <button className="btn" onClick={ () => {
                    let updated = resList.filter( (res) => res.info.sla.deliveryTime < 25 );
                //  setResData(updated);
                 console.log(updated);
                } 
                
                } >This is Button</button>

                
            </div>

      <section className='RestaurantContainer'>
      
     {resList.map( (re) => (
      <RestaurantCard key ={re.info.id} resData={re} />
     ) )} 
      </section>

        </main>
    )
}

export default Body;