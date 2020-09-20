const fs = require("fs");

fs.readFile("./package.json", "utf-8", (err, data) => {
  err ? console.error("An error has occured", err) : console.log(data);
});
