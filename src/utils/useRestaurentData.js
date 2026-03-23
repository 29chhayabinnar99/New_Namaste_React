import { useState, useEffect } from "react";

const useRestaurentData = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filterRestaurent, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.eatsure.com/v1/api/get_all_brands?&store_id=10226&city_id=9017&is_preorder=true&start_time_slot=2026-03-06T12:45:00&end_time_slot=2026-03-06T13:45:00",
    );
    const convertedJson = await data.json();
    const restaurentData = convertedJson?.data.data;
    setListOfRestaurent(restaurentData);
    setFilteredRestaurant(restaurentData);
  };

  return { listOfRestaurent, filterRestaurent, setFilteredRestaurant };
};
export default useRestaurentData;
