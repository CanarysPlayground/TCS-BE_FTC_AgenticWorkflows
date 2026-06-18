const fs = require("fs");

console.log("Reading smoke.log...");

const smokeLog = fs.readFileSync("smoke.log", "utf8");

console.log("====================================");
console.log("SMOKE LOG");
console.log("====================================");
console.log(smokeLog);
