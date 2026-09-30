"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { LogoMark } from "./Logo";
import { site } from "@/lib/site";

/** Biểu tượng Zalo: bong bóng chat trắng có chữ "Zalo" trên nền xanh */
function ZaloGlyph({ size = 34 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
      <path
        d="M9 10.5C9 7.5 11.5 5 14.5 5h19C36.5 5 39 7.5 39 10.5v17c0 3-2.5 5.5-5.5 5.5H20l-7.5 6.5c-.8.7-2 .1-1.9-.9L11 33h.5A2.5 2.5 0 0 1 9 30.5z"
        fill="#fff"
      />
      <text
        x="24"
        y="23.5"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="11.5"
        fill="#0068FF"
      >
        Zalo
      </text>
    </svg>
  );
}

export function ZaloWidget() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    ctaRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointer(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed right-4 bottom-[92px] z-50 flex flex-col items-end gap-3 lg:right-6 lg:bottom-6"
    >
      {open && (
        <div
          id="zalo-dialog"
          role="dialog"
          aria-labelledby="zalo-dialog-title"
          className="zalo-pop max-h-[calc(100dvh-190px)] w-[min(340px,calc(100vw-32px))] overflow-y-auto rounded-xl lg:max-h-[calc(100dvh-120px)] border border-line bg-white shadow-[0_24px_48px_-20px_rgba(27,35,48,.45)]"
        >
          <div className="flex items-center gap-3 bg-[#0068FF] px-4 py-3.5 text-white">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white">
              <LogoMark size={36} />
            </span>
            <div className="flex min-w-0 grow flex-col">
              <span id="zalo-dialog-title" className="truncate text-[15px] font-bold">
                {site.name} – Zalo
              </span>
              <span className="flex items-center gap-1.5 text-xs text-white/85">
                <span className="size-2 rounded-full bg-[#3BE37B]" />
                Thường phản hồi trong vài phút
              </span>
            </div>
            <button
              type="button"
              aria-label="Đóng"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-white/15"
            >
              <Icon name="close" size={18} />
            </button>
          </div>

          <div className="flex flex-col gap-3 bg-[#F2F5FA] p-4">
            <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm leading-relaxed text-ink shadow-sm">
              Xin chào! Duy Long Home có thể giúp gì cho ngôi nhà của bạn?
            </div>
            <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-sm leading-relaxed text-ink shadow-sm">
              Gửi ảnh hiện trạng qua Zalo, kỹ thuật viên sẽ tư vấn hướng xử lý và báo giá miễn phí.
            </div>
          </div>

          <div className="flex flex-col gap-2.5 p-4">
            <a
              ref={ctaRef}
              href={site.zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0068FF] text-[15px] font-bold text-white hover:bg-[#0056D6]"
            >
              <Icon name="chat" size={20} />
              Chat Zalo ngay
            </a>
            <a
              href={site.phoneHref}
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-line text-sm font-semibold text-ink hover:border-brand hover:text-brand"
            >
              <Icon name="phone" size={18} />
              Hoặc gọi {site.phone}
            </a>
            <span className="text-center text-xs text-muted">Zalo: {site.phone} · 7:00 – 21:00 cả tuần</span>
          </div>
        </div>
      )}

      {!open && (
        <a
          href={site.facebookHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook Duy Long Home"
          className="relative mr-1 flex size-[52px] items-center justify-center rounded-full bg-[#1877F2] text-white shadow-[0_10px_24px_-8px_rgba(24,119,242,.7)] hover:bg-[#0f63d1] lg:size-14"
        >
          <span aria-hidden="true" className="zalo-wave absolute inset-0 rounded-full bg-[#1877F2]" />
          <span className="zalo-shake relative flex">
            <FacebookGlyph />
          </span>
        </a>
      )}

      {!open && (
        <a
          href={site.phoneHref}
          aria-label={`Gọi ${site.phone}`}
          className="relative mr-1 flex size-[52px] items-center justify-center rounded-full bg-accent text-white shadow-[0_10px_24px_-8px_rgba(224,122,46,.7)] hover:bg-accent-dark lg:mr-1 lg:size-14"
        >
          <span aria-hidden="true" className="zalo-wave absolute inset-0 rounded-full bg-accent" />
          <span className="zalo-shake relative flex">
            <Icon name="phone" size={24} />
          </span>
        </a>
      )}

      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? "Đóng hộp chat Zalo" : "Liên hệ qua Zalo"}
        aria-expanded={open}
        aria-controls="zalo-dialog"
        onClick={() => setOpen((v) => !v)}
        className="relative flex size-[60px] cursor-pointer items-center justify-center rounded-full bg-[#0068FF] shadow-[0_10px_24px_-8px_rgba(0,104,255,.7)] lg:size-16"
      >
        {!open && (
          <>
            <span aria-hidden="true" className="zalo-wave absolute inset-0 rounded-full bg-[#0068FF]" />
            <span aria-hidden="true" className="zalo-wave zalo-wave-2 absolute inset-0 rounded-full bg-[#0068FF]" />
          </>
        )}
        <span className={`relative flex ${open ? "" : "zalo-shake"}`}>
          {open ? <span className="text-white"><Icon name="close" size={26} /></span> : <ZaloGlyph />}
        </span>
      </button>
    </div>
  );
}

/** Chữ "f" của Facebook */
function FacebookGlyph() {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} aria-hidden="true" fill="currentColor">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z" />
    </svg>
  );
}
