import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/projekty`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/ochrana-osobnich-udaju`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/cookies`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${site.url}/projekty/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
