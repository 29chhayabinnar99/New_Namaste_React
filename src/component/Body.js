import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  //local state variable-super powerful variable
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  // const [StateVeriable, TheFuntionToUpdateTheState]=useState(IntialValue)
  const [searchText, setSearchText] = useState("");
  const [filterRestaurent, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.eatsure.com/v1/api/get_all_brands?&store_id=10226&city_id=9017&is_preorder=true&start_time_slot=2026-03-06T12:45:00&end_time_slot=2026-03-06T13:45:00",
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5288974&lng=73.8665321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const convertedJson = await data.json();
    console.log(convertedJson);
    // const restaurentData =
    //   convertedJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;
    const restaurentData = convertedJson?.data.data;
    console.log(restaurentData);
    setListOfRestaurent(restaurentData);
    setFilteredRestaurant(restaurentData);
  };

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
