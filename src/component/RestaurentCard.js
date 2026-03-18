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

  return (
    <div className="w-64 min-h-[320px] bg-white rounded-2xl overflow-hidden shadow-md flex flex-col cursor-pointer transition-transform duration-250 ease-in-out hover:-translate-y-1.5 hover:shadow-xl">
      <img
        className="w-full h-40 object-cover"
        src={logo}
        alt={`${brand_name} logo`}
      />

      <h3 className="text-lg font-semibold text-gray-900 m-3 h-[50px] overflow-hidden">
        {brand_name}
      </h3>

      <h4 className="text-sm font-normal text-gray-600 mx-3 mb-2 h-[40px] overflow-hidden">
        {main_offering}
      </h4>

      <p className="text-xs text-gray-700 mx-3 mb-3 line-clamp-2">
        {description}
      </p>

      <p className="text-xs text-gray-700 mx-3 mb-3">
        Status: {is_opened ? "Open" : "Closed"}
      </p>
    </div>
  );
};

export default RestaurentCard;
