/**
 * Báo cho Bing (và Yandex, Seznam, Naver… qua IndexNow) biết các trang đã đổi để lập chỉ mục nhanh.
 * Chạy sau khi deploy:  npm run indexnow            → gửi toàn bộ URL trong sitemap
 *                       npm run indexnow -- /dich-vu/chong-tham /tin-tuc/abc   → chỉ gửi các trang này
 * Khóa nằm ở public/<KEY>.txt — đổi khóa thì đổi cả tên file và nội dung.
 */
const KEY = "c42e25e31cd7719a3ff03695a9fe11d5";
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.duylonghome.com.vn").replace(/\/$/, "");

const paths = process.argv.slice(2);
let urlList;
if (paths.length) {
  urlList = paths.map((p) => (p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? "" : "/"}${p}`));
} else {
  const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}
if (!urlList.length) throw new Error("Không có URL nào để gửi");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
// 200/202 = đã nhận; 403 = chưa thấy file khóa trên site (chưa deploy?); 422 = URL không thuộc host
console.log(`IndexNow: ${res.status} ${res.statusText} — ${urlList.length} URL`);
if (!res.ok) {
  console.log(await res.text());
  process.exit(1);
}
