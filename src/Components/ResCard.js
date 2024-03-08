import leaf from "../Images/leaf.png"
import ratinglogo from "../Images/rating.png"
import { CDN_URL } from "../utlis/constant";


const ResCard = (props) => {
  
    const { resData } = props;
    const { name, cloudinaryImageId, avgRating } = resData?.info;
    const cuisineNames = resData?.info?.cuisines;
  
   
    

  
    return (
      <div className="res-card">
        <div className="res-logo">
          <img src={CDN_URL+ cloudinaryImageId} alt={name}></img>
        </div>
        <div className="card-info">
          <h2 className="cafe-name">
            {name}
            <img src={leaf} alt="Leaf" />
          </h2>
          <h3 className="rating">
            <img className="indicator" src={ratinglogo} alt="Rating Indicator" />
            {/* {rating.rating_text} . {deliveryTime} */}
            {avgRating}
          </h3>
          {/* Displaying cuisine names with comma separation */}
          {Array.isArray(cuisineNames) && (
          <p className="para">{cuisineNames.join(', ')}</p>
        )}
          
        </div>
        <button className="order">Buy</button>
      </div>
    );
  };
  
  export default ResCard;
  
  