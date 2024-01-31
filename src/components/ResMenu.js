
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useResMenu from "../utils/useResMenu";
const ResMenu = () => {



const {resId} = useParams();

const resInfo = useResMenu(resId);


if (resInfo == null) {
    return <Shimmer/>
}
console.log(resInfo)
const {name , areaName , avgRatingString , costForTwo} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards  , "buovy");  
return (
        <>
        <h1>{name}</h1>
        <h3> {areaName} </h3>
        <p> {avgRatingString} </p>
        <p> {costForTwo / 100} </p>

        </>
    )
}

export default ResMenu;