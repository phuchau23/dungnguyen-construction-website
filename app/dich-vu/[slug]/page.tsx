import type { Metadata } from "next";
import { faqJsonLd, pageMeta } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Container, CtaBanner, Hl, PageHero, Placeholder, QuickContactCard, SectionHead, ZaloCard } from "@/components/ui";
import { services } from "@/lib/data";
import { getServiceDetail, serviceDetails } from "@/lib/service-details";
import { site } from "@/lib/site";
import { ServiceFaq } from "./ServiceFaq";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return {};
  return pageMeta({
    title: `${detail.title} ${detail.titleHl}`,
    description: detail.lead,
    path: `/dich-vu/${slug}`,
    image: detail.intro.src,
    imageAlt: `${detail.title} – ${site.name}`,
  });
}

const pad = (n: number) => String(n).padStart(2, "0");

function BlockTitle({ children }: { children: string }) {
  return <h2 className="cd m-0 text-[32px] font-extrabold leading-none lg:text-[40px]">{children}</h2>;
}

export default async function DichVuChiTietPage({ params }: Props) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  const service = services.find((s) => s.slug === slug);
  if (!detail || !service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: detail.lead,
    url: `${site.url}/dich-vu/${slug}`,
    ...(detail.intro.src ? { image: `${site.url}${detail.intro.src}` } : {}),
    provider: { "@id": `${site.url}/#business` },
    areaServed: [...site.areas, "TP. Hồ Chí Minh"].map((name) => ({ "@type": "Place", name })),
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd(detail.faq.items)} />
      <PageHero
        crumbs={[
          { href: "/", label: "Trang chủ" },
          { href: "/dich-vu", label: "Dịch vụ" },
          { label: service.title },
        ]}
        title={
          <>
            {detail.title} <Hl>{detail.titleHl}</Hl>
          </>
        }
        lead={detail.lead}
        aside={<QuickContactCard />}
      />

      {/* Nội dung chính + cột phải */}
      <section className="bg-paper pb-[50px] pt-[50px] lg:pt-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[860px_minmax(0,1fr)]">
          <div className="flex min-w-0 flex-col gap-12 lg:gap-14">
            {/* Nguyên nhân */}
            <div className="flex flex-col gap-[18px]">
              <BlockTitle>{detail.intro.title}</BlockTitle>
              <p className="m-0 text-base leading-[1.75] text-muted lg:text-[17px]">{detail.intro.text}</p>
              <Placeholder
                label={detail.intro.image}
                src={detail.intro.src}
                alt={detail.intro.title}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="h-[240px] rounded-lg border border-line sm:h-[340px] lg:h-[440px]"
              />
            </div>

            {/* Dấu hiệu */}
            <div className="flex flex-col gap-[18px]">
              <BlockTitle>{detail.signs.title}</BlockTitle>
              <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
                {detail.signs.items.map((sign, i) => (
                  <li
                    key={sign}
                    className="flex min-h-[80px] items-center gap-3.5 rounded-lg border border-line bg-white px-5 py-[18px] lg:min-h-[96px]"
                  >
                    <span
                      aria-hidden="true"
                      className="cd flex size-10 shrink-0 items-center justify-center rounded-md bg-brand-soft text-xl font-extrabold text-brand"
                    >
                      {i + 1}
                    </span>
                    <span className="text-base font-semibold leading-[1.4]">{sign}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Hạng mục */}
            <div className="flex flex-col gap-[18px]">
              <BlockTitle>{detail.items.title}</BlockTitle>
              <ul className="m-0 list-none overflow-hidden rounded-lg border border-t-0 border-line p-0">
                {detail.items.rows.map((row, i) => (
                  <li
                    key={row.name}
                    className="flex flex-col gap-3 border-t border-line bg-white px-[22px] py-[18px] sm:flex-row sm:items-center sm:gap-5"
                  >
                    <div className="flex grow items-start gap-5 sm:items-center">
                      <span className="mono w-7 shrink-0 pt-1 text-xs text-muted sm:pt-0">{pad(i + 1)}</span>
                      <div className="flex grow flex-col gap-1">
                        <span className="text-[17px] font-bold">{row.name}</span>
                        <span className="text-sm text-muted">{row.scope}</span>
                      </div>
                    </div>
                    <Link
                      href="/bao-gia"
                      className="bo ml-12 flex h-10 shrink-0 items-center gap-2 self-start rounded-md px-4 text-sm font-bold sm:ml-0 sm:self-auto"
                    >
                      Nhận báo giá
                      <Icon name="arrow" size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quy trình */}
            <div className="flex flex-col gap-[18px]">
              <BlockTitle>{`Quy trình ${detail.process.length} bước`}</BlockTitle>
              <ol className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
                {detail.process.map((step, i) => (
                  <li
                    key={step.t}
                    className="flex min-h-[150px] flex-col gap-2 rounded-lg border border-line bg-white p-5"
                  >
                    <span className="cd text-[40px] font-extrabold leading-none text-brand">{pad(i + 1)}</span>
                    <span className="cd text-2xl font-extrabold leading-none">{step.t}</span>
                    <span className="text-sm leading-normal text-muted">{step.d}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Vật liệu */}
            <div className="flex flex-col gap-[18px]">
              <BlockTitle>{detail.materials.title}</BlockTitle>
              <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
                {detail.materials.items.map((m) => (
                  <li
                    key={m}
                    className="flex min-h-11 items-center rounded-md border border-line bg-white px-4 py-2 text-[15px] font-semibold"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hình ảnh */}
            <div className="flex flex-col gap-[18px]">
              <BlockTitle>Hình ảnh thực tế</BlockTitle>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {detail.gallery.map(({ label, src }) => (
                  <Placeholder
                    key={label}
                    src={src}
                    alt={label}
                    className="h-[200px] rounded-lg border border-line lg:h-[220px]"
                  >
                    <span className="mono absolute bottom-3.5 left-3.5 rounded bg-white px-2.5 py-1.5 text-[11px] text-ink">
                      {label}
                    </span>
                  </Placeholder>
                ))}
              </div>
            </div>
          </div>

          {/* Cột phải */}
          <aside className="flex min-w-0 flex-col gap-5">
            <ZaloCard title={detail.form.title} />

            <a href={site.phoneHref} className="bp flex items-center gap-4 rounded-lg px-6 py-[22px]">
              <Icon name="phone" size={30} className="shrink-0" />
              <span className="flex flex-col">
                <span className="text-[13px] text-brand-mist">Gọi ngay</span>
                <span className="cd text-[34px] font-extrabold leading-none">{site.phone}</span>
              </span>
            </a>

            <nav aria-label="Dịch vụ khác" className="rounded-lg border border-line bg-white px-6 pb-2 pt-5">
              <div className="mono pb-2 text-xs text-brand">Dịch vụ khác</div>
              <ul className="m-0 list-none p-0">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/dich-vu/${s.slug}`}
                      className="flex items-center gap-3 border-t border-line py-3 text-[15px] font-semibold text-ink hover:text-brand"
                    >
                      <Icon name={s.icon} size={20} className="shrink-0 text-brand" />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </Container>
      </section>

      {/* Hỏi đáp */}
      <section className="bg-white pb-[60px] pt-[60px] lg:pb-20 lg:pt-[90px]">
        <Container className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <div className="lg:w-[420px] lg:shrink-0">
            <SectionHead
              size="md"
              eyebrow="Hỏi đáp"
              title={
                <>
                  {detail.faq.title} <Hl>{detail.faq.titleHl}</Hl>
                </>
              }
            />
          </div>
          <ServiceFaq items={detail.faq.items} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
