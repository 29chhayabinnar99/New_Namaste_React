import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5288974&lng=73.8665321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const convertedJson = await data.json();
    console.log(convertedJson);
    const restaurentData =
      convertedJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurent(restaurentData);
    setFilteredRestaurant(restaurentData);
  };

  return listOfRestaurent?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="button-contianer">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            console.log(searchText);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            console.log(searchText);
            const filterRestaurent = listOfRestaurent.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()),
            );
            setFilteredRestaurant(filterRestaurent);
          }}
        >
          Search
        </button>
        <button
          className="search"
          onClick={() => {
            const filteredTop = listOfRestaurent.filter(
              (res) => res?.info?.avgRating > 4.5,
            );
            setFilteredRestaurant(filteredTop);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {/* we are mapping is restaurent by id  */}
        {filterRestaurent.map(
          (
            restaurent, // we can use index as second parameter but react says it is bad practice so will use id here
          ) => (
            <RestaurentCard
              key={restaurent?.info?.id} // <-- unique id for each restaurant
              resData={restaurent} // we are storing restaurent value in resdata prop
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Body;
