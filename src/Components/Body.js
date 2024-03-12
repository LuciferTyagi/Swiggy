import ResCard from "./ResCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import { LIST_API } from "../utlis/constant.js";
import useOnlineStatus from "../utlis/useOnlineStatus.jsx";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(LIST_API);

        const json = await data.json();
        console.log(json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRes(restaurants);
        setFilteredRes(restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline, check your internet connection</h1>
        );
    }

    return listOfRes.length === 0 ? (<Shimmer />) : (
        <div className="body bg-slate-100">
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className=" px-4 py-2 bg-green-100 m-4 rounded-lg"
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

                <div className="m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-green-100 rounded-lg"
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
               
            </div>
            <div className="grid grid-cols-4 gap-4">
                {filteredRes.map((restaurant, index) => (
                    <Link 
                        key={restaurant.info.id + index} // Combine id with index to ensure uniqueness
                        to={"/restaurants/" + restaurant.info.id}
                        className="flex-shrink-0" // Ensure the card does not shrink
                    >
                        <ResCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;
