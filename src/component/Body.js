import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
  function FilterResto(resList) {
    const filetertop = resList.filter(
      (restaurent) => restaurent.data.rating > 4,
    );
    console.log(filetertop);
    // resList.map((restaurent)=><RestaurentCard key={restaurent.data.id})
  }
  return (
    <div className="body">
      <button className="search">Top Rated Restaurents</button>
      <div className="res-container">
        {/* we are mapping is restaurent by id  */}
        {resList.map(
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
