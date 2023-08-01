const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    fs.readFile("message.txt", (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("inside fs.readfile");
      res.write("<html>");
      res.write("<head><title>Enter message</title></head>");
      res.write(`<body>${data}</body>`);
      res.write(
        '<body><form action="/message" method="POST"><input name="message" type="text"/><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        console.log("inside fs.writefile");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server</h1></body>");
    res.write("</html>");
    res.end();
  }
};

// module.exports=requestHandler

// module.exports={
//     handler:requestHandler
// }

// module.exports.handler=requestHandler;

exports.handler = requestHandler;
exports.someText = "some hard coded text";
