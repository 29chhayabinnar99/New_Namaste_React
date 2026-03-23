import RestaurentCard, { withHotDealLabel } from "./RestaurentCard";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurentData from "../utils/useRestaurentData";
import useOnlineStatus from "../utils/useOnlineStatus";
import { list } from "postcss";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const { logedInUserName, setUserName } = useContext(UserContext);
  console.log("logedInUserName in body", logedInUserName);
  console.log("setUserName in body", setUserName);
  //local state variable-super powerful variable
  const [searchText, setSearchText] = useState("");
  const { listOfRestaurent, filterRestaurent, setFilteredRestaurant } =
    useRestaurentData();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Offline, Please check your internet connection</h1>;

  //use HOC to wrap RestaurentCard and create a new component with hot deal label
  const RestaurentWithHotDeal = withHotDealLabel(RestaurentCard);

  return listOfRestaurent?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between items-center m-2 flex-wrap">
        <div className="flex px-3 w-full py-2 gap-5">
          <input
            className=" px-3 py-2 rounded-lg border border-gray-300 w-full hover:border-blue-500 text-base outline-none transition-all duration-300"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurants..."
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
            onClick={() => {
              const filtered = listOfRestaurent.filter((res) =>
                res.brand_name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
          <input
            className=" px-3 py-2 rounded-lg border border-gray-300 w-full hover:border-blue-500 text-base outline-none transition-all duration-300"
            type="text"
            value={logedInUserName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter User Name...."
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-5 p-5">
        {/* we are mapping is restaurent by id  */}
        {filterRestaurent.map(
          (
            restaurent, // we can use index as second parameter but react says it is bad practice so will use id here
          ) => (
            <Link
              key={restaurent.brand_name}
              to={`/restaurent-menu/${restaurent.brand_id}`}
            >
              {/* render */}
              {restaurent.discount_info.discount_value >= 50 ? (
                <RestaurentWithHotDeal resData={restaurent} />
              ) : (
                <RestaurentCard
                  resData={restaurent} // we are storing restaurent value in resdata prop
                />
              )}
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default Body;
