import { useEffect, useState } from "react";
import { MENU_API_URL_START, MENU_API_URL_URL_PARAMS } from "./constant";
const useRestaurentMenu = (brand_id) => {
  const [menus, setMenus] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      `${MENU_API_URL_START}${brand_id}${MENU_API_URL_URL_PARAMS}`,
    );
    const convertedJson = await data.json();
    setMenus(convertedJson);
  };

  useEffect(() => {
    fetchMenu();
  }, []);
  return menus;
};
export default useRestaurentMenu;
