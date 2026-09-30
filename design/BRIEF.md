# Brief: chuyển design Claude Design → Next.js

Project: `D:\Out_Source\dungnguyen-construction-website` — Next.js 16.3 (App Router), React 19, Tailwind v4, TypeScript.
Next 16 có thay đổi so với kiến thức cũ: đọc `node_modules/next/dist/docs/01-app/...` khi cần (ví dụ `params` là `Promise`, dùng `PageProps<'/route/[slug]'>`, `generateStaticParams`, `generateMetadata`).

## Design nguồn
`design/*.dc.html` — mỗi file là 1 artboard desktop 1440px (trừ `TrangChuMobile.dc.html` 390px). Markup nằm trong `<x-dc>`; dữ liệu/logic nằm trong `<script data-dc-script>` (`renderVals()` trả về list, `<sc-for list="{{x}}">` = map, `<sc-if>` = điều kiện, `{{a.b}}` = giá trị). Link `XYZ.dc.html` → route tương ứng dưới đây. Header, nav, strip thông báo và footer của mỗi file ĐÃ được làm chung trong layout — bỏ qua các phần đó, chỉ làm phần nội dung giữa header và footer.

## Route map
| Design file | Route |
|---|---|
| PhuongAnB.dc.html (+ TrangChuMobile.dc.html cho mobile) | `/` → `app/page.tsx` |
| GioiThieu.dc.html | `/gioi-thieu` |
| DichVu.dc.html | `/dich-vu` |
| DichVuChiTiet.dc.html | `/dich-vu/[slug]` (design là trang Chống thấm) |
| BaoGia.dc.html | `/bao-gia` |
| CongTrinh.dc.html | `/cong-trinh` |
| CongTrinhChiTiet.dc.html | `/cong-trinh/[slug]` |
| TinTuc.dc.html | `/tin-tuc` |
| BaiViet.dc.html | `/tin-tuc/[slug]` |
| LienHe.dc.html | `/lien-he` |
| anchor `#bao-gia`, `#lien-he` trên trang chủ | giữ nguyên anchor trong trang chủ |

## Đã có sẵn (DÙNG, KHÔNG SỬA các file này — nhiều agent làm song song)
- `app/globals.css`: token màu Tailwind (`bg-brand`, `text-ink`, `bg-paper`, `bg-sand`, `border-line`, `border-line-soft`, `text-muted`, `bg-accent`, `text-peach`, `text-accent-dark`, `bg-brand-soft`, `text-brand-mist`, `border-stone`, `bg-paper-2`, `text-fog-2`, `bg-navy`, `text-sky`…) và class từ design: `.cd` (Barlow Condensed hoa), `.mono`, `.brand`, `.script`, `.ic`, nút `.bp` `.bw` `.bo` `.bol` `.lk`, `.field` (input/select/textarea), `.ph` (ảnh giữ chỗ sọc), hover `.qc` `.svc` `.pj` `.rv`, animation `.bob` `.orb` `.tk` `.rg` `.trv` `.halo-anim`. Mở file để xem đủ danh sách & mã màu.
- `components/Icon.tsx`: `<Icon name="phone|check|arrow|chevron|search|pin|clock|mail|calendar|menu|close|eye|tag|ruler|helmet|shield|messenger|chat|home|drop|roller|tiles|ceiling|bolt|pipe|gate" size={20} />`, `<Star />`. Icon khác chưa có → vẽ inline `<svg className="ic" viewBox="0 0 24 24">` ngay trong file của bạn.
- `components/Logo.tsx`: `<LogoMark size color bg />`.
- `components/ui.tsx`: `Container` (max-w 1440, px-5 lg:px-20), `SectionHead` (eyebrow + H2 + aside), `Hl` (chữ xanh), `PageHero` (breadcrumb + H1 + lead + aside), `Breadcrumbs`, `QuickContactCard`, `CtaBanner` ("Nhà bạn đang cần sửa gì?"), `Placeholder` (ô ảnh sọc).
- `lib/site.ts`: `site.phone`, `site.phoneHref`, `site.zaloHref`, `site.email`, `site.address`, `site.hours`…
- `lib/data.ts`: `services` (8, có `slug`), `projects` (6, có `slug`), `posts` (3, có `slug`), `steps`, `reviews`, `stats`.

Nếu cần thêm dữ liệu (thêm dự án, bài viết, chi tiết dịch vụ…) → tạo file dữ liệu RIÊNG trong thư mục route của bạn (ví dụ `app/cong-trinh/data.ts`) hoặc `lib/<ten>.ts` mới, KHÔNG sửa `lib/data.ts`. Component dùng riêng → đặt cạnh page (ví dụ `app/bao-gia/QuoteWizard.tsx`).

## Quy tắc chuyển đổi
1. Bám sát design: đúng nội dung chữ tiếng Việt, màu, cỡ chữ, khoảng cách, bo góc, border, thứ tự section, hiệu ứng hover. Style inline của design → class Tailwind (dùng giá trị tùy ý `text-[64px]`, `h-[190px]`… khi cần). Không đặt chiều cao cố định cho section như design (design dùng height cố định vì là artboard) — dùng padding (`pt-[90px]`…) để nội dung tự co giãn.
2. Responsive: design là desktop 1440 (áp dụng từ breakpoint `lg:` 1024px trở lên). Mobile (<lg): 1 cột hoặc 2 cột, lề 20px, H1 ~48px, H2 ~38px, theo phong cách `design/TrangChuMobile.dc.html`. Không được có thanh cuộn ngang ở 375px.
3. Server Component mặc định. Chỉ phần có state (tab, accordion, filter, form nhiều bước) mới tách thành Client Component nhỏ (`"use client"`). Dùng `next/link` cho link nội bộ.
4. Form: dùng `<form>` + `<label>` thật, input `type` đúng, `required` cho tên/SĐT. Chưa có backend → khi submit `preventDefault` và hiện thông báo cảm ơn trong trang (client component). Không gửi dữ liệu đi đâu.
5. Ảnh: design chưa có ảnh thật → dùng `Placeholder` / `.ph` với nhãn như design.
6. Mỗi page export `metadata` (hoặc `generateMetadata` cho trang [slug]) với `title` tiếng Việt + `description`. Trang [slug]: `generateStaticParams` từ dữ liệu, `notFound()` khi slug sai.
7. Accessibility: nút thật `<button>`, `aria-label` cho nút chỉ có icon, `aria-expanded` cho accordion, heading đúng cấp (1 H1/trang).
8. Code sạch, TypeScript chặt, không `any`. Không cài thêm package.

## Kiểm tra trước khi báo xong
- `npx tsc --noEmit` không lỗi (lỗi trong file người khác đang làm thì bỏ qua, chỉ đảm bảo file của bạn sạch).
- `npx eslint <các file của bạn>` không lỗi.
- KHÔNG chạy `next build` hay `next dev` (nhiều agent chạy song song sẽ xung đột thư mục `.next`). KHÔNG commit git.

Báo cáo cuối: danh sách file đã tạo, chỗ nào lệch design và vì sao, dữ liệu/placeholder nào cần chủ web cung cấp thật.
