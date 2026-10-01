import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Chỉ bản production: chuyển mọi truy cập qua *.vercel.app về tên miền chính (301),
    // tránh Google lập chỉ mục 2 bản trùng nội dung. Bản preview vẫn xem được bình thường.
    if (process.env.VERCEL_ENV !== "production") return [];
    return [
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
