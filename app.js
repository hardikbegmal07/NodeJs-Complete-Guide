const http = require("http"); // require takes a path to another file or import a core module like http

const routes = require("./routes");

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

const server = http.createServer(routes.handler);

server.listen(3000); // starts a process and keeps on listening to the incoming request
