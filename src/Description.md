In this tutorial we are going to learn how to rout different compnents in react dso that it looks slicker.

React makes a request to the server, the server returns the HTML pages and the js bundle, containg all our code. Now by requireent of the user, if JS injects required stuff to the HTML page, intercepting the request that should reach the server.

![](2021-05-01-19-34-43.png)

First install react router. (npm install react-router-dom@5)


Now to create route parameters first go to app.js.


We are going to re-use custom hooks to fetch blog details now.

To start the server type : npx json-server --watch data/db.json --port 8000