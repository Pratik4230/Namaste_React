import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
   const {name , cuisines , avgRating , areaName , cloudinaryImageId} = resData?.info;
    return (
        
        <div className='Card'>
            <div> <img className='foodImage' src={IMG_URL+cloudinaryImageId}></img></div>
            <h1>{name}</h1>
            <h4>{cuisines.join()}</h4>
            <div className='otherInfo'>
                <span>{avgRating}</span>
                <span>{resData.info.sla.deliveryTime + "Mins"}</span>
                <span>{areaName}</span>
            </div>
        </div>
    )
}

export default RestaurantCard;