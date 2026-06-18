const fs = require("fs");
const ModelClient = require("@azure-rest/ai-inference").default;
const { isUnexpected } = require("@azure-rest/ai-inference");
const { AzureKeyCredential } = require("@azure/core-auth");

const token = process.env.GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

async function main() {

  const smokeLog = fs.readFileSync("smoke.log", "utf8");

  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(token)
  );

  const response = await client.path("/chat/completions").post({
    body: {
     messages: [
      {
        role: "system",
        content: "You are an expert DevOps engineer."
      },
      {
        role: "user",
        content: `
    Analyze the following smoke test log.

    Return ONLY in this format:

    Issue Title:
    Severity:
    Root Cause:
    Impact:
    Recommended Action:

    Log:
    ${smokeLog}
    `
      }
    ],
      temperature: 0.2,
      model: model
    }
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }
const analysis = response.body.choices[0].message.content;

console.log("AI ANALYSIS");
console.log("======================");
console.log(analysis);

fs.writeFileSync("ai-analysis.txt", analysis);
}

main().catch(console.error);
