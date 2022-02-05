const fs = require("fs");
const path = require("path");
const http = require("http");

// const writableStream = fs.createWriteStream(
//   path.resolve(__dirname, "text.txt")
// );

// for (let i = 0; i < 20; i++) {
//   writableStream.write(i + "\n");
// }

// http.createServer((req, res) => {
//   // req - readable stream
//   // res - writable stream
//   const stream = fs.createWriteStream(path.resolve(__dirname, "text.txt"));
//   stream.on("data", (chunk) => res.write(chunk));
//   stream.on("end", () => stream.end ());
// });
