import { useState  , useEffect} from "react";

const ResMenu = () => {

const [resinfo , setResInfo] = useState(null);

useEffect( () => {
  fetchData();
}, [] )

const fetchData = async () => {
   const resCard = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437");
   const resInfo = await resCard.json();
   setResInfo(resInfo);
   console.log(resInfo)
}


    return (
        <>
        {/* <h1>{resInfo?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name}</h1> */}
        <h3>Rating and pricr</h3>
        </>
    )
}

export default ResMenu;