import type { Metadata } from "next";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Icon, Star } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Container, Hl, Placeholder, SectionHead } from "@/components/ui";
import { posts, projects, reviews, services, stats } from "@/lib/data";
import { articles } from "@/lib/posts";
import { site } from "@/lib/site";
import { AreaMap } from "./_home/AreaMap";
import { Faq } from "./_home/Faq";
import { faqs, quotes } from "./_home/data";

export const metadata: Metadata = pageMeta({
  title: "Duy Long Home – Sửa chữa nhà trọn gói TP.HCM",
  description:
    "Sửa chữa, cải tạo nhà trọn gói tại TP.HCM: chống thấm, sơn nước, ốp lát, trần thạch cao, điện nước, cửa sắt, điện lạnh. Khảo sát tận nơi, báo giá rõ ràng, bảo hành dài hạn. Hotline 0869 577 686.",
  path: "/",
  absoluteTitle: true,
});

// Lưu ý: globals.css có `a { color: inherit }` (không nằm trong @layer) nên sẽ thắng
// các class màu chữ của Tailwind đặt trực tiếp trên <a>/<Link>. Vì vậy màu chữ của link
// được đặt ở phần tử con (<span>) hoặc thừa hưởng từ phần tử cha.

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteCards />
      <Stats />
      <Services />
      <Areas />
      <Pricing />
      <Process />
      <Projects />
      <Reviews />
      <News />
      <FaqSection />
      <Contact />
    </>
  );
}

/* ------------------------------------------------------------------ Hero */

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-68px)] items-center justify-center overflow-hidden bg-ink lg:min-h-[calc(100svh-172px)]">
      <Image src="/chong-tham/1790684753141_751968165130597158_751968165130597158_83740481b7ef5b7a0193644f814f1f69.jpg" alt="" fill preload sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <Container className="relative flex flex-col items-center gap-[18px] py-16 text-center text-white lg:gap-[26px] lg:pb-[130px] lg:pt-20">
        <div className="mono flex items-center gap-3 text-[11px] text-peach lg:text-[13px]">
          <span className="hidden h-0.5 w-10 bg-accent lg:block" />
          Sửa chữa – Cải tạo nhà cửa
          <span className="hidden h-0.5 w-10 bg-accent lg:block" />
        </div>
        <h1 className="cd m-0 text-[54px] font-extrabold leading-[.9] sm:text-[68px] lg:text-[84px] xl:text-[100px]">
          Sửa chữa nhà <br className="hidden lg:block" />
          <span className="text-accent">trọn gói</span> TP.HCM
        </h1>
        <p className="m-0 max-w-[640px] text-base leading-[1.6] text-white/85 lg:text-[19px]">
          Chống thấm, sơn nước, ốp lát, trần thạch cao, điện nước, cửa sắt, điện lạnh — một đầu mối từ khảo sát,
          báo giá đến thi công và bảo hành.
        </p>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------- Quote cards */

function QuoteCards() {
  return (
    <section className="relative pb-10 lg:-mt-20 lg:pb-[50px]">
      <Container>
        <div className="mb-5 flex flex-col gap-2 lg:hidden">
          <span className="mono text-[11px] text-brand">Báo giá</span>
          <h2 className="cd m-0 text-[38px] font-extrabold leading-[.95]">
            Nhận báo giá <Hl>chi tiết</Hl>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-2.5 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {quotes.map((q) => (
            <a
              key={q.n}
              href="#bao-gia"
              className="qc flex items-center gap-3.5 rounded-lg border border-ink bg-white px-4 py-3.5 shadow-[0_1px_0_#1B2330] lg:h-[180px] lg:items-stretch lg:gap-4 lg:p-[22px]"
            >
              <span className="cd qn text-[44px] font-extrabold leading-[.8] transition-colors duration-300 lg:text-[96px]">
                {q.n}
              </span>
              <span className="flex grow flex-col justify-between gap-0.5">
                <span className="cd text-[20px] font-extrabold leading-none lg:text-2xl lg:leading-[1.05]">{q.t}</span>
                <span className="flex flex-col gap-1 lg:border-t lg:border-line-soft lg:pt-2.5">
                  <span className="hidden text-[13px] text-muted lg:block">{q.s}</span>
                  <span className="text-xs text-brand lg:text-[15px] lg:font-bold">Nhận báo giá →</span>
                </span>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Stats */

function Stats() {
  return (
    <section className="py-10 lg:py-[70px]">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-5 lg:gap-7">
          <div className="mono flex items-center gap-3 text-[11px] text-brand lg:text-[13px]">
            <span className="h-0.5 w-10 bg-accent" />
            Vì sao chọn {site.name}
          </div>
          <h2 className="cd m-0 text-[38px] font-extrabold leading-[.95] lg:text-[64px]">
            Làm thật, <Hl>bàn giao thật</Hl>
          </h2>
          <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-muted lg:text-[17px]">
            Hơn một thập kỷ sửa chữa, cải tạo nhà phố khắp TP.HCM — từ căn nhà xuống cấp thành tổ ấm mới, với đội thợ
            riêng và một đầu mối chịu trách nhiệm từ đầu đến cuối.
          </p>
          <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 lg:gap-x-10 lg:gap-y-8 lg:pt-8">
            {stats.map((st) => (
              <div key={st.l} className="flex flex-col gap-1.5 border-l-2 border-accent pl-4">
                <dt className="cd text-[40px] font-extrabold leading-none text-brand lg:text-[60px]">{st.v}</dt>
                <dd className="m-0 text-[13px] leading-[1.4] text-muted lg:text-[15px]">{st.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:pb-6 lg:pr-6">
          <div className="absolute bottom-0 left-6 right-0 top-6 hidden rounded-lg bg-brand lg:block" aria-hidden="true" />
          <Image
            src="/son-op-go/1790740739263_751968165130597158_751968165130597158_f744a2d4b78a79096737a274dc3983e1.jpg"
            alt="Phòng khách sau khi lát gạch vân đá, ốp tường và làm trần thạch cao"
            width={960}
            height={1280}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="relative aspect-square h-auto w-full rounded-lg object-cover"
          />
          <Link
            href="/cong-trinh/son-lat-op-go-go-vap"
            className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-lg bg-ink px-4 py-3 text-white shadow-lg lg:bottom-10 lg:-left-6 lg:px-5 lg:py-4"
          >
            <span className="flex flex-col gap-0.5">
              <span className="mono text-[11px] text-accent">Công trình thực tế</span>
              <span className="cd text-[24px] font-extrabold leading-none lg:text-[30px]">Sơn lát ốp gỗ · Gò Vấp</span>
            </span>
            <Icon name="arrow" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Services */

function Services() {
  return (
    <section className="pb-10 lg:pb-[90px] lg:pt-[30px]">
      <Container className="flex flex-col gap-5 lg:gap-10">
        <SectionHead
          eyebrow="Dịch vụ chủ lực"
          title={
            <>
              8 hạng mục <Hl>một đầu mối</Hl>
            </>
          }
          aside="Mỗi hạng mục đều được khảo sát tận nơi, tư vấn phương án phù hợp hiện trạng và ngân sách của gia đình."
        />
        <ul className="m-0 list-none border-t-2 border-ink p-0">
          {services.map((v, i) => (
            <li key={v.slug}>
              <Link
                href={`/dich-vu/${v.slug}`}
                className="svl group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-2 border-b border-line py-5 lg:grid-cols-[110px_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,.9fr)_56px] lg:gap-x-8 lg:py-8"
              >
                <span className="svl-n cd relative text-[40px] font-extrabold leading-none lg:text-[76px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex flex-col gap-1.5">
                  <span className="mono text-[11px] text-accent-dark transition-colors duration-300 group-hover:text-peach">
                    {v.code} · {v.time}
                  </span>
                  <span className="cd text-[24px] font-extrabold leading-none transition-colors duration-300 group-hover:text-white lg:text-[38px]">
                    {v.title}
                  </span>
                </span>
                <span className="relative col-span-3 text-sm leading-[1.55] text-muted transition-colors duration-300 group-hover:text-white/80 lg:col-span-1 lg:text-[15px]">
                  {v.desc}
                </span>
                <span className="relative hidden flex-col gap-1.5 text-sm font-medium transition-colors duration-300 group-hover:text-white lg:flex">
                  {v.bullets.map((b) => (
                    <span key={b} className="flex items-center gap-2">
                      <span className="h-px w-3 shrink-0 bg-accent" />
                      {b}
                    </span>
                  ))}
                </span>
                <span className="svl-a relative col-start-3 row-start-1 flex size-11 items-center justify-center rounded-full border border-ink lg:col-start-auto lg:row-start-auto lg:size-14">
                  <Icon name="arrow" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Areas */

function Areas() {
  return (
    <section className="border-t border-line-soft bg-white py-10 lg:pb-5 lg:pt-[90px]">
      <Container className="flex flex-col gap-6 lg:gap-9">
        <SectionHead
          eyebrow="Khu vực phục vụ"
          title={
            <>
              Có mặt nhanh <Hl>khắp TP.HCM</Hl>
            </>
          }
          aside="Chọn khu vực để xem thời gian có mặt dự kiến."
        />
        <AreaMap />
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- Pricing */

function Pricing() {
  return (
    <section id="bao-gia" className="scroll-mt-4 py-10 lg:pb-[100px] lg:pt-[90px]">
      <Container className="flex flex-col gap-6 lg:gap-8">
        <ProseHead>Báo giá theo từng hạng mục</ProseHead>

        <div className="flex flex-col gap-5 text-[16px] leading-[1.8] text-ink/80 lg:text-[18px]">
          <p className="m-0 text-[18px] leading-[1.7] text-ink lg:text-[21px]">
            Mỗi ngôi nhà một hiện trạng, nên chúng tôi không đưa ra một bảng giá chung. Kỹ thuật viên đến tận nơi xem,
            đo đạc rồi gửi báo giá chi tiết từng hạng mục — gia đình đồng ý mới bắt đầu thi công.
          </p>
          <p className="m-0">
            Với <SvcLink slug="sua-chua-cai-tao-nha">sửa chữa, cải tạo nhà</SvcLink>, báo giá tách rõ phần sửa tường, sàn,
            mái, phần đập thông chia lại phòng hay nâng tầng, cơi nới. <SvcLink slug="chong-tham">Chống thấm</SvcLink> được
            tính theo từng vị trí — sân thượng, nhà vệ sinh, tường, ban công, mái và bể nước — kèm cách xử lý và thời gian
            ngâm nước thử.
          </p>
          <p className="m-0">
            <SvcLink slug="son-nuoc-son-dau">Sơn nước</SvcLink> ghi rõ số lớp bả, lót, phủ và loại sơn trong hay ngoài nhà;{" "}
            <SvcLink slug="op-lat">ốp lát</SvcLink> tính theo mét vuông nền, tường, nhà vệ sinh hoặc sân;{" "}
            <SvcLink slug="tran-thach-cao">trần thạch cao</SvcLink> phân biệt trần chìm, trần nổi và trần giật cấp có đèn hắt.
          </p>
          <p className="m-0">
            Những việc gọn hơn như <SvcLink slug="dien-nuoc">điện nước</SvcLink>, <SvcLink slug="cua-sat">cửa sắt</SvcLink>{" "}
            hay <SvcLink slug="dien-lanh">điện lạnh</SvcLink> — dò rò rỉ, đi lại dây, làm cổng, vệ sinh hay bơm gas máy
            lạnh — thường có giá ngay khi thợ kiểm tra xong, nhiều trường hợp làm luôn trong ngày.
          </p>
          <p className="m-0">
            Muốn có giá nhanh, gọi{" "}
            <a href={site.phoneHref}>
              <InlineLink>{site.phone}</InlineLink>
            </a>
            , gửi vài tấm ảnh hiện trạng qua{" "}
            <a href={site.zaloHref} target="_blank" rel="noreferrer">
              <InlineLink>Zalo</InlineLink>
            </a>
            , hoặc{" "}
            <a href="#lien-he">
              <InlineLink>đặt lịch khảo sát</InlineLink>
            </a>{" "}
            — kỹ thuật viên sẽ liên hệ lại để hẹn giờ.
          </p>
        </div>
      </Container>
    </section>
  );
}

/** Tiêu đề cho các section viết dạng đoạn văn */
function ProseHead({ children }: { children: React.ReactNode }) {
  return <h2 className="m-0 text-[28px] font-bold leading-tight tracking-[-0.01em] lg:text-[40px]">{children}</h2>;
}

// globals.css đặt `a { color: inherit }` nên màu/gạch chân đặt ở span con
function InlineLink({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-bold text-ink underline decoration-ink/25 underline-offset-[5px] transition-colors hover:decoration-ink">
      {children}
    </span>
  );
}

function SvcLink({ slug, children }: { slug: string; children: React.ReactNode }) {
  return (
    <Link href={`/dich-vu/${slug}`}>
      <InlineLink>{children}</InlineLink>
    </Link>
  );
}

/* -------------------------------------------------------------- Process */

function Process() {
  return (
    <section className="bg-sand py-10 lg:py-[90px]">
      <Container className="flex flex-col gap-6 lg:gap-8">
        <ProseHead>Quy trình làm việc</ProseHead>

        <div className="flex flex-col gap-5 text-[16px] leading-[1.8] text-ink/80 lg:text-[18px]">
          <p className="m-0 text-[18px] leading-[1.7] text-ink lg:text-[21px]">
            Từ cuộc gọi đầu tiên đến ngày bàn giao, việc sửa nhà đi qua sáu bước — bước nào xong, gia đình đều biết rõ
            và đồng ý rồi mới sang bước tiếp theo.
          </p>
          <p className="m-0">
            <Step>Tiếp nhận yêu cầu</Step> ngay trong ngày: chúng tôi nghe tình trạng, xem ảnh nếu có và hẹn lịch
            đến nhà. Trong 1 – 2 ngày sau đó, kỹ thuật viên <Step>khảo sát và báo giá</Step> — kiểm tra hiện trạng,
            giải thích nguyên nhân hư hỏng, đưa ra phương án và báo giá chi tiết từng hạng mục.
          </p>
          <p className="m-0">
            Khi gia đình đồng ý, hai bên <Step>ký kết thi công</Step>, thống nhất hạng mục, tiến độ và hợp đồng theo
            lịch hẹn. Đội thợ bắt đầu <Step>thi công</Step> đúng kỹ thuật, cập nhật tiến độ hằng ngày; thời gian dài
            hay ngắn tùy từng hạng mục.
          </p>
          <p className="m-0">
            Làm xong, chúng tôi cùng chủ nhà <Step>nghiệm thu</Step> từng phần rồi mới bàn giao. Sau đó công trình
            được <Step>bảo hành</Step> theo hợp đồng — có vấn đề chỉ cần gọi, thợ sẽ quay lại xử lý nhanh.
          </p>
          <p className="m-0 text-sm leading-[1.6] text-muted">Thời gian mỗi bước là dự kiến, tùy lịch và quy mô công trình.</p>
        </div>
      </Container>
    </section>
  );
}

/** Tên bước in đậm, nằm ngay trong câu */
function Step({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

/* ------------------------------------------------------------- Projects */

function Projects() {
  return (
    <section id="cong-trinh" className="py-10 lg:py-[90px]">
      <Container className="flex flex-col gap-6 lg:gap-9">
        <SectionHead
          eyebrow="Công trình"
          title={
            <>
              Công trình <Hl>tiêu biểu</Hl>
            </>
          }
          aside={
            <span className="flex flex-wrap gap-2">
              <Link className="bo flex h-11 items-center rounded-md px-[18px] text-[15px] font-semibold" href="/cong-trinh">
                Đang thi công
              </Link>
              <Link className="bo flex h-11 items-center rounded-md px-[18px] text-[15px] font-semibold" href="/cong-trinh">
                Xem tất cả công trình
              </Link>
            </span>
          }
        />
        <div className="grid grid-cols-1 gap-4 [perspective:1400px] sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((j) => (
            <Link
              key={j.slug}
              href={`/cong-trinh/${j.slug}`}
              className="pj flex flex-col overflow-hidden rounded-lg border border-line bg-white lg:min-h-[330px]"
            >
              <Placeholder label="[Ảnh công trình]" src={j.image} alt={j.name} className="h-[190px] shrink-0">
                <span className="mono absolute left-4 top-4 rounded bg-ink px-2.5 py-1.5 text-[11px] text-white">{j.cat}</span>
              </Placeholder>
              <span className="flex flex-col gap-2 px-5 py-[18px]">
                <span className="cd text-[25px] font-extrabold leading-[1.05]">{j.name}</span>
                <span className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-muted">
                  <span>{j.area}</span>
                  <span aria-hidden="true">·</span>
                  <span>{j.size}</span>
                  <span aria-hidden="true">·</span>
                  <span>{j.time}</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- Reviews */

function Reviews() {
  return (
    <section className="border-t border-line-soft bg-white py-10 lg:py-[90px]">
      <Container className="flex flex-col gap-6 lg:gap-9">
        <SectionHead
          eyebrow="Ý kiến khách hàng"
          title={
            <>
              Khách hàng <Hl>nói gì</Hl>
            </>
          }
        />
        <div className="grid grid-cols-1 gap-4 [perspective:1200px] md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.n}
              className="rv m-0 flex flex-col gap-4 rounded-lg border border-line bg-paper p-5 lg:min-h-[270px] lg:p-7"
            >
              <div className="flex gap-[3px]" role="img" aria-label="5 trên 5 sao">
                {[0, 1, 2, 3, 4].map((k) => (
                  <Star key={k} />
                ))}
              </div>
              <blockquote className="m-0 grow text-[15px] leading-[1.65] lg:text-base">“{r.q}”</blockquote>
              <figcaption className="flex items-center gap-3 border-t border-line pt-3.5">
                <span className="cd flex size-11 items-center justify-center rounded-full bg-brand text-xl font-extrabold text-white">
                  {r.i}
                </span>
                <span className="flex flex-col">
                  <span className="font-bold">{r.n}</span>
                  <span className="text-[13px] text-muted">{r.m}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- News */

function News() {
  return (
    <section id="tin-tuc" className="border-t border-line-soft bg-white py-10 lg:py-[90px]">
      <Container className="flex flex-col gap-6 lg:gap-9">
        <SectionHead
          eyebrow="Kinh nghiệm sửa nhà"
          title={
            <>
              Cẩm nang <Hl>cho chủ nhà</Hl>
            </>
          }
          aside={
            <Link href="/tin-tuc" className="inline-flex">
              <span className="flex items-center gap-2.5 text-base font-semibold text-brand hover:text-brand-dark">
                Xem tất cả bài viết
                <Icon name="arrow" />
              </span>
            </Link>
          }
        />
        <div className="grid grid-cols-1 gap-4 [perspective:1400px] md:grid-cols-3">
          {posts.map((n) => (
            <Link
              key={n.slug}
              href={`/tin-tuc/${n.slug}`}
              className="pj flex flex-col overflow-hidden rounded-lg border border-line bg-paper lg:min-h-[330px]"
            >
              <Placeholder src={articles.find((a) => a.slug === n.slug)?.image} alt={n.title} className="h-[170px] shrink-0">
                <span className="mono absolute left-4 top-4 rounded bg-brand px-2.5 py-1.5 text-[11px] text-white">{n.tag}</span>
              </Placeholder>
              <span className="flex grow flex-col gap-2.5 px-5 py-[18px]">
                <span className="text-lg font-bold leading-[1.4]">{n.title}</span>
                <span className="mt-auto flex justify-between text-[13px] text-muted">
                  <span>{n.date}</span>
                  <span className="font-semibold text-brand">Đọc tiếp →</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ FAQ */

function FaqSection() {
  return (
    <section className="py-10 lg:pb-[70px] lg:pt-[90px]">
      <JsonLd data={faqJsonLd(faqs)} />
      <Container className="flex flex-col gap-6 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-4 lg:w-[420px] lg:shrink-0">
          <div className="mono text-[11px] text-brand lg:text-[13px]">Câu hỏi thường gặp</div>
          <h2 className="cd m-0 text-[38px] font-extrabold leading-[.95] lg:text-[64px]">
            Bạn hỏi, <Hl>chúng tôi trả lời</Hl>
          </h2>
          <p className="m-0 text-[15px] leading-[1.6] text-muted lg:text-base">
            Chưa thấy câu hỏi của bạn? Gọi{" "}
            <a href={site.phoneHref} className="font-semibold">
              {site.phone}
            </a>{" "}
            hoặc nhắn Zalo để được tư vấn.
          </p>
        </div>
        <Faq />
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ CTA */

function Contact() {
  return (
    <section id="lien-he" className="scroll-mt-4 pb-10 pt-5 lg:pb-[100px]">
      <Container>
        <div className="flex flex-col gap-8 rounded-lg bg-brand p-6 text-white lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:p-12">
          <div className="flex max-w-[640px] flex-col gap-4">
            <div className="mono text-[11px] text-peach lg:text-[13px]">Đặt lịch khảo sát</div>
            <h2 className="cd m-0 text-[36px] font-extrabold leading-[.95] lg:text-[56px]">
              Nhận sửa chữa, cải tạo nhà cửa tất cả quận huyện TP.HCM
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <div className="flex flex-col gap-1.5 lg:items-end">
              <span className="mono text-xs text-brand-mist">Gọi ngay · 7:00 – 21:00 cả tuần</span>
              <a href={site.phoneHref} className="cd text-[44px] font-extrabold leading-none lg:text-[60px]">
                {site.phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={site.phoneHref} className="flex h-12 items-center gap-2 rounded-md bg-white px-6">
                <span className="flex items-center gap-2 font-bold text-brand">
                  <Icon name="phone" size={18} />
                  Gọi ngay
                </span>
              </a>
              <a
                href={site.zaloHref}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 items-center rounded-md border border-white/60 px-6 font-bold hover:bg-white/10"
              >
                Nhắn Zalo
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
