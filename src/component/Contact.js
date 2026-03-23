import { useState } from "react";
const Contact = () => {
  const [click, setClick] = useState(false);
  const Fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <h2 onClick={handleClick}>list of Fruits</h2>
      {click && (
        <ul>
          {Fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contact;
