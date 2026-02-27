---
# Episode 01,02
---

# Create project & files: index.html, style.css, index.js.

# 1.Initialize npm:

# npm init (create package.json and package.lockl.json)

# npm install (create node modules folder)

# 2.Install Parcel:

# npm install -D parcel

# 3.Update package.json scripts:

# "scripts": { "start": "parcel index.html" }

# 4.Run project:

# npx parcel index.html

# 5.Install React & ReactDOM (18.2.0):

# npm install react@18.2.0 react-dom@18.2.0

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

# funtional component - A functional component is a normal JavaScript function that returns JSX.

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

# config driven UI - The UI is generated based on configuration (data/JSON) instead of being hardcoded in the component.

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

# CORS

- CORS (Cross-Origin Resource Sharing) is a browser security feature that controls whether one website can access resources from another website.

- If a frontend app tries to request data from a different domain, the browser checks whether the server allows it. If the server sends the proper permission header (like Access-Control-Allow-Origin), the request succeeds. Otherwise, the browser blocks it and shows a CORS error.

- In short:
  👉 CORS protects users by preventing unauthorized cross-domain requests.

- Origin = Protocol + Domain + Port[https://example.com:3000]

# conditional rendering - a rendering based on condition called conditional rendering
