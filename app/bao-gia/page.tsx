import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Icon } from "@/components/Icon";
import { Container, Hl, PageHero, QuickContactCard } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Báo giá sửa chữa nhà qua Zalo",
  description:
    "Nhận báo giá sửa chữa, cải tạo nhà qua Zalo: gửi ảnh hiện trạng, kỹ thuật viên Duy Long Home tư vấn, hẹn lịch khảo sát và gửi báo giá chi tiết bằng văn bản.",
  path: "/bao-gia",
});

const steps = [
  {
    t: "Nhắn Zalo, gửi ảnh hiện trạng",
    d: "Chụp vài tấm ảnh chỗ cần sửa, kèm địa chỉ và mô tả ngắn tình trạng.",
  },
  {
    t: "Kỹ thuật viên tư vấn, hẹn khảo sát",
    d: "Xem ảnh, giải thích sơ bộ nguyên nhân và hẹn giờ đến tận nhà đo đạc.",
  },
  {
    t: "Nhận báo giá chi tiết bằng văn bản",
    d: "Báo giá tách từng hạng mục, gia đình đồng ý mới bắt đầu thi công.",
  },
];

const includes = [
  { t: "Hạng mục & nội dung thi công", d: "Liệt kê từng công việc, khối lượng, vật tư sử dụng." },
  { t: "Tiến độ dự kiến", d: "Số ngày thi công và thứ tự các hạng mục." },
  { t: "Điều kiện bảo hành", d: "Thời gian bảo hành theo từng hạng mục." },
  { t: "Phương án thay thế", d: "Gợi ý phương án phù hợp nhiều mức ngân sách." },
];

export default function BaoGiaPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Trang chủ" }, { label: "Yêu cầu báo giá" }]}
        title={
          <>
            Nhận báo giá <Hl>trong 3 bước</Hl>
          </>
        }
        lead="Nhắn Zalo cho chúng tôi kèm ảnh hiện trạng. Kỹ thuật viên sẽ tư vấn, hẹn lịch khảo sát và gửi báo giá chi tiết bằng văn bản."
        aside={<QuickContactCard />}
      />

      <section className="bg-paper pb-10 pt-8 lg:pt-[60px]">
        <Container className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10 xl:grid-cols-[minmax(0,860px)_minmax(0,1fr)]">
          <div className="flex flex-col gap-8 rounded-lg border border-ink bg-white p-6 lg:p-10">
            <ol className="m-0 flex list-none flex-col p-0">
              {steps.map((s, i) => (
                <li key={s.t} className="flex gap-5 border-b border-line py-6 first:pt-0 last:border-b-0 lg:gap-8">
                  <span className="cd w-10 shrink-0 text-[40px] font-extrabold leading-none text-brand lg:text-[52px]">
                    {i + 1}
                  </span>
                  <span className="flex flex-col gap-1.5">
                    <span className="text-[18px] font-bold lg:text-[21px]">{s.t}</span>
                    <span className="text-[15px] leading-[1.6] text-muted lg:text-base">{s.d}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.zaloHref}
                target="_blank"
                rel="noreferrer"
                className="flex h-14 grow items-center justify-center rounded-md bg-[#0068FF] px-6 hover:bg-[#0056d6]"
              >
                <span className="text-[17px] font-bold text-white">Nhắn Zalo {site.phone}</span>
              </a>
              <a href={site.phoneHref} className="bo flex h-14 items-center justify-center gap-2 rounded-md px-6 text-[17px] font-bold">
                <Icon name="phone" />
                Gọi ngay
              </a>
            </div>
          </div>

          <aside className="flex flex-col gap-5">
            <div className="rounded-lg border border-line bg-white px-6 pb-2.5 pt-6">
              <h2 className="cd m-0 pb-3.5 text-[28px] font-extrabold leading-none">Báo giá gồm những gì?</h2>
              <ul className="m-0 list-none p-0">
                {includes.map((it) => (
                  <li key={it.t} className="flex items-start gap-3 border-t border-line py-3.5">
                    <Icon name="check" size={18} className="mt-0.5 shrink-0 text-brand" />
                    <div className="flex flex-col gap-[3px]">
                      <span className="text-[15px] font-bold">{it.t}</span>
                      <span className="text-sm leading-normal text-muted">{it.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a className="bp flex items-center gap-4 rounded-lg px-6 py-[22px]" href={site.phoneHref}>
              <Icon name="phone" size={30} className="shrink-0" />
              <span className="flex flex-col">
                <span className="text-[13px] text-brand-mist">Cần gấp? Gọi ngay</span>
                <span className="cd text-[34px] font-extrabold leading-none">{site.phone}</span>
              </span>
            </a>

          </aside>
        </Container>
      </section>
    </>
  );
}
