/**
 * Tên miền chính thức — dùng cho canonical, sitemap, ảnh chia sẻ (Open Graph).
 * Bản build production luôn dùng tên miền này (không dùng *.vercel.app để Google không lập chỉ mục trùng).
 * NEXT_PUBLIC_SITE_URL chỉ để ghi đè khi cần thử trên tên miền khác.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "production" ? "https://www.duylonghome.com.vn" : "http://localhost:3000");

export const site = {
  name: "Duy Long Home",
  url: siteUrl.replace(/\/$/, ""),
  // Logo đầy đủ: public/logo.png. Biểu tượng vuông (mái nhà + DL) cắt từ logo, dùng ở header/footer/Zalo và favicon (app/icon.png).
  // Để trống `logo` thì hiện logo chữ tạm.
  logo: "/logo-mark.png",
  tagline: "Sửa chữa - Cải tạo nhà cửa",
  slogan: "Uy Tín - Chất Lượng - Vì Ngôi Nhà Của Bạn",
  phone: "0869 577 686",
  phoneHref: "tel:0869577686",
  // Link Zalo mở thẳng profile Zalo của số hotline (app trên điện thoại, zalo.me trên máy tính)
  // TODO: thay link Messenger / mạng xã hội thật
  zaloHref: "https://zalo.me/0869577686",
  messengerHref: "#",
  facebookHref: "https://www.facebook.com/profile.php?id=61595173610062",
  email: "duylonghome@gmail.com",
  address: "54/6A đường TTH 29, phường Tân Thới Hiệp, Quận 12, TP.HCM",
  addressShort: "54/6A đường TTH 29, P. Tân Thới Hiệp, Quận 12",
  hours: "7:00 – 21:00 (Cả tuần)",
  areas: ["Quận 12", "Gò Vấp", "Tân Bình", "Tân Phú", "Thủ Đức"],
};

export const nav = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/dich-vu", label: "Dịch vụ", dropdown: true },
  { href: "/dich-vu/chong-tham", label: "Chống thấm" },
  { href: "/bao-gia", label: "Báo giá" },
  { href: "/cong-trinh", label: "Công trình" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
];
