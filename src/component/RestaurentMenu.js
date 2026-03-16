import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
const RestaurentMenu = () => {
  //const [menus, setMenus] = useState(null);
  const { brand_id } = useParams();
  console.log(brand_id);
  const menus = useRestaurentMenu(brand_id);
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     `${MENU_API_URL_START}${brand_id}${MENU_API_URL_URL_PARAMS}`,
  //   );
  //   const convertedJson = await data.json();
  //   setMenus(convertedJson);
  // };

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  if (!menus) return <Shimmer />;
  console.log(menus);
  const product = menus?.data?.collections?.[0]?.products?.[0];

  const brand_name = product?.brand_name;
  const description = product?.small_description || product?.big_description;

  return (
    <div className="Restaurent-Menu">
      <h1>{brand_name}</h1>
      <h4>{description}</h4>

      <h3>Menu</h3>
      <ul>
        {menus?.data?.collections?.[0]?.products?.map((p) => (
          <li key={p.product_id}>
            {p.product_name} - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
