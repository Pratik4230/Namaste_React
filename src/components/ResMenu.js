import { useState  , useEffect} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
const ResMenu = () => {

const [resInfo , setResInfo] = useState(null);

const {resId} = useParams();

useEffect( () => {
  fetchData();
}, [] )



const fetchData = async () => {
   const resCard = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=21001&isMenuUx4=true&submitAction=ENTER");
   const restData = await resCard.json();
   setResInfo(restData);
   
   setResInfo(restData)
}

if (resInfo == null) {
    return <Shimmer/>
}

const {name , areaName , avgRatingString , costForTwo} = resInfo?.data?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);  
return (
        <>
        <h1>{name}</h1>
        <h3> {areaName} </h3>
        <p> {avgRatingString} </p>
        <p> {costForTwo / 100} </p>

<h2> menu </h2>
        <ul>
          
                {itemCards.map((d) => {  
                  <li key={d.card.info.id}>
                   
                  {d.card.info.name}
                   </li>
                    })}   
        </ul>
        </>
    )
}

export default ResMenu;