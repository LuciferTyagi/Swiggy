import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utlis/useRestaurantMenu";

const ResMenu = () =>{

    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    
        if(resInfo === null) return (<Shimmer />)
        

        const {name , cuisines , costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;  
        const {cards}  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
        // console.log(cards)
       
        return (
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(",")} . {costForTwoMessage}</p>
        
        <ul>

        {/* {cards.map((card, index) => (
                card.card.card.title && <li key={index}>{card.card.card.title}</li>
            ))} */}


            {cards.map( (item ,id) => item.card.card.title && <li key={item.card.card.itemCards[0].card.info.id}>{item.card.card.title} -₹{item.card.card.itemCards[0].card.info.price/100}</li>)}
            
             
           
           
        </ul>
    </div>
);
};


export default ResMenu;