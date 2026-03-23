import { createContext } from "react";

const UserContext = createContext({
  logedInUserName: "Default User",
  location: "New York",
  email: "default@example.com",
});

export default UserContext;
