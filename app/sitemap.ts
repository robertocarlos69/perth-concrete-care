import type { MetadataRoute } from "next";
import { suburbs } from "./lib/suburbs";

const baseUrl = "https://perthconcretecare.com.au";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

// Stable last-modified dates per route. Bump the date for a page only when you
// meaningfully change its content — don't let it auto-stamp every build, which
// tells Google every page changed when it didn't.
const corePages: Array<{
  path: string;
  lastModified: string;
  changeFrequency: ChangeFreq;
  priority: number;
}> = [
  { path: "/", lastModified: "2026-06-15", changeFrequency: "weekly", priority: 1 },
  { path: "/epoxy-flake-flooring-perth", lastModified: "2026-06-13", changeFrequency: "monthly", priority: 0.9 },
  { path: "/metallic-epoxy-flooring-perth", lastModified: "2026-06-13", changeFrequency: "monthly", priority: 0.9 },
  { path: "/epoxy-floor-visualiser-perth", lastModified: "2026-06-13", changeFrequency: "monthly", priority: 0.8 },
  { path: "/concrete-grinding-perth", lastModified: "2026-06-13", changeFrequency: "monthly", priority: 0.85 },
  { path: "/concrete-polishing-perth", lastModified: "2026-06-13", changeFrequency: "monthly", priority: 0.85 },
  { path: "/honed-concrete-perth", lastModified: "2026-06-13", changeFrequency: "monthly", priority: 0.85 },
  { path: "/contact", lastModified: "2026-06-13", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", lastModified: "2026-06-15", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const core = corePages.map((p) => ({
    url: p.path === "/" ? `${baseUrl}/` : `${baseUrl}${p.path}`,
    lastModified: p.lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const suburbPages = suburbs.map((s) => ({
    url: `${baseUrl}/concrete-flooring/${s.slug}`,
    lastModified: s.updated,
    changeFrequency: "monthly" as ChangeFreq,
    priority: 0.8,
  }));

  return [...core, ...suburbPages];
}
