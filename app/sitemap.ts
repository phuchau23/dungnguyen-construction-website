import type { MetadataRoute } from "next";
import { articles } from "@/lib/posts";
import { projectDetails } from "@/lib/project-details";
import { serviceDetails } from "@/lib/service-details";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly", images?: string[]) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    ...(images?.length ? { images: images.map((src) => `${site.url}${src}`) } : {}),
  });

  return [
    page("/", 1, "weekly"),
    page("/dich-vu", 0.9, "monthly"),
    page("/cong-trinh", 0.8, "weekly"),
    page("/bao-gia", 0.8, "monthly"),
    page("/gioi-thieu", 0.6, "monthly"),
    page("/lien-he", 0.6, "monthly"),
    page("/tin-tuc", 0.7, "weekly"),
    ...serviceDetails.map((s) => page(`/dich-vu/${s.slug}`, 0.9, "monthly", s.intro.src ? [s.intro.src] : undefined)),
    ...projectDetails.map((p) => page(`/cong-trinh/${p.slug}`, 0.7, "monthly", p.photos?.map((ph) => ph.src))),
    ...articles.map((a) => page(`/tin-tuc/${a.slug}`, 0.6, "monthly", a.image ? [a.image] : undefined)),
  ];
}
