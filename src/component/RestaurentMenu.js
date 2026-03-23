import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
const RestaurentMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { brand_id } = useParams();
  const menus = useRestaurentMenu(brand_id);

  if (!menus) return <h1>Loading...</h1>;
  const product = menus?.data?.collections?.[0]?.products?.[0];
  const categories = menus?.data?.collections;
  const brand_name = product?.brand_name;
  const description = product?.small_description || product?.big_description;

  return (
    <div className="m-5">
      <h1 className="text-2xl font-bold mb-4">{brand_name}</h1>
      <h4 className="text-xl text-gray-700">{description}</h4>
      <h3 className="text-lg font-semibold mb-2 text-center">Menu</h3>
      {categories.map((category, index) => (
        //controlled component
        <RestaurentCategory
          data={category}
          key={category.collection_id}
          showItems={index === showIndex ? true : false}
          // we are passing index to setShowIndex function so when we click on category it will set the index of that category in showIndex state variable and then we are comparing that index with current index of category if it is same then we are showing items of that category otherwise not
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
