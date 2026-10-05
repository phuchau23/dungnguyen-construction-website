import Link from "next/link";
import { Icon } from "./Icon";
import { LogoMark } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-snow">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 pt-12 lg:px-20 lg:pt-[72px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3.5">
              <LogoMark size={84} />
              <div className="flex flex-col gap-1">
                <div className="brand whitespace-nowrap text-[24px] leading-none text-white">DUY LONG HOME</div>
                <div className="brand text-[10px] font-bold tracking-[.05em] text-fog">
                  SỬA CHỮA - CẢI TẠO NHÀ CỬA
                </div>
              </div>
            </div>
            <p className="text-[15px] leading-relaxed text-fog-2">
              Sửa chữa – Cải tạo nhà cửa. Phục vụ tận tâm – Kiến tạo tổ ấm.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <div className="mono mb-1.5 text-xs text-accent">Dịch vụ</div>
            <Link className="lk" href="/dich-vu/sua-chua-cai-tao-nha">Sửa chữa nhà</Link>
            <Link className="lk" href="/dich-vu/chong-tham">Chống thấm</Link>
            <Link className="lk" href="/dich-vu/son-nuoc-son-dau">Sơn nước – Sơn dầu</Link>
            <Link className="lk" href="/dich-vu">Ốp lát · Trần thạch cao</Link>
            <Link className="lk" href="/dich-vu">Điện nước · Cửa sắt</Link>
          </div>
          <div className="flex flex-col gap-2.5 text-[15px] leading-normal">
            <div className="mono mb-1.5 text-xs text-accent">Liên hệ</div>
            <a className="lk" href={site.phoneHref}>{site.phone}</a>
            <a className="lk" href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.address}</span>
            <span>{site.hours}</span>
          </div>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <div className="mono mb-1.5 text-xs text-accent">Khu vực</div>
            <span>Quận 12 · Gò Vấp</span>
            <span>Tân Bình · Tân Phú</span>
            <span>Thủ Đức và các khu vực lân cận</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-ink-line py-5 text-sm text-fog-2 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Duy Long Home. All rights reserved.</span>
          <div className="flex flex-wrap gap-6">
            <a className="lk" href={site.facebookHref} target="_blank" rel="noreferrer">Facebook</a>
            <a className="lk" href={site.zaloHref}>Zalo</a>
          </div>
        </div>
      </div>
      <a
        className="bp hidden h-[72px] items-center justify-center gap-4 lg:flex"
        href={site.phoneHref}
      >
        <Icon name="phone" size={24} />
        <span className="cd text-[30px] font-extrabold">
          Hotline {site.phone} · <span className="text-peach">Khảo sát tận nơi</span>
        </span>
      </a>
      {/* Khoảng trống cho thanh liên hệ cố định trên mobile */}
      <div className="h-[76px] lg:hidden" />
    </footer>
  );
}

/** Thanh gọi / Zalo / báo giá cố định ở đáy màn hình (mobile) */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid h-[76px] grid-cols-3 gap-2 border-t border-line bg-white p-3 shadow-[0_-10px_24px_-18px_rgba(27,35,48,.5)] lg:hidden">
      <a className="bp flex items-center justify-center gap-1.5 rounded-md text-sm font-bold" href={site.phoneHref}>
        <Icon name="phone" size={20} />
        Gọi
      </a>
      <a className="bo flex items-center justify-center rounded-md text-sm font-bold" href={site.zaloHref} target="_blank" rel="noreferrer">
        Zalo
      </a>
      <Link className="bo flex items-center justify-center rounded-md text-sm font-bold" href="/bao-gia">
        Báo giá
      </Link>
    </div>
  );
}
