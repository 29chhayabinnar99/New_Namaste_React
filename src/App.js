import React, { lazy, Suspense, use, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurentMenu from "./component/RestaurentMenu";
import UserContext from "./utils/UserContext";
import { useState } from "react";

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  // in real project we will fetch authentication data from server and then pass it to user context provider but here we are hardcoding it for simplicity
  useEffect(() => {
    // assuming that we are fetch data from server and passed in data obj
    const data = {
      name: "krish",
    };
    setUserName(data.name);
  }, []);
  return (
    // we are providing user context to all the components in the app layout so that we can access it in any component without prop drilling
    // now will overlap default user with this data and when we access logedInUserName in any component it will give us krish instead of default user
    <UserContext.Provider value={{ logedInUserName: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const Grocery = lazy(() => import("./component/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurent-menu/:brand_id",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
