import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  let count = 0;
  // when it 1st render btn name takes login vlaue but whne you click state changed component render and variable stores new value logout in btnvalue. it means whever you click on button  btnvalue will chnage

  // if no dependency array => it will render every time of component
  // if dependency array present => [] => useEffect will call only on initial render
  // it dependency array is =>[btnName]=> useeefect will call every time when btnName is updated
  useEffect(() => {
    console.log("useEffect called");
  });
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
