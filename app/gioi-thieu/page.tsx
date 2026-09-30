import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Container, CtaBanner, Hl, PageHero, Placeholder, QuickContactCard, SectionHead } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Giới thiệu",
  description:
    "Về Duy Long Home – đơn vị sửa chữa, cải tạo nhà cửa tại TP.HCM. Hơn 10 năm kinh nghiệm, 1.500+ công trình, đội thợ lành nghề, báo giá rõ ràng, bảo hành dài hạn.",
  path: "/gioi-thieu",
  image: "/thay-nen-nha/1790746071156_751968165130597158_751968165130597158_38e751793d80adb68359e94d3517c383.jpg",
  imageAlt: "Đội thợ Duy Long Home tại công trình",
});

const values: { title: string; text: string }[] = [
  { title: "Uy tín – Tận tâm", text: "Đặt lợi ích khách hàng lên hàng đầu, làm như làm cho nhà mình." },
  { title: "Kinh nghiệm – Chuyên nghiệp", text: "Đội ngũ thợ lành nghề, thi công tỉ mỉ, đúng kỹ thuật." },
  { title: "Hỗ trợ nhanh", text: "Có mặt nhanh chóng, ưu tiên các sự cố gấp như rò rỉ, chập điện." },
  { title: "Giá cả hợp lý", text: "Báo giá rõ ràng từng hạng mục, không phát sinh ngoài thỏa thuận." },
  { title: "Minh bạch tiến độ", text: "Cập nhật hình ảnh thi công hằng ngày qua Zalo cho chủ nhà." },
  { title: "Bảo hành dài hạn", text: "Bảo hành theo từng hạng mục, ghi rõ trong hợp đồng." },
];

const aboutStats = [
  { v: "10+", l: "năm kinh nghiệm" },
  { v: "1.500+", l: "công trình đã bàn giao" },
  { v: "30+", l: "thợ lành nghề" },
  { v: "8", l: "hạng mục thi công" },
];

const team = [
  { img: "/sua-nha-tron-goi/1790744682322_751968165130597158_751968165130597158_f8357baa844150d41fc1e22884c717b5.jpg", title: "Kỹ sư kết cấu", text: "Khảo sát hiện trạng, đánh giá an toàn trước khi cải tạo, nâng tầng." },
  { img: "/sua-nha-tron-goi/1790744682354_751968165130597158_751968165130597158_07ba5370a4c47c109221d145e3723d8a.jpg", title: "Giám sát thi công", text: "Theo dõi tiến độ, nghiệm thu từng hạng mục cùng chủ nhà." },
  { img: "/chong-tham/1790684753141_751968165130597158_751968165130597158_83740481b7ef5b7a0193644f814f1f69.jpg", title: "Tổ thợ chống thấm – sơn", text: "Chuyên xử lý sân thượng, nhà vệ sinh, tường ngoài và sơn hoàn thiện." },
  { img: "/lam-cua-sat/1790684716739_751968165130597158_751968165130597158_ab847dafc59b631a35f1120ed94531d9.jpg", title: "Tổ thợ điện nước – điện lạnh – cửa sắt", text: "Sửa điện nước, vệ sinh và sửa chữa máy lạnh, gia công lắp đặt cửa sắt, lan can." },
];

export default function GioiThieuPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Trang chủ" }, { label: "Giới thiệu" }]}
        title={
          <>
            Về <Hl>Duy Long Home</Hl>
          </>
        }
        lead="Đơn vị sửa chữa – cải tạo nhà cửa tại TP.HCM. Chúng tôi làm từ những việc nhỏ như một vết thấm, một đường ống, đến cải tạo cả ngôi nhà."
        aside={<QuickContactCard />}
      />

      {/* Câu chuyện */}
      <section className="bg-white py-14 lg:py-[90px]">
        <Container className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-16">
          <Placeholder
            label="[Ảnh đội thợ tại công trình]"
            src="/thay-nen-nha/1790746071156_751968165130597158_751968165130597158_38e751793d80adb68359e94d3517c383.jpg"
            alt="Đội thợ Duy Long Home xây lại tường vòm cầu thang"
            sizes="(min-width: 1024px) 620px, 100vw"
            className="h-[300px] shrink-0 rounded-lg border border-line sm:h-[420px] lg:h-[520px] lg:w-[620px]"
          >
            <div className="absolute bottom-5 right-4 flex items-center gap-4 rounded-lg border border-line bg-white px-5 py-4 shadow-[0_20px_40px_-30px_rgba(27,35,48,.6)] lg:-right-7 lg:bottom-9 lg:px-6 lg:py-5">
              <div className="cd text-[48px] font-extrabold leading-none text-brand lg:text-[64px]">10+</div>
              <div className="text-sm font-semibold leading-[1.35] lg:text-[15px]">
                năm sửa chữa,
                <br />
                cải tạo nhà cửa
              </div>
            </div>
          </Placeholder>
          <div className="flex grow flex-col justify-center gap-5">
            <div className="mono text-[11px] text-brand lg:text-[13px]">Câu chuyện của chúng tôi</div>
            <h2 className="cd m-0 text-[38px] font-extrabold leading-[.95] lg:text-[56px]">
              Bắt đầu từ những ngôi nhà <Hl>trong xóm</Hl>
            </h2>
            <p className="m-0 text-base leading-[1.7] text-muted lg:text-[17px]">
              Duy Long Home khởi đầu là một tổ thợ nhỏ tại Quận 12, nhận chống thấm và sửa điện nước cho bà con quanh
              khu Tân Thới Hiệp. Khách cũ giới thiệu khách mới, tổ thợ dần mở rộng thêm sơn nước, ốp lát, trần thạch
              cao, cửa sắt và điện lạnh.
            </p>
            <p className="m-0 text-base leading-[1.7] text-muted lg:text-[17px]">
              Đến nay, chúng tôi vẫn giữ cách làm cũ: đến tận nơi xem nhà, nói rõ nguyên nhân hư hỏng, đưa phương án
              phù hợp ngân sách và báo giá chi tiết bằng văn bản trước khi thi công.
            </p>
            <div className="flex flex-col gap-3 pt-1.5 sm:flex-row">
              <Link className="bp flex h-[54px] items-center justify-center gap-2.5 rounded-lg px-6 font-bold" href="/bao-gia">
                Đặt lịch khảo sát
                <Icon name="arrow" />
              </Link>
              <Link className="bo flex h-[54px] items-center justify-center rounded-lg px-6 font-bold" href="/cong-trinh">
                Xem công trình
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="bg-paper py-14 lg:py-[90px]">
        <Container className="flex flex-col gap-8 lg:gap-10">
          <h2 className="m-0 text-balance text-[28px] font-bold leading-tight tracking-[-0.01em] lg:text-[40px]">
            Uy tín – Chất lượng – Vì ngôi nhà của bạn
          </h2>
          <dl className="m-0 grid grid-cols-1 gap-x-12 border-t border-ink sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col gap-2 border-b border-line py-6 lg:py-8">
                <dt className="text-[18px] font-semibold text-ink lg:text-[20px]">{v.title}</dt>
                <dd className="m-0 text-[15px] leading-[1.65] text-ink/70 lg:text-base">{v.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Số liệu */}
      <section className="bg-ink py-10 lg:py-0">
        <Container className="grid grid-cols-2 gap-y-8 lg:min-h-[240px] lg:grid-cols-4 lg:items-center">
          {aboutStats.map((s) => (
            <div key={s.l} className="flex flex-col gap-1.5 border-l border-ink-line px-4 lg:px-8">
              <div className="cd text-[48px] font-extrabold leading-none text-white lg:text-[76px]">{s.v}</div>
              <div className="text-sm text-fog-2 lg:text-[15px]">{s.l}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* Đội ngũ */}
      <section className="bg-white py-14 lg:py-[90px]">
        <Container className="flex flex-col gap-9">
          <SectionHead
            eyebrow="Đội ngũ"
            size="md"
            title={
              <>
                Những người <Hl>làm nên ngôi nhà</Hl>
              </>
            }
            aside="Mỗi công trình có người phụ trách rõ ràng, chủ nhà liên hệ trực tiếp khi cần."
          />
          <div className="grid grid-cols-1 gap-4 [perspective:1400px] sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.title} className="pj flex flex-col overflow-hidden rounded-lg border border-line bg-white lg:min-h-[400px]">
                <Placeholder label="[Ảnh]" src={m.img} alt={m.title} className="h-[240px] shrink-0" />
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="cd m-0 text-[26px] font-extrabold leading-none">{m.title}</h3>
                  <p className="m-0 text-sm leading-[1.55] text-muted">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
