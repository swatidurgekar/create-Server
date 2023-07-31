const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  // process.exit();
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  if (req.url === "/home") {
    res.write("<body><h1>Welcome Home!</h1></body>");
  } else if (req.url === "/about") {
    res.write("<body><h1>Welcome to About Us page</h1></body>");
  } else if (req.url === "/node") {
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
  } else {
    res.write("<body><h1>Hello from my Node.js server!</h1></body>");
  }
  res.write("</html>");
  res.end();
});

server.listen(4000);
