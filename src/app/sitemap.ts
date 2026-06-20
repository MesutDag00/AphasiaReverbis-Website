import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://aphasiareverbis.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/solution/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/pricing/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/sss/", priority: 0.7, changeFrequency: "monthly" },
    { path: "/demo/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/kvkk/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/gizlilik-sozlesmesi/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cerez-politikasi/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/hesap-silme/", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
