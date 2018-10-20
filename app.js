const http = require("http");
const fs = require("fs");

const port = 3000;
const hostname = "127.0.0.1";

fs.writeFile("hello-word.txt", "Hello to this great world", err => {
  if (err) {
    throw err;
  }

  const server = http.createServer((req, res) => {
    res.StatusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Hello to this great world");
  });

  server.listen(port, hostname, () => {
    console.log("Server started on port " + port);
  });
});
