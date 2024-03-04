import ResCard from "./ResCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer.js";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7336001&lng=77.7602283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRes(restaurants);
        setFilteredRes(restaurants);
    };

    return listOfRes.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            const filterRes = listOfRes.filter(
                                (resData) => resData.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRes(filterRes);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const topRatedRes = listOfRes.filter(
                            (resData) => parseFloat(resData.info.avgRating) > 4.2
                        );
                        setFilteredRes(topRatedRes);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRes.map((restaurant, index) => <ResCard key={index} resData={restaurant} />)}
            </div>
        </div>
    );
}

export default Body;
