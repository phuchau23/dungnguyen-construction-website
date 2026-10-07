import type { Metadata } from "next";
import { site } from "./site";

/** Ảnh chia sẻ mặc định 1280×512 (banner trang chủ) */
export const defaultOgImage = { url: "/banneer.jpg", width: 1280, height: 512, alt: `${site.name} – Sửa chữa, cải tạo nhà cửa TP.HCM` };

type PageMetaInput = {
  /** Tiêu đề trang (ghép với "| Duy Long Home" qua template ở layout) */
  title: string;
  description: string;
  /** Từ khóa riêng của trang (thẻ meta keywords); không có thì dùng bộ chung ở layout */
  keywords?: string[];
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
export function pageMeta({ title, description, keywords, path, image, imageAlt, absoluteTitle, type = "website" }: PageMetaInput): Metadata {
  const images = image ? [{ url: image, alt: imageAlt ?? title }] : [defaultOgImage];
  const shareTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords?.length ? { keywords } : {}),
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

/** Dữ liệu cấu trúc FAQPage từ danh sách hỏi đáp hiển thị trên trang */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
