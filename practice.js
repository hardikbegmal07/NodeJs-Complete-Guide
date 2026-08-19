// ASSIGNMENT - 1
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>User</title></head>");
    res.write(
      "<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>",
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Username</title></head>");
    res.write(
      "<body><h1>Hi Welcome!!, Nice to have to you onBoard.</h1></body>",
    );
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Enter</button></form></body>',
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    }); // on() allows us to listen to events and here we will be listening to data events.

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);
      const username = params.get("username");

      console.log(username);

      res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
