import RestaurentCard from "./RestaurentCard";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurentData from "../utils/useRestaurentData";

const Body = () => {
  //local state variable-super powerful variable
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurent, filterRestaurent, setFilteredRestaurant } =
    useRestaurentData();
  return listOfRestaurent?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="button-container">
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurants..."
          />
          <button
            className="search-button"
            onClick={() => {
              const filtered = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* we are mapping is restaurent by id  */}
        {filterRestaurent.map(
          (
            restaurent, // we can use index as second parameter but react says it is bad practice so will use id here
          ) => (
            <Link
              key={restaurent.brand_name}
              to={`/restaurent-menu/${restaurent.brand_id}`}
            >
              <RestaurentCard
                resData={restaurent} // we are storing restaurent value in resdata prop
              />
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default Body;
