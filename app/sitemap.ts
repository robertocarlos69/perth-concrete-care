import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://perthconcretecare.com.au";
  const lastModified = new Date();

  const routes = [
  "/",
  "/epoxy-flake-flooring-perth",
  "/concrete-grinding-perth",
  "/metallic-epoxy-flooring-perth",
  "/concrete-polishing-perth",
  "/honed-concrete-perth",
  "/contact"
];

  return routes.map((path) => {
    const url = path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`;
    const priority =
      path === "/"
        ? 1
        : path.startsWith("/epoxy-")
          ? 0.9
          : path.startsWith("/concrete-")
            ? 0.85
            : path === "/contact"
              ? 0.7
              : 0.8;

    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      path === "/" ? "weekly" : "monthly";

    return {
      url,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
