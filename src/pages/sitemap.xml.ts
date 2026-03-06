import { getCollection } from "astro:content";
import { site } from "../lib/site";

export const prerender = true;

const staticRoutes = [
	"/",
	"/about/",
	"/research/",
	"/publications/",
	"/talks/",
	"/teaching/",
	"/work/",
	"/now/",
	"/contact/",
	"/cv/",
	"/resume/",
];

function toAbsolute(pathname: string) {
	return new URL(pathname, site.url).href;
}

export async function GET() {
	let projectRoutes: string[] = [];

	try {
		const projects = (await getCollection("projects")).filter(
			(entry) => !entry.data.draft && entry.slug === "anti-chain-posetbench",
		);
		projectRoutes = projects.map((entry) => `/projects/${entry.slug}/`);
	} catch {
		projectRoutes = [];
	}

	const urls = [...new Set([...staticRoutes, ...projectRoutes])]
		.map((route) => `<url><loc>${toAbsolute(route)}</loc></url>`)
		.join("");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
}
