// const http = require("http"); // require takes a path to another file or import a core module like http

const express = require("express");

// const routes = require("./routes");

// will be working with express.js to learn more on srevers and api

/*
  An HTTP request body can arrive as a stream of chunks, so Node.js lets us to listen for data events to collect those chunks 
  and an end event to know when the complete body has arrived.
*/

// const server = http.createServer((req, res) => {
//   // console.log(req.url, req.method, req.headers);
//   // process.exit(); but we never tend to exit our server bcz if the server is closed,
//   // and a user sends some request it will not read that is why we try not to end a server

// }); // it requires a requestListener
// // requestListener is a function that will exexute for every incoming request

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // allows the request to continue to the next middleware in line
}); // use() allows us to add a new middleware function,
// req, res are request and response parameters with some more functions, next is a function
// it allows the request to continue to the next middleware in line

app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app); // routes.handler
// server.listen(3000); // starts a process and keeps on listening to the incoming request

// instead of using above 2 lines, we can now just shorten it to
app.listen(3000);
