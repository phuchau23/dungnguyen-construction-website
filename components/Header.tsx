"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { LogoMark } from "./Logo";
import { nav, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/dich-vu") return pathname === "/dich-vu";
  return pathname === href || pathname.startsWith(href + "/");
}

const ticker = (
  <span className="pr-16">
    Nhận sửa chữa, cải tạo nhà cửa tất cả quận huyện tại TP.HCM —{" "}
    <span className="text-brand">
      Gửi ảnh hiện trạng qua Zalo {site.phone} để được tư vấn hướng xử lý
    </span>{" "}
    — Làm việc 7:00 – 21:00, cả tuần.
  </span>
);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Đóng menu mobile khi chuyển trang
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header>
      {/* Desktop top bar */}
      <div className="hidden h-[120px] items-stretch border-b border-line-soft bg-white pl-20 lg:flex">
        <Link
          href="/"
          aria-label="Duy Long Home – Trang chủ"
          className="flex w-[340px] shrink-0 items-center gap-3 text-brand"
        >
          <LogoMark size={96} />
          <div className="flex flex-col gap-[5px]">
            <div className="brand whitespace-nowrap text-[23px] leading-none text-brand">DUY LONG HOME</div>
            <div className="flex items-center gap-1.5">
              <span className="h-[1.5px] w-3 bg-brand" />
              <span className="brand text-[9.5px] font-bold tracking-[.05em] text-brand">
                SỬA CHỮA - CẢI TẠO NHÀ CỬA
              </span>
              <span className="h-[1.5px] w-3 bg-brand" />
            </div>
            <div className="script text-[13px] text-brand">{site.slogan}</div>
          </div>
        </Link>
        <div className="flex min-w-0 grow flex-col justify-center gap-1.5 border-l border-line-soft px-10">
          <div className="cd text-[26px] font-extrabold leading-[1.05] text-ink xl:text-[32px]">
            Uy tín – Chất lượng – <span className="text-brand">Vì ngôi nhà của bạn</span>
          </div>
          <div className="cd hidden text-[20px] font-semibold text-muted xl:block">
            Khảo sát tận nơi · Báo giá rõ ràng, không phát sinh · Bảo hành dài hạn
          </div>
        </div>
        <a
          className="bp flex w-[340px] shrink-0 items-center justify-end gap-[18px] pr-20 [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)] xl:w-[380px]"
          href={site.phoneHref}
        >
          <div className="rg flex size-14 items-center justify-center rounded-full border-2 border-white">
            <Icon name="phone" size={26} />
          </div>
          <div className="flex flex-col">
            <span className="cd text-[22px] font-bold text-peach">Hotline 24/7</span>
            <span className="cd text-[38px] font-extrabold leading-none">{site.phone}</span>
          </div>
        </a>
      </div>

      {/* Desktop nav */}
      <nav
        aria-label="Điều hướng chính"
        className="hidden h-14 bg-ink px-20 text-sm font-bold uppercase tracking-[.02em] lg:flex"
      >
        {nav.map((item, i) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`flex h-14 items-center gap-1.5 border-r border-ink-line px-4 text-snow hover:bg-brand hover:text-white xl:px-5 ${
                i === 0 ? "border-l" : ""
              } ${active ? "bg-brand text-white" : ""}`}
            >
              {item.label}
              {item.dropdown && <Icon name="chevron" size={14} />}
            </Link>
          );
        })}
      </nav>

      {/* Desktop strip: ticker + search */}
      <div className="hidden h-[52px] items-center gap-6 border-b border-line-soft bg-white px-20 lg:flex">
        <div className="mono flex h-[30px] shrink-0 items-center rounded bg-accent px-3 text-[11px] font-semibold text-ink">
          Thông báo
        </div>
        <div className="grow overflow-hidden whitespace-nowrap">
          <div className="tk inline-flex text-[15px] font-semibold text-ink">
            {ticker}
            {ticker}
          </div>
        </div>
        <form
          action="/tin-tuc"
          role="search"
          className="flex h-[38px] shrink-0 overflow-hidden rounded-md border border-ink"
        >
          <input
            type="search"
            name="q"
            aria-label="Tìm kiếm"
            placeholder="Nhập từ khóa…"
            className="w-[240px] border-0 bg-white px-3 text-sm outline-none"
          />
          <button
            type="submit"
            aria-label="Tìm kiếm"
            className="flex w-11 cursor-pointer items-center justify-center bg-ink text-white"
          >
            <Icon name="search" size={18} />
          </button>
        </form>
      </div>

      {/* Mobile header */}
      <div className="sticky top-0 z-40 flex h-[68px] items-center justify-between border-b border-line-soft bg-white px-4 lg:hidden">
        <Link href="/" aria-label="Duy Long Home – Trang chủ" className="flex items-center gap-2">
          <LogoMark size={54} />
          <span className="flex flex-col gap-0.5">
            <span className="brand text-[18px] leading-none text-brand">DUY LONG HOME</span>
            <span className="brand text-[7.5px] font-bold tracking-[.04em] text-brand">
              SỬA CHỮA - CẢI TẠO NHÀ CỬA
            </span>
          </span>
        </Link>
        <div className="flex gap-2">
          <a
            className="bp flex size-11 items-center justify-center rounded-md"
            href={site.phoneHref}
            aria-label={`Gọi ${site.phone}`}
          >
            <Icon name="phone" size={20} />
          </a>
          <button
            type="button"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="bo flex size-11 cursor-pointer items-center justify-center rounded-md"
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
      <div className="flex h-10 items-center justify-center gap-2 bg-ink text-xs font-semibold text-snow lg:hidden">
        <Icon name="clock" size={14} className="shrink-0" />
        7:00 – 21:00 cả tuần · Tất cả quận huyện TP.HCM
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[68px] bottom-0 z-40 overflow-y-auto bg-white lg:hidden"
        >
          <nav aria-label="Menu di động" className="flex flex-col px-4 py-3">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex h-14 items-center justify-between border-b border-line-soft text-base font-bold uppercase ${
                    active ? "text-brand" : "text-ink"
                  }`}
                >
                  {item.label}
                  <Icon name="arrow" size={18} />
                </Link>
              );
            })}
          </nav>
          <div className="flex flex-col gap-3 px-4 pb-24 pt-4">
            <a className="bp flex h-14 items-center justify-center gap-2 rounded-md text-base font-bold" href={site.phoneHref}>
              <Icon name="phone" size={20} />
              Gọi {site.phone}
            </a>
            <a className="bo flex h-14 items-center justify-center rounded-md text-base font-bold" href={site.zaloHref} target="_blank" rel="noreferrer">
              Nhắn Zalo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
