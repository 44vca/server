const fs = require("fs");
const path = require("path");

// fs.mkdirSync(path.resolve(__dirname, "dir")); // creates new directory in /lessons
// fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), {recursive: true}); // --> Creates nested directories

// fs.mkdir(path.resolve(__dirname, "dir1", "dir2", "dir3"), (error) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log("Folder created");
// }); --> Will throw an error, cause need to be {recursive: true} --> (path, options, cb)

// fs.mkdir(
//   path.resolve(__dirname, "dir1"),
//   /* for nested need to add {recursive: true} */ (error) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log("Folder created");
//   }
// ); /* --> create folder with no error and conole.log(); */

// fs.rmdir(path.resolve(__dirname, "dir1"), (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log("Folder deleted");
// }); /* --> delete folder with 'dir1' name */

// fs.writeFile(
//   path.resolve(__dirname, "text.txt", (error) => {
//     if (error) {
//       throw error;
//     }
//     console.log("File written");
//   })
// ); /* --> write file with name 'text.txt' */

// fs.writeFile(
//   path.resolve(__dirname, "text2.txt"),
//   fs.readFileSync(path.resolve(__dirname, "text.txt"), "utf-8", (err, data) => {
//     if (err) {
//       throw err;
//     }
//     return data;
//   }),
//   (error) => {
//     if (error) {
//       throw error;
//     }
//     console.log("File written");
//   }
// ); /* --> read file text.txt and create file text2.txt with text from text.txt */

// fs.appendFile(path.resolve(__dirname, "text2.txt"), "ADDED TEXT", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Text appended");
// }); /* --> append text to 'text2.txt' file  */

// const writeFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve();
//     });
//   });
// }; /* --> create file 'text3.txt with Promise*/

// const appendFileAsync = (path, data) => {
//   return new Promise((resolve, reject) => {
//     fs.appendFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve();
//     });
//   });
// }; /* --> append text to file with Promise*/

// const readFileAsync = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         return reject(err.message);
//       }
//       resolve(data);
//     });
//   });
// }; /* --> append text to file with Promise*/

// const removeFileAsync = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.rm(path, (err) => {
//       if (err) {
//         reject(err.message);
//       }
//       resolve();
//     });
//   });
// }; /* --> Remove file */

// writeFileAsync(path.resolve(__dirname, "text3.txt"), "hello")
//   .then(() => appendFileAsync(path.resolve(__dirname, "text3.txt"), " boy"))
//   .then(() =>
//     appendFileAsync(path.resolve(__dirname, "text3.txt"), " with no name")
//   )
//   .then(() => appendFileAsync(path.resolve(__dirname, "text3.txt"), "!"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text3.txt"), "?"))
//   .then(() => readFileAsync(path.resolve(__dirname, "text3.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log("Error!!!", err));

// removeFileAsync(path.resolve(__dirname, "text3.txt"))
//   .then(() => console.log("File removed successfully"))
//   .catch((err) => console.log("Error: ", err));

const envVariable = process.env.STRING || "";

const writeVariable = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (error) => {
      if (error) {
        reject(error.message);
      }
      resolve();
    });
  });
};

const readVariable = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(error.message);
      }
      resolve(data);
    });
  });
};

const removeFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.rm(path, (err) => {
      if (err) {
        reject(error.message);
      }
      resolve();
    });
  });
};

writeVariable(path.resolve(__dirname, "variable.txt"), envVariable)
  .then(() => readVariable(path.resolve(__dirname, "variable.txt")))
  .then((data) => data.split(" ").length.toString())
  .then((count) =>
    writeVariable(path.resolve(__dirname, "wordCount.txt"), count)
  )
  .then((data) => removeFile(path.resolve(__dirname, "variable.txt")))
  .catch((error) => console.log("Error: ", error));
