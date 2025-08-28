const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const server = require("http");
server
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write("<h1>Home Page</h1>");
    } else if (req.url === "/users") {
      res.write(JSON.stringify(users));
    } else {
      res.write("404 page not found");
    }

    res.end("");
  })
  .listen(5000, () => {
    console.log("server started");
  });