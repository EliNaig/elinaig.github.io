import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
if (!fs.existsSync(distDir)) {
	console.error("dist/ not found. Run npm run build before check-links.");
	process.exit(1);
}

const htmlFiles = [];
const fileSet = new Set();

function walk(dir) {
	for (const name of fs.readdirSync(dir)) {
		const abs = path.join(dir, name);
		const rel = `/${path.relative(distDir, abs).replaceAll(path.sep, "/")}`;
		const stat = fs.statSync(abs);
		if (stat.isDirectory()) {
			walk(abs);
			continue;
		}
		fileSet.add(rel);
		if (abs.endsWith(".html")) htmlFiles.push(abs);
	}
}

walk(distDir);

const routeSet = new Set(["/"]);
for (const rel of fileSet) {
	if (!rel.endsWith(".html")) continue;
	if (rel === "/index.html") {
		routeSet.add("/");
		continue;
	}
	if (rel.endsWith("/index.html")) {
		routeSet.add(rel.slice(0, -"index.html".length));
		continue;
	}
	routeSet.add(rel.slice(0, -".html".length));
}

const missing = [];
const hrefPattern = /href="([^"]+)"/g;

for (const htmlFile of htmlFiles) {
	const relFile = path.relative(distDir, htmlFile).replaceAll(path.sep, "/");
	const html = fs.readFileSync(htmlFile, "utf8");
	for (const match of html.matchAll(hrefPattern)) {
		const href = match[1];
		if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) continue;
		const clean = href.split("#")[0].split("?")[0];
		if (!clean) continue;
		let candidate;
		if (clean === "/") candidate = "/";
		else if (path.posix.extname(clean)) {
			candidate = clean;
			if (!fileSet.has(candidate)) missing.push({ file: relFile, href, candidate });
			continue;
		} else {
			candidate = clean.endsWith("/") ? clean : `${clean}/`;
		}
		if (!routeSet.has(candidate)) missing.push({ file: relFile, href, candidate });
	}
}

if (missing.length) {
	console.error(`Found ${missing.length} missing internal links:`);
	for (const row of missing.slice(0, 100)) {
		console.error(`${row.file} -> ${row.href} (expected ${row.candidate})`);
	}
	process.exit(1);
}

console.log(`check-links passed (${htmlFiles.length} html files scanned).`);
