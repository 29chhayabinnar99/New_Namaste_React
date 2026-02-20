# Namaste React

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
