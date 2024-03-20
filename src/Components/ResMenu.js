import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import ResCategory from "./ResCategory";

const ResMenu = () =>{

    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    
        if(resInfo === null) return (<Shimmer />)
        

        const {name , cuisines , costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;  
        const {cards}  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

        const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

        // console.log(categories); 

        
       
        return (
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(",")} . {costForTwoMessage}</p>
        
    {/* Accordions */} 
      {categories.map((category) => {
       return <ResCategory data={category?.card?.card}/>
      })}

    </div>
);
};


export default ResMenu;