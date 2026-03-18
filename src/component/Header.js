import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // when it 1st render btn name takes login vlaue but whne you click state changed component render and variable stores new value logout in btnvalue. it means whever you click on button  btnvalue will chnage
  useEffect(() => {
    console.log("useEffect called");
  });

  return (
    <div className="flex justify-between items-center p-4 bg-white text-black shadow-md">
      <div className="logo-container">
        <img className="w-24 h-24" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex list-none gap-5" l>
          <li className="text-lg cursor-pointer transition-colors duration-300 hover:text-blue-600">
            online status :{onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
