---
# Episode 01,02
---

# Create project & files: index.html, style.css, index.js.

# 1.Initialize npm:

- npm init (create package.json and package.lockl.json)

- npm install (create node modules folder)

# 2.Install Parcel:

- npm install -D parcel

# 3.Update package.json scripts:

- "scripts": { "start": "parcel index.html" }

# 4.Run project:

- npx parcel index.html

# 5.Install React & ReactDOM (18.2.0):

- npm install react@18.2.0 react-dom@18.2.0

# 6.Remove React CDNs from index.html.

# 7. import react and react-dom in app.js

# 8. add type="module" in index.html whenre app.js script added

---

# Q.What is another way of starting the build of the project?

# We will be creating scripts instead of using “npx parcel index.html”. We can create different scripts for starting our project in Development and Production.

# In package.json , in the script section write the following command.

# "scripts": {

# "start":"parcel index.html",

# "build":"parcel buld index.html",

# "test": "jest"

# }

# To run these scripts, enter the following commands in the terminal,

# To start: npm run start or npm start

# For Production Build: npm run build

---

# Episode 03

---

# jsx- it is not a html code write inside js. It is a extension for react to write html-like code in js.

# js engine nto understand jsx before going to js engine it will transpile(convert) into js.

# Babel - is a js compiler that converts (transpiles) JSX and modern JavaScript into browser-compatible js.

# Component Composition - Building UI by combining small component into other component [instead of writing big component we composed(combined) smaller components]

# funtional component - A functional component is a normal JavaScript function which returns some JSX.

# funtion - is a block of code which perform a specific task and it runs only when it is called . funtion is a reusable block of code.

---

# Episode 04

---

# Project Structure

This project has a basic structure divided into three main sections: **Header**, **Body**, and **Footer**.

---

## Header

- Logo
- Navigation Items

## Body

- **Search**
- **Restaurant Container**
  - **Restaurant Card**
    - Image
    - Restaurant Name

## Footer

- Copyrights
- Links
- Contacts
- Address

# config driven UI

- The UI is generated based on configuration (data/JSON) instead of being hardcoded in the component.

# KEY is a special prop used when rendering lists.

- It helps React:
- Identify each item uniquely
- Track changes efficiently
- Update only what changed
- Prevent UI bugs

# will use index instead of unique key just for example

- {resList.map((restaurent, index) => (<RestaurentCard key={index} resData={restaurent}/>),)}

---

# Episode 05

---

# **Tips**- never add hardcoded value in component file like data or src strings/ img url etc.

# **Named Export/Import** - Use when: You want to export multiple things from a file. (example => export veriable_name/compoenent_name; import{veriable_name/compoenent_name} from "file_location").

# **Default Export/Import** - Use when: The file has one main thing (component, function, class).(example => export default compoenent_name; import component_name from "file_location").

# React element is a normal js object. React later converts it into real DOM.

---

# Episode 06

---

# **Reaact hook** - it is just a normal utility function which is given to us by react. Its a prebuilt whoch comes up with special power.

# useState- whenever state veriable (listOfResto) changes react rerender our funtional component(setListOfResto).

# Why React is fast: React does efficient DOM manipulation. It uses Virtual DOM (which has a diffing algorithm to efficiently compare changes) it will find out the diff and update the UI only change part.

# React fiber/ reconcilation algorithm

- Real DOM
  - Tree-like structure of the actual HTML elements in the browser.
  - DOM is heavy — changing even one element requires the browser to recalculate layout, repaint, and re-render parts of the page.

- Virtual DOM
  - Lightweight copy of real DOM.
  - React compares the old Virtual DOM and the new Virtual DOM (this process is called reconciliation).
  - Updates only the changed parts in the real DOM, making UI updates fast and efficient.

# useEffect -

- useEffect runs after the component renders and the DOM is updated.
- useEffect takes arguments one is callback funtion and dependency array useEffect(callback, dependencyArray)
- if no dependency array => it will render every time of component
- if dependency array present => [] => useEffect will call only on initial render
- it dependency array is =>[btnName]=> useeefect will call every time when btnName is updated

# CORS

- CORS (Cross-Origin Resource Sharing) is a browser security feature that controls whether one website can access resources from another website.

- If a frontend app tries to request data from a different domain, the browser checks whether the server allows it. If the server sends the proper permission header (like Access-Control-Allow-Origin), the request succeeds. Otherwise, the browser blocks it and shows a CORS error.

- In short:
  👉 CORS protects users by preventing unauthorized cross-domain requests.

- Origin = Protocol + Domain + Port[https://example.com:3000]

# conditional rendering - a rendering based on condition called conditional rendering

---

# Episode 07 (React Router)

---

# createBrowserRouter

- Think of it as the router configuration.
- You define your routes, and for each route you can specify:
  - path → URL path
  - element → Component to render
  - errorElement → Component to render if the route fails or doesn’t exist

# RouterProvider

- This connects your router configuration to your React app.
- It makes all routing, navigation, and error handling work in your app.

# useRouteError

- This is a React hook that gives you the error object for the current route.
- You can use it inside your errorElement component to display info like status and statusText.

# Outlet

– Placeholder in a parent route where child routes will be displayed.

# children

– Used in route config to define nested routes under a parent route.

- These child routes will render inside the parent’s <Outlet />.

# Types of web routing

- Client-side Routing:
  - Navigation is handled in the browser using JavaScript. The page doesn’t reload; only the content changes.
- Server-side Routing:
  - Navigation is handled by the server. Each route click reloads the whole page, and the server sends the HTML for that route.

- Link – Component to navigate between routes without reloading the page.

# useParems

- useParams is a React Router hook used to get dynamic values from the URL.

---

# Episode 08

---

# class-based Component

- A class-based component is a JavaScript class that extends React.Component and contains a render() method which returns JSX to display UI.
- why we use super(props)?
  - super(props) is used to call the parent class constructor (React.Component) so that this and props are initialized properly in a class component.
  - If you use super(props) inside the constructor, then React initializes this.props, and you can use this.props anywhere in that class component.
- why we use .this ?
  - this refers to the current object (class instance).

# Explain the complete flow of data fetching in React from component load to displaying data on the screen.

- First React renders the UI
- Then the API call happens
- Data comes from the API
- State updates
- React Rerender
- Show Data on UI

# What is the execution order of constructor, render, and componentDidMount in Parent and Child components in React ?

- Parent Constructor
- Parent Render
- Child Constructor
- Child Render
- Child componentDidMount
- Parent componentDidMount

# What is the execution order of constructor, render, and componentDidMount when a Parent component contains two Child components in React?

Parent initializes first (constructor).
Parent renders and creates Child components.
Each Child runs its constructor and render.
After everything is rendered, componentDidMount runs starting from children, then parent.

- Parent Constructor
- Parent Render
- Child-1 Constructor
- Child-1 Render
- Child-2 Constructor
- Child-2 Render
- Child-1 componentDidMount
- Child-2 componentDidMount
- Parent componentDidMount

---

# Episode 09, 10

---

# Custom hook

- A custom hook is your own function that uses hooks internally to reuse logic across components.
- Rules of a custom hook:
  - Its name must start with use.
  - It can call other hooks (useState, useEffect, etc.).
  - It returns state, functions, or any reusable logic.
- Why use custom hooks?
  Imagine you have multiple components that:
  - Fetch data from an API
  - Filter a list
  - Handle search input
    Instead of repeating the same code in every component, you can extract it into a custom hook.

# What is window.addEventListener?

It listens for events happening in the browser.

# Lazy Loading / Code Splitting / Chunking / Dynamic Bundling / On Demand Loading

- Breaking your large JavaScript bundle into smaller pieces (chunks) so the browser loads only what is needed.
- bundle.js (2mb) Even if user only needs Home page, they download full app.
- Only required chunk is loaded → faster app [like home.chunk.js / about.chunk.js /cart.chunk.js]
- How React does Code Splitting
  - **lazy()** Used to load components only when needed [const About = lazy(() => import("./About"));]
  - **Suspense** Used to show fallback UI while loading [<Suspense fallback={<h1>Loading...</h1>}> <About /> </Suspense>]

---

# Episode 11

---

# Higher-Order Component (HOC)?

- A Higher-Order Component is a function that takes a component and returns a new component with additional functionality.
- const EnhancedComponent = HOC(OriginalComponent);
- steps to create HOC
  - create hoc funtion
  - wrap your og component with hoc
  - then render hoc-wrapped component

# Lifting state Up

It means moving shared state to a parent component so multiple child components can use it.

# Controlled and uncontrolled state

- Controlled Component
  - “A controlled component is one where the parent drives the important state via props, so the parent fully controls its behavior.”
  - Simple words:
    - Parent decides everything.
    - Child just follows instructions.

- Uncontrolled Component (React doc style)
  - “An uncontrolled component is one that manages its own internal state, so the parent cannot directly control it.”
  - Simple words:
    - Child handles its own state.
    - Parent cannot fully control it.

# What is prop drilling?

- Prop drilling happens when a parent component needs to pass some data to a deeply nested child. Every intermediate component has to pass the data along, even if they don’t use it themselves.
- Instead of passing props through every component, we can use Context API so that the child can access the data directly.

# Context API

- “Context API is a React feature that lets you share data (state) across the component tree without passing props through every intermediate component.”
- Simple words:
  - Parent can provide data once.
  - Any child (deeply nested or not) can access it directly.
  - Avoids prop drilling.

# What is Context Provider and Context Consumer?

1️⃣ Context Provider

- A Context Provider is a React component that provides the context value to all its children.
- Simple words:
  - It’s like a “store” or “source” of data.
  - Any child component wrapped inside it can access the data.
  - You define the value using the value prop.

2️⃣ Context Consumer

- A Context Consumer is a component that reads or uses the context value provided by a Provider.
- Simple words:
  - It’s like a “client” of the data store.
  - Can read or even update the context data.

**Provider:** Gives context to children
**Consumer:** Uses or reads context from provider\

---

# Episode 12

---

# what is Redux?

- Redux is a state management library used to manage and share application state globally in a predictable way.
- The flow in Redux is: UI dispatches an action → reducer updates the state → store holds updated state → UI re-renders.

# Flow of redux

**Flow for write data**

- In Redux, we create a central store that contains different slices of state. When a user interacts with the UI, like clicking an ‘Add’ button, an action is dispatched Which calls the reducers funtion and which updates the slice of redux store
- On UI click on ADD button -> action dispatch -> reducer funtion called/ handle -> updates the slice of the redux store

**Flow for read data**

- The component reads data from the store using useSelector, so whenever the state changes, it automatically gets the latest data and re-renders.
- Read: store → useSelector → UI

- Core Concepts (simple)
  Store → central place where all state lives
  Slice → a part of the store for a specific feature (e.g., cartSlice, userSlice)
  Action → describes what change to make
  Reducer → decides how state should change based on the action
  Dispatch → triggers the action

**Steps to Set Up Redux**

- Install redux - npm install @reduxjs/toolkit react-redux
- create store
- prividing store to the entire app (Wrap your app with <Provider>)
- Create a Slice - A slice contains: state , reducers (functions to update state), actions
- Add reducer to store (Import the slice reducer and add it inside the store configuration.)
- Use Redux in Components
  - Use useSelector → to read data from store
  - Use useDispatch → to dispatch actions
