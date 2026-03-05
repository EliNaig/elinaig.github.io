import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src/content");
if (!fs.existsSync(root)) {
	console.error("src/content not found");
	process.exit(1);
}

const requiredCollections = ["projects", "publications", "talks", "teaching", "writing"];
const problems = [];

for (const c of requiredCollections) {
	const dir = path.join(root, c);
	if (!fs.existsSync(dir)) {
		problems.push(`Missing collection directory: ${dir}`);
		continue;
	}
	const mdFiles = fs
		.readdirSync(dir)
		.filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
		.filter((name) => !name.includes("getting-started"));
	if (mdFiles.length === 0) {
		problems.push(`Collection has no real entries: ${c}`);
	}
}

if (problems.length) {
	console.error("check-content failed:");
	for (const p of problems) console.error(`- ${p}`);
	process.exit(1);
}

console.log("check-content passed.");
