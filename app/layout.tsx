import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Be_Vietnam_Pro,
  Dancing_Script,
  JetBrains_Mono,
  Montserrat,
} from "next/font/google";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Footer, MobileContactBar } from "@/components/Footer";
import { ZaloWidget } from "@/components/ZaloWidget";
import { defaultOgImage } from "@/lib/seo";
import { site } from "@/lib/site";
import { officePos } from "./_home/data";
import "./globals.css";

const vietnam = Be_Vietnam_Pro({
  variable: "--font-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["700", "800"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
});

const description =
  "Sửa chữa nhà trọn gói TP.HCM: chống thấm, sơn nước, ốp lát, trần thạch cao, điện nước, cửa sắt, điện lạnh. Khảo sát tận nơi, báo giá rõ ràng. Hotline 0869 577 686.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Duy Long Home – Sửa chữa, cải tạo nhà cửa TP.HCM",
    template: "%s | Duy Long Home",
  },
  description,
  applicationName: site.name,
  // Bộ chung; trang chủ, dịch vụ, báo giá có bộ riêng (pageMeta / lib/service-details.ts)
  keywords: [
    "sửa chữa nhà",
    "sửa nhà trọn gói",
    "cải tạo nhà",
    "chống thấm",
    "sơn nhà",
    "ốp lát",
    "trần thạch cao",
    "điện nước",
    "cửa sắt",
    "điện lạnh",
    "sửa nhà Quận 12",
    "sửa nhà Gò Vấp",
    "sửa nhà TP.HCM",
    "Duy Long Home",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Sửa chữa, cải tạo nhà",
  formatDetection: { telephone: false, email: false, address: false },
  // Mã xác minh Google Search Console / Bing Webmaster Tools (cách "Thẻ HTML"). Không cần nếu đã xác minh bằng DNS
  // hoặc đã nhập site từ Google Search Console sang Bing.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: site.name,
    url: "/",
    title: "Duy Long Home – Sửa chữa, cải tạo nhà cửa TP.HCM",
    description,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duy Long Home – Sửa chữa, cải tạo nhà cửa TP.HCM",
    description,
    images: [defaultOgImage.url],
  },
};

/** Dữ liệu cấu trúc doanh nghiệp địa phương (Google hiểu tên, địa chỉ, giờ mở cửa, khu vực phục vụ) */
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}${defaultOgImage.url}`,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  priceRange: "Liên hệ báo giá",
  address: {
    "@type": "PostalAddress",
    streetAddress: "54/6A đường TTH 29, phường Tân Thới Hiệp",
    addressLocality: "Quận 12",
    addressRegion: "TP. Hồ Chí Minh",
    addressCountry: "VN",
  },
  geo: { "@type": "GeoCoordinates", latitude: officePos[0], longitude: officePos[1] },
  hasMap: `https://www.google.com/maps?q=${officePos[0]},${officePos[1]}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "21:00",
    },
  ],
  areaServed: [...site.areas, "TP. Hồ Chí Minh"].map((name) => ({ "@type": "Place", name })),
  sameAs: [site.facebookHref, site.zaloHref],
};

/** Tên website: Google hiện "Duy Long Home" thay cho tên miền ở dòng trên tiêu đề kết quả tìm kiếm */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  alternateName: ["DuyLongHome", "duylonghome.com.vn"],
  url: `${site.url}/`,
  inLanguage: "vi",
  publisher: { "@id": `${site.url}/#business` },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${vietnam.variable} ${barlow.variable} ${jetbrains.variable} ${montserrat.variable} ${dancing.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={businessJsonLd} />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <MobileContactBar />
        <ZaloWidget />
      </body>
    </html>
  );
}
