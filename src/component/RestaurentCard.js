import { IMG_BASE_URL } from "../utils/constant";

const RestaurentCard = ({ resData }) => {
  //we are passing resdata as a props here
  //{ cloudinaryImageId, name, rating, cuisine, deliveryTime } Takes these specific properties from resData.data and creates variables with the same names.
  const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } =
    resData?.info;
  // ?. is called optional chaining. It safely accesses a property only if the object exists. Without ?., trying to access .data on undefined crashes the app. With ?., it returns undefined safely.

  //const RestaurentCard = (resName,cuisin, rating) => { this is same thing  thi is destructuring on the fly
  //{resName,cuisin, rating}=props; this is also same this is destructuring this is doen by js
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_BASE_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4 className="cuisine-rating">
        <span className="cuisine-text">{cuisines?.join(", ")}</span>
        <span className="rate">{avgRating} ⭐</span>
      </h4>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
};

export default RestaurentCard;
