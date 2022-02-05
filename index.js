const http = require("http");

const PORT = process.env.PORT || 5001;

class Router {
  constructor() {
    /* endpoints = {
      '/users': {
        'GET': handler1,
        'POST': handler2,
        'PUT': handler3,
      }
    } */
    this.endpoints = {};
  }

  request(method = "GET", path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {};
    }
    const endpoint = this.endpoints[path];

    if (endpoint[method]) {
      throw new Error(`[${method}] for ${path} already exists`);
    }

    endpoint[method] = handler;
  }
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  if (req.url === "/users") {
    return res.end(JSON.stringify({ id: 2, name: "Hi allo" }));
  }
  return res.end(req.url);
});

server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
