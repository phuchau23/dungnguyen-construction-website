import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Container, CtaBanner, Hl, PageHero, Placeholder, QuickContactCard, SectionHead } from "@/components/ui";
import { services } from "@/lib/data";
import { getServiceDetail } from "@/lib/service-details";

export const metadata: Metadata = pageMeta({
  title: "Dịch vụ sửa chữa nhà TP.HCM",
  description:
    "7 hạng mục sửa chữa nhà tại TP.HCM: sửa chữa cải tạo, chống thấm, sơn nước, ốp lát, trần thạch cao, điện nước và cửa sắt. Khảo sát tận nơi, báo giá chi tiết trước khi thi công.",
  keywords: ["dịch vụ sửa chữa nhà", "sửa chữa nhà TP.HCM", "chống thấm", "sơn nhà", "ốp lát gạch", "trần thạch cao", "sửa điện nước", "làm cửa sắt"],
  path: "/dich-vu",
  image: "/sua-nha-tron-goi/1790744682344_751968165130597158_751968165130597158_89fd8a72872b666cdca46240d42bad12.jpg",
  imageAlt: "Đội thợ thi công sửa chữa nhà",
});

const packages = [
  {
    no: "01",
    title: "Gói xử lý thấm dột",
    text: "Chống thấm sân thượng + sơn lại trần, tường bị ố",
    fit: "Phù hợp nhà phố bị thấm trước mùa mưa",
    featured: false,
  },
  {
    no: "02",
    title: "Gói làm mới nhà",
    text: "Sơn lại trong – ngoài + sửa điện nước + thay thiết bị vệ sinh",
    fit: "Phù hợp nhà cũ 10–15 năm, chuẩn bị cho thuê hoặc đón Tết",
    featured: true,
  },
  {
    no: "03",
    title: "Gói cải tạo nhà vệ sinh",
    text: "Đục bỏ gạch cũ, chống thấm, ốp lát mới, lắp thiết bị",
    fit: "Phù hợp nhà vệ sinh xuống cấp, thấm sang phòng bên",
    featured: false,
  },
];

export default function DichVuPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Trang chủ" }, { label: "Dịch vụ" }]}
        title={
          <>
            7 hạng mục <Hl>sửa chữa nhà</Hl>
          </>
        }
        lead="Một đầu mối cho mọi hạng mục trong ngôi nhà — khảo sát tận nơi, tư vấn phương án và báo giá chi tiết trước khi thi công."
        aside={<QuickContactCard />}
      />

      {/* Danh sách dịch vụ */}
      <section className="bg-paper pb-10 pt-[60px] lg:pt-[90px]">
        <Container className="flex flex-col gap-8 lg:gap-9">
          <SectionHead
            size="md"
            eyebrow="Dịch vụ"
            title={
              <>
                Chọn hạng mục <Hl>nhà bạn cần</Hl>
              </>
            }
            aside="Chưa rõ nguyên nhân hư hỏng? Gửi ảnh qua Zalo, kỹ thuật viên sẽ gợi ý hạng mục phù hợp."
          />
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li
                key={s.slug}
                className="svc flex min-h-[440px] flex-col overflow-hidden rounded-lg border border-line bg-white lg:min-h-[470px]"
              >
                <Placeholder
                  src={getServiceDetail(s.slug)?.intro.src}
                  alt={s.title}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-[170px] shrink-0 overflow-visible!"
                >
                  <div className="absolute -bottom-[26px] left-5 flex size-14 items-center justify-center rounded-lg border-[3px] border-white bg-brand text-white">
                    <Icon name={s.icon} size={28} className="shrink-0" />
                  </div>
                  <span className="mono absolute right-4 top-4 rounded bg-white/90 px-2 py-1 text-[11px] text-muted">{s.code}</span>
                </Placeholder>
                <div className="flex grow flex-col gap-3 px-[22px] pb-[22px] pt-[42px]">
                  <h3 className="cd m-0 text-[30px] font-extrabold leading-none">{s.title}</h3>
                  <p className="m-0 text-sm leading-[1.55] text-muted">{s.desc}</p>
                  <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-[15px]">
                        <Icon name="check" size={18} className="shrink-0 text-brand" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/dich-vu/${s.slug}`}
                    className="mt-auto flex items-center justify-between border-t border-dashed border-line pt-3 text-[15px] font-bold text-brand hover:text-brand-dark"
                  >
                    Xem chi tiết &amp; nhận báo giá
                    <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gói kết hợp */}
      <section className="bg-white pb-[54px] pt-[60px] lg:pt-[90px]">
        <Container className="flex flex-col gap-8 lg:gap-9">
          <SectionHead
            size="md"
            eyebrow="Gói kết hợp"
            title={
              <>
                Sửa một lần, <Hl>ở yên nhiều năm</Hl>
              </>
            }
            aside="Kết hợp nhiều hạng mục trong một lần thi công giúp tiết kiệm thời gian và công dọn dẹp."
          />
          <div className="grid grid-cols-1 gap-4 [perspective:1200px] md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.no}
                className={`qc flex min-h-[300px] flex-col gap-3.5 rounded-lg border p-7 ${
                  p.featured ? "border-brand bg-brand text-white" : "border-line bg-white text-ink"
                }`}
              >
                <span className={`mono text-[11px] ${p.featured ? "text-peach" : "text-accent-dark"}`}>
                  Gói kết hợp {p.no}
                </span>
                <h3 className="cd m-0 text-[32px] font-extrabold leading-[.95] lg:text-[36px]">{p.title}</h3>
                <p className="m-0 text-base leading-[1.55]">{p.text}</p>
                <p className={`m-0 text-sm ${p.featured ? "text-brand-mist" : "text-muted"}`}>{p.fit}</p>
                <Link
                  href="/bao-gia"
                  className={`${p.featured ? "bw" : "bp"} mt-auto flex h-12 items-center justify-center gap-2 rounded-md font-bold`}
                >
                  Nhận tư vấn gói này
                  <Icon name="arrow" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
