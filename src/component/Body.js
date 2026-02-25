import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //local state variable-super powerful variable
  const [listOfRestaurent, setListOfRestaurent] = useState(resList);
  // const [StateVeriable, TheFuntionToUpdateTheState]=useState(IntialValue)

  return (
    <div className="body">
      <button
        className="search"
        onClick={() => {
          const filteredTop = resList.filter((res) => res.data.rating > 4);
          setListOfRestaurent(filteredTop);
        }}
      >
        Top Rated Restaurents
      </button>
      <div className="res-container">
        {/* we are mapping is restaurent by id  */}
        {listOfRestaurent.map(
          (
            restaurent, // we can use index as second parameter but react says it is bad practice so will use id here
          ) => (
            <RestaurentCard
              key={restaurent.data.id} // <-- unique id for each restaurant
              resData={restaurent} // we are storing restaurent value in resdata prop
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Body;
