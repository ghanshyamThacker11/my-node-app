const http = require("http");

const server = http.createServer((req, res) => {
  res.end("kem sooo vagadiya majama ne!!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});