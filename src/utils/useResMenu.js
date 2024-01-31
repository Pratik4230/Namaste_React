import { useEffect, useState } from "react";
import { RES_MENU_LINK } from "./constants";
const useResMenu = () => {
   const [resInfo , setResInfo] = useState(null)
    useEffect( () =>{
        fetchData();
    }, [] )
    
const fetchData = async () =>  {
   const data = await fetch(RES_MENU_LINK);
   const json = await data.json();
   setResInfo(json.data);
   
}
    return resInfo;
} 

export default useResMenu;