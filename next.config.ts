import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Chỉ bản production: chuyển mọi truy cập qua *.vercel.app về tên miền chính (301),
    // tránh Google lập chỉ mục 2 bản trùng nội dung. Bản preview vẫn xem được bình thường.
    // Công trình đổi tên → giữ link cũ (đã có thể được Google lập chỉ mục) bằng 301.
    const renamed = [
      {
        source: "/cong-trinh/op-lam-song-gia-go-cua-hang",
        destination: "/cong-trinh/sua-chua-quan-ca-phe-binh-thanh",
        permanent: true,
      },
      // Ngừng dịch vụ điện lạnh → chuyển link cũ về trang tổng.
      { source: "/dich-vu/dien-lanh", destination: "/dich-vu", permanent: true },
      { source: "/tin-tuc/may-lanh-chay-nuoc-kem-lanh", destination: "/tin-tuc", permanent: true },
    ];
    if (process.env.VERCEL_ENV !== "production") return renamed;
    return [
      ...renamed,
      {
        source: "/:path*",
        has: [{ type: "host", value: ".*\\.vercel\\.app" }],
        destination: "https://www.duylonghome.com.vn/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
