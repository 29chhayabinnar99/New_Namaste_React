import { IMG_BASE_URL } from "../utils/constant";

const RestaurentCard = ({ resData }) => {
  const {
    brand_name,
    description,
    logo,
    banner_image_es,
    main_offering,
    is_opened,
  } = resData;
  // ?. is called optional chaining. It safely accesses a property only if the object exists. Without ?., trying to access .data on undefined crashes the app. With ?., it returns undefined safely.

  return (
    <div className="res-card">
      <img className="res-logo" src={logo} alt={`${brand_name} logo`} />
      <h3>{brand_name}</h3>
      <h4>{main_offering}</h4>
      <p>{description}</p>
      <p>Status: {is_opened ? "Open" : "Closed"}</p>
    </div>
  );
};

export default RestaurentCard;
