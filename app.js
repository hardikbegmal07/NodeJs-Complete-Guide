const http = require("http"); // require takes a path to another file or import a core module like http

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit(); but we never tend to exit our server bcz if the server is closed,
  // and a user sends some request it will not read that is why we try not to end a server

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
}); // it requires a requestListener
// requestListener is a function that will exexute for every incoming request

server.listen(3000); // starts a process and keeps on listening to the incoming request
