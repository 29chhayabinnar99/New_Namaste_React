import { useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-container">
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>User Name : {name}</h3>
      <h4>Location : New York</h4>
      <h5>Email : Chhaya@gmail.com</h5>
    </div>
  );
};

export default User;
