import type { Metadata } from "next";
import { site } from "./site";

/** Ảnh chia sẻ mặc định 1200×630 (logo + ảnh công trình) */
export const defaultOgImage = { url: "/og/og-default.jpg", width: 1200, height: 630, alt: `${site.name} – Sửa chữa, cải tạo nhà cửa TP.HCM` };

type PageMetaInput = {
  /** Tiêu đề trang (ghép với "| Duy Long Home" qua template ở layout) */
  title: string;
  description: string;
  /** Đường dẫn trang, vd. "/dich-vu/chong-tham" */
  path: string;
  /** Ảnh chia sẻ trong /public; không có thì dùng ảnh mặc định */
  image?: string;
  imageAlt?: string;
  /** Tiêu đề không ghép template (trang chủ) */
  absoluteTitle?: boolean;
  type?: "website" | "article";
};

/** Metadata đầy đủ cho một trang: title, description, canonical, Open Graph, Twitter */
export function pageMeta({ title, description, path, image, imageAlt, absoluteTitle, type = "website" }: PageMetaInput): Metadata {
  const images = image ? [{ url: image, alt: imageAlt ?? title }] : [defaultOgImage];
  const shareTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "vi_VN",
      siteName: site.name,
      url: path,
      title: shareTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: images.map((i) => i.url),
    },
  };
}
