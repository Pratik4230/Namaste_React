import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
   const {name , cuisines , avgRating , areaName , cloudinaryImageId} = resData?.info;

    return (
        
        <div className=' pl-7 pt-3 bg-slate-400 m-2 hover:bg-gray-50 shadow-neutral-800 shadow-lg h-[450px] w-[18.5vw] rounded-xl '>
            <div className="w-52 " > <img className='m-1 p-1 h-60 rounded-lg ' src={IMG_URL+cloudinaryImageId}></img></div>
            <h1 className="m-3 " >{name}</h1>
            <h4 className=" mb-5 text-clip " > {cuisines.join()}</h4>
            <div className='otherInfo'>
                <span className="m-1" >{avgRating}</span>
                <span className="m-1" >{resData.info.sla.deliveryTime + "Mins"}</span>
                <span className="m-1" >{areaName}</span>
            </div>
        </div>
    ) 
}

 export const withPromotedLable = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
        };
 };

export default RestaurantCard;