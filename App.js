/** CREATE SINGLE COMPONENT */
//heading is a object if u print it in console this will creat element h1
//{}this is a object where we can give attribute to the h1 tag sometimes we have to give class id or anything
const heading = React.createElement(
  "h1",
  { id: "heading" }, // this are the props
  "Hello world in React", //this is a children
);
// this will put h1 element in the root id div
const root = ReactDOM.createRoot(document.getElementById("root"));
// root will render the heading
root.render(heading);

/** THIS IS NESTED COMPONENT CREATION */
/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1> I am H1 tag</h1>
 *          //If you want to create sibling tags you have to create an array of children
 *          <h2> I am H1 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ]),
);

//we store parent-child id into parentchild veriable or viseversa
const parentChild = ReactDOM.createRoot(
  document.getElementById("parent-child"),
);

parentChild.render(parent);
