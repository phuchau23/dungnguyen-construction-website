import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { site } from "@/lib/site";

/** Khung nội dung chuẩn: tối đa 1440px, lề 80px desktop / 20px mobile */
export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 lg:px-20 ${className}`}>{children}</div>;
}

/** Nhãn nhỏ + tiêu đề section (H2) + mô tả bên phải */
export function SectionHead({
  eyebrow,
  title,
  aside,
  size = "lg",
}: {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  size?: "lg" | "md";
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
      <div className="flex flex-col gap-2.5">
        <div className="mono text-[11px] text-brand lg:text-[13px]">{eyebrow}</div>
        <h2
          className={`cd m-0 text-[38px] font-extrabold leading-[.95] ${
            size === "lg" ? "lg:text-[64px]" : "lg:text-[60px]"
          }`}
        >
          {title}
        </h2>
      </div>
      {aside && (
        <div className="max-w-[400px] text-[15px] leading-relaxed text-muted lg:text-base">{aside}</div>
      )}
    </div>
  );
}

/** Chữ tô màu thương hiệu trong tiêu đề */
export function Hl({ children }: { children: ReactNode }) {
  return <span className="text-brand">{children}</span>;
}

export type Crumb = { href?: string; label: string };

/** Hero đầu trang con: breadcrumb + H1 + đoạn mô tả + khối bên phải tùy chọn */
export function PageHero({
  crumbs,
  title,
  lead,
  aside,
}: {
  crumbs: Crumb[];
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line-soft bg-paper">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,35,48,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,35,48,.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <Container className="relative flex flex-col gap-8 py-10 lg:min-h-[340px] lg:flex-row lg:items-center lg:gap-10 lg:py-12">
        <div className="flex grow flex-col justify-center gap-4">
          <Breadcrumbs crumbs={crumbs} />
          <h1 className="cd m-0 max-w-[820px] text-[48px] font-extrabold leading-[.92] lg:text-[84px]">{title}</h1>
          {lead && <p className="m-0 max-w-[640px] text-base leading-relaxed text-muted lg:text-lg">{lead}</p>}
        </div>
        {aside}
      </Container>
    </section>
  );
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  // Dữ liệu cấu trúc BreadcrumbList: Google hiện đường dẫn "Trang chủ › Dịch vụ › ..." thay cho URL trong kết quả tìm kiếm
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm">
      <JsonLd data={breadcrumbJsonLd} />
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-line-strong">/</span>}
          {c.href ? (
            <Link href={c.href} className="text-muted hover:text-brand">
              {c.label}
            </Link>
          ) : (
            <span aria-current="page" className="font-semibold text-ink">
              {c.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

/** Thẻ "Cần tư vấn nhanh?" ở bên phải PageHero */
export function QuickContactCard() {
  return (
    <div className="qc relative flex w-full flex-col gap-3.5 self-center rounded-lg border border-line bg-white p-6 shadow-[0_20px_40px_-30px_rgba(27,35,48,.55)] lg:w-[360px] lg:shrink-0">
      <span className="mono text-[11px] text-brand">Cần tư vấn nhanh?</span>
      <a href={site.phoneHref} className="cd text-[40px] font-extrabold leading-none text-ink">
        {site.phone}
      </a>
      <span className="text-sm text-muted">Làm việc 7:00 – 21:00, cả tuần</span>
      <div className="flex gap-2">
        <a className="bp flex h-[46px] grow items-center justify-center gap-2 rounded-md text-[15px] font-bold" href={site.phoneHref}>
          <Icon name="phone" />
          Gọi ngay
        </a>
        <a className="bo flex h-[46px] grow items-center justify-center rounded-md text-[15px] font-bold" href={site.zaloHref} target="_blank" rel="noreferrer">
          Nhắn Zalo
        </a>
      </div>
    </div>
  );
}

/** Thẻ liên hệ qua Zalo (web không nhận form — mọi yêu cầu đi qua Zalo / điện thoại) */
export function ZaloCard({
  title = "Nhận tư vấn & báo giá",
  text = "Nhắn Zalo kèm vài tấm ảnh hiện trạng, kỹ thuật viên tư vấn hướng xử lý và hẹn lịch khảo sát.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-ink bg-white p-6">
      <h2 className="m-0 text-[22px] font-bold leading-tight">{title}</h2>
      <p className="m-0 text-[15px] leading-[1.6] text-muted">{text}</p>
      <a
        href={site.zaloHref}
        target="_blank"
        rel="noreferrer"
        className="flex h-12 items-center justify-center rounded-md bg-[#0068FF] hover:bg-[#0056d6]"
      >
        <span className="text-base font-bold text-white">Nhắn Zalo {site.phone}</span>
      </a>
      <span className="text-center text-[13px] text-muted">Làm việc {site.hours}</span>
    </div>
  );
}

/** Banner xanh "Nhà bạn đang cần sửa gì?" cuối trang */
export function CtaBanner({
  eyebrow = "Khảo sát tận nơi",
  title = "Nhà bạn đang cần sửa gì?",
  text = "Gửi ảnh hiện trạng, kỹ thuật viên tư vấn hướng xử lý và hẹn lịch khảo sát.",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-paper py-10 lg:py-[50px]">
      <Container>
        <div className="relative flex flex-col gap-6 overflow-hidden rounded-lg bg-brand p-6 text-white lg:min-h-[220px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-0">
          <div className="pointer-events-none absolute -right-[60px] -top-[60px] size-[260px] rounded-full border-[40px] border-white/[.07]" />
          <div className="relative flex flex-col gap-2.5">
            <span className="mono text-[11px] text-peach lg:text-xs">{eyebrow}</span>
            <div className="cd text-[36px] font-extrabold leading-[.95] lg:text-[50px]">{title}</div>
            <span className="text-sm text-brand-mist lg:text-base">{text}</span>
          </div>
          <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row">
            <a className="bw flex h-[58px] items-center justify-center gap-2.5 rounded-lg px-6 text-[17px] font-bold" href={site.phoneHref}>
              <Icon name="phone" />
              {site.phone}
            </a>
            <Link className="bol flex h-[58px] items-center justify-center gap-2.5 rounded-lg px-6 text-[17px] font-bold" href="/bao-gia">
              Yêu cầu báo giá
              <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Ô ảnh giữ chỗ (kẻ sọc) — thay bằng next/image khi có ảnh thật */
export function Placeholder({
  label,
  src,
  alt = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  className = "",
  children,
}: {
  label?: string;
  /** Có ảnh thì hiện ảnh thay cho nền kẻ sọc */
  src?: string;
  alt?: string;
  sizes?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`${src ? "overflow-hidden bg-sand" : "ph"} relative ${className}`}>
      {src && <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />}
      {label && !src && (
        <span className="mono absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] text-muted">
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
