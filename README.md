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

# funtional compoent - A functional component is a normal JavaScript function that returns JSX.

# funtion - is a block of code which perform a specific task and it runs only when it is called . funtion is a reusable block of code.

---

# Episode 04

---

# config driven UI - The UI is generated based on configuration (data/JSON) instead of being hardcoded in the component.

# KEY is a special prop used when rendering lists.

- It helps React:
- Identify each item uniquely
- Track changes efficiently
- Update only what changed
- Prevent UI bugs

# will use index instead of unique key just for example {resList.map((restaurent, index) => (<RestaurentCard key={index} resData={restaurent}/>),)}

---

# Episode 05

---
