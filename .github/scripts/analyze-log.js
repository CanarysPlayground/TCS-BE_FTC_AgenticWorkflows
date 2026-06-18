const fs = require("fs");

const smokeLog = fs.readFileSync("smoke.log", "utf8");

console.log("====================================");
console.log("SMOKE LOG CONTENT");
console.log("====================================");
console.log(smokeLog);

console.log("====================================");
console.log("PROMPT TO SEND TO GPT-4.1");
console.log("====================================");

const prompt = `
You are a DevOps incident analyzer.

Analyze the following smoke test log and provide:

1. Issue Title
2. Severity
3. Root Cause
4. Impact
5. Recommended Action

Log:
${smokeLog}
`;

console.log(prompt);
