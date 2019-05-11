const fs = require("fs");

fs.writeFileSync("notes.txt", "Hello World, From Node");
fs.appendFileSync("notes.txt", " ,This was appeneded");
