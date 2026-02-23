import React from "react";
import ReactDOM from "react-dom/client";

//creating element with help of react
// React.createElement =>  React element (JS object) → ReactDOM renders  => real HTML element in browser
const heading = React.createElement("h1", { id: "heading" }, "Namste React 🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// creating element with help of react
// jsx => babel transpile => React.createElement => React element (JS object) → ReactDOM renders  => real HTML element in browser
const heading2 = <h2 id="heading2">Namaste JSX 🚀</h2>;
const jsxRoot = ReactDOM.createRoot(document.getElementById("jsxRoot"));
jsxRoot.render(heading2);

//component - reusable piece of UI. It can be nested, reused, and composed. there are two types of component
// funtional component (new way)
// class- based component (old way)

//creating funtional component
const FunctionalComponent = () => {
  return <h1 id="functionalHeading">Namaste React Functional Component 🚀</h1>;
};
const functionalRoot = ReactDOM.createRoot(
  document.getElementById("functionalRoot"),
);
functionalRoot.render(<FunctionalComponent />);

//Assignment
function Assignment() {
  return <div id="AssignmentHeading">hi</div>;
}

const AssignRoot = ReactDOM.createRoot(document.getElementById("AssignRoot"));
AssignRoot.render(<Assignment />);
