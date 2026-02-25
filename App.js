import React from "react";
import ReactDOM from "react-dom/client";

/*HEADER
 -Logo
 -Nav Items

BODY
 -search
 -Restaurent Container
    -Restaurent Card 
       - img
       - res name

FOOTER
  -Copyrights
  -Links
  -Contacts
  -Address
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.licdn.com/dms/image/v2/D4E22AQHfh3P5CA-WmQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1706744374573?e=1773273600&v=beta&t=aW0wyvebTl0owI_zQyj4ncW1JGXdua6A10tzcWMVf-w"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    type: "restaurant",
    data: {
      id: "16059",
      name: "KFC",
      cuisine: ["Burgers", "Fast Food", "Rolls & Wraps"],
      rating: 4.1,
      deliveryTime: 22,
      costForTwo: 400,
      veg: false,
      cloudinaryImageId: "f1b907b0b8f86c62e4fc347c6b1434e6",
      area: "Kothrud",
      isOpen: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/1b31f4c5-01bd-4a8d-b927-f779ea06a6ba_16059.JPG",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "1101171",
      name: "KNS Burgers & Subs",
      cuisine: ["Snacks", "Fast Food", "Burgers", "Cafe"],
      rating: 4.4,
      deliveryTime: 26,
      costForTwo: 300,
      veg: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/11/945e90fc-4c6c-400a-9dbe-fbe7fa93a732_1101171.jpg",
      area: "Swargate",
      isOpen: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/12/11/945e90fc-4c6c-400a-9dbe-fbe7fa93a732_1101171.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "860449",
      name: "Govinda Foods",
      cuisine: ["Fast Food", "Cafe"],
      rating: 4.1,
      deliveryTime: 22,
      costForTwo: 200,
      veg: true,
      cloudinaryImageId: "aeda109df92aa62f9c2bfed818935d2f",
      area: "Kothrud",
      isOpen: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aeda109df92aa62f9c2bfed818935d2f",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "33848",
      name: "The Belgian Waffle Co.",
      cuisine: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      rating: 4.6,
      deliveryTime: 17,
      costForTwo: 200,
      veg: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/d30e906d-c10a-4ae9-bb8a-e35f2424cdba_33848.JPG",
      area: "JM Road",
      isOpen: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/d30e906d-c10a-4ae9-bb8a-e35f2424cdba_33848.JPG",
    },
  },

  /* — EXTRA MOCKED REALISTIC RESTAURANTS — */

  {
    type: "restaurant",
    data: {
      id: "45021",
      name: "Burger King",
      cuisine: ["Burgers", "Fast Food"],
      rating: 4.2,
      deliveryTime: 24,
      costForTwo: 350,
      veg: false,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/68f65d88-0579-4f86-b444-7d1e2780bb75_1111166.jpg",
      area: "Aundh",
      isOpen: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/burgerking123.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "77233",
      name: "Pizza Express",
      cuisine: ["Pizza", "Italian"],
      rating: 4.3,
      deliveryTime: 28,
      costForTwo: 450,
      veg: false,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/15/f07240f9-b1b4-4b34-8c43-515fb8bd595b_263632.JPG",
      area: "Baner",
      isOpen: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pizzaexpress456.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "90321",
      name: "Veggie Delight",
      cuisine: ["Salads", "Healthy"],
      rating: 4.5,
      deliveryTime: 20,
      costForTwo: 300,
      veg: true,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/5/74479c4d-c77b-4df6-9c25-a09ea8f0290b_1108308.jpg",
      area: "Viman Nagar",
      isOpen: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/veggiedelight789.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "55012",
      name: "Sushi House",
      cuisine: ["Japanese", "Sushi"],
      rating: 4.4,
      deliveryTime: 30,
      costForTwo: 700,
      veg: false,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/2/b630077e-6587-4355-a44a-4181b7cabe2d_383098.jpg",
      area: "Kalyani Nagar",
      isOpen: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sushihouse321.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "66123",
      name: "Tandoori Flames",
      cuisine: ["North Indian", "Tandoori"],
      rating: 4.0,
      deliveryTime: 35,
      costForTwo: 500,
      veg: false,
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/11/a0f9023b-5922-4552-a746-c04ff49be115_1227135.JPG",
      area: "Magarpatta",
      isOpen: true,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tandooriflames654.jpg",
    },
  },
];

const RestaurentCard = ({ resData }) => {
  //we are passing resdata as a props here
  const { cloudinaryImageId, name, rating, cuisine, deliveryTime } =
    resData?.data;
  // ?. is called optional chaining. It safely accesses a property only if the object exists. Without ?., trying to access .data on undefined crashes the app. With ?., it returns undefined safely.

  //const RestaurentCard = (resName,cuisin, rating) => { this is same thing  thi is destructuring on the fly
  //{resName,cuisin, rating}=props; this is also same this is destructuring this is doen by js
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4 className="cuisine-rating">
        <span className="cuisine-text">{cuisine.join(", ")}</span>
        <span className="rate">{rating} ⭐</span>
      </h4>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
