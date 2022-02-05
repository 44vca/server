const path = require("path");

console.log(path.join("first", "second", "thirst")); // log  --> 'first/second/thirst'
console.log(__dirname); // absolute path to directory where we are using __dirname. log --> '/Users/sntndk/Work/learnJS/node/1/lessons'

const fullPath = path.resolve(__dirname, "first", "second.js");

console.log("Full path to directory", fullPath); //logs --> '/Users/sntndk/Work/learnJS/node/1/lessons/first/second'
console.log("OS separator", path.sep); // logs --> '/'
console.log("Parsing the path", path.parse(fullPath)); // logs --> '{ root: '/', dir: '/Users/sntndk/Work/learnJS/node/1/lessons/first', base: 'second', ext: '', name: 'second' }'
console.log("Check for absolute path", path.isAbsolute(fullPath)); // logs --> 'true'
console.log("File name", path.basename(fullPath)); // logs --> 'second.js'
console.log("Extension name", path.extname(fullPath)); // logs --> '.js'

// --------------------

const siteURL = "http://localhost:8080/users?id=5";

const url = new URL(siteURL);
console.log(url); // parsing URL
