import Image from "next/image";
import { site } from "@/lib/site";

type MarkProps = {
  size?: number;
  /** Màu nét chính */
  color?: string;
};

/**
 * Biểu tượng Duy Long Home.
 * Có `site.logo` thì hiện ảnh logo; chưa có thì hiện logo chữ tạm (mái nhà + "DL").
 */
export function LogoMark({ size = 76, color = "#1F4E96" }: MarkProps) {
  if (site.logo) {
    return (
      <Image
        src={site.logo}
        alt=""
        width={size}
        height={size}
        sizes={`${size}px`}
        className="shrink-0 object-contain"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <path d="M6 28L32 8l26 20" fill="none" stroke={color} strokeWidth={5} strokeLinejoin="miter" />
      <text
        x="32"
        y="53"
        textAnchor="middle"
        fill={color}
        fontSize="24"
        fontWeight="800"
        fontFamily="var(--font-montserrat), sans-serif"
        letterSpacing="-1"
      >
        DL
      </text>
    </svg>
  );
}
