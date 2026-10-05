import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon, type IconName } from "@/components/Icon";
import { Container, CtaBanner, Hl, PageHero, Placeholder, QuickContactCard, SectionHead } from "@/components/ui";
import { getProjectDetail, getRelatedProjects, projectDetails } from "@/lib/project-details";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectDetails.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) return {};
  return pageMeta({
    title: `${project.name} – ${project.area}`,
    description: project.lead,
    path: `/cong-trinh/${slug}`,
    image: project.photos?.[0]?.src,
    imageAlt: project.photos?.[0]?.caption ?? project.name,
  });
}

/** Đường kẻ giữa các ô thông tin: 1 cột (mobile) → 2 cột (sm) → 4 cột (lg) */
const FACT_BORDERS = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t sm:border-l-0 lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-t-0",
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-base leading-normal">
          <Icon name="check" size={18} className="mt-[3px] shrink-0 text-brand" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CongTrinhChiTietPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const facts: { icon: IconName; label: string; value: string }[] = [
    { icon: "pin", label: "Khu vực", value: project.location },
    { icon: "ruler", label: "Diện tích", value: project.sizeDetail },
    { icon: "tag", label: "Hạng mục", value: project.scope },
    { icon: "calendar", label: "Thời gian", value: project.time },
  ];
  const columns = [
    { title: "Hiện trạng", items: project.current },
    { title: "Giải pháp", items: project.solution },
    { title: project.resultTitle, items: project.result },
  ];
  const [before, after] = project.beforeAfter
    ? project.beforeAfter.map((i) => project.photos?.[i])
    : [undefined, undefined];
  const inProgress = project.status === "Đang thi công";

  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Trang chủ" }, { href: "/cong-trinh", label: "Công trình" }, { label: project.name }]}
        title={
          <>
            {project.title.main} <Hl>{project.title.hl}</Hl>
          </>
        }
        lead={project.lead}
        aside={<QuickContactCard />}
      />

      {/* Thông tin + ảnh */}
      <section className="bg-paper pb-12 pt-8 lg:pb-[76px] lg:pt-[50px]">
        <Container className="flex flex-col gap-6">
          <dl className="m-0 grid grid-cols-1 rounded-lg border border-line bg-white sm:grid-cols-2 lg:min-h-[110px] lg:grid-cols-4 lg:items-center">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`flex items-center gap-3.5 border-line px-6 py-5 lg:py-0 ${FACT_BORDERS[i]}`}
              >
                <Icon name={f.icon} size={26} className="shrink-0 text-brand" />
                <div className="flex flex-col gap-0.5">
                  <dt className="mono text-[11px] text-muted">{f.label}</dt>
                  <dd className="m-0 text-base font-bold">{f.value}</dd>
                </div>
              </div>
            ))}
          </dl>

          {project.photos && project.photos.length > 0 && (
          <div className="grid grid-cols-2 gap-4 lg:h-[560px] lg:grid-cols-[2fr_1fr]">
            <Placeholder
              src={project.photos?.[0]?.src}
              alt={project.photos?.[0]?.caption ?? project.name}
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="col-span-2 h-[260px] rounded-lg border border-line sm:h-[380px] lg:col-span-1 lg:h-auto"
            >
              <PhotoCaption text={project.photos?.[0]?.caption} />
            </Placeholder>
            <div className="col-span-2 grid grid-cols-2 gap-4 lg:col-span-1 lg:grid-cols-1 lg:grid-rows-2">
              <Placeholder
                src={project.photos?.[1]?.src}
                alt={project.photos?.[1]?.caption ?? project.name}
                className="h-[140px] rounded-lg border border-line sm:h-[200px] lg:h-auto"
              >
                <PhotoCaption text={project.photos?.[1]?.caption} small />
              </Placeholder>
              <Placeholder
                src={project.photos?.[2]?.src}
                alt={project.photos?.[2]?.caption ?? project.name}
                className="h-[140px] rounded-lg border border-line sm:h-[200px] lg:h-auto"
              >
                {project.photos && project.photos.length > 3 ? (
                  <a
                    href="#hinh-anh"
                    className="absolute inset-0 flex items-center justify-center rounded-lg bg-ink/55 font-bold text-white"
                  >
                    + {project.photos.length - 3} ảnh
                  </a>
                ) : project.morePhotos ? (
                  <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-ink/55 font-bold text-white">
                    + {project.morePhotos} ảnh
                  </span>
                ) : (
                  <PhotoCaption text={project.photos?.[2]?.caption} small />
                )}
              </Placeholder>
            </div>
          </div>
          )}
        </Container>
      </section>

      {project.photos && project.photos.length > 0 && (
        <section id="hinh-anh" className="scroll-mt-4 py-14 lg:py-20">
          <Container className="flex flex-col gap-6 lg:gap-8">
            <h2 className="m-0 text-[28px] font-bold leading-tight lg:text-[36px]">Hình ảnh công trình</h2>
            <ul className="m-0 grid list-none grid-cols-1 gap-x-5 gap-y-8 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {project.video && (
                <li>
                  <figure className="m-0 flex flex-col gap-3">
                    <video
                      src={project.video}
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-[3/4] w-full rounded-lg border border-line bg-ink object-cover"
                    />
                    <figcaption className="text-[15px] leading-[1.55] text-ink/80">Video thi công thực tế</figcaption>
                  </figure>
                </li>
              )}
              {project.photos.map((ph) => (
                <li key={ph.src}>
                  <figure className="m-0 flex flex-col gap-3">
                    <Placeholder
                      src={ph.src}
                      alt={ph.caption}
                      className="aspect-[3/4] rounded-lg border border-line"
                    />
                    <figcaption className="text-[15px] leading-[1.55] text-ink/80">{ph.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Hiện trạng / Giải pháp / Kết quả + Trước – Sau */}
      <section className="bg-white py-14 lg:pb-[100px] lg:pt-20">
        <Container className="flex flex-col gap-10 lg:gap-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {columns.map((c) => (
              <div key={c.title} className="flex flex-col gap-3.5">
                <h2 className="cd m-0 text-[30px] font-extrabold leading-none lg:text-[34px]">{c.title}</h2>
                <CheckList items={c.items} />
              </div>
            ))}
          </div>
          {before?.src && after?.src && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Placeholder
              src={before?.src}
              alt={before?.caption}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="h-[240px] rounded-lg border border-line lg:h-[380px]"
            >
              <span className="cd absolute left-5 top-5 rounded bg-ink px-3.5 py-2 text-xl font-extrabold text-white">Trước</span>
            </Placeholder>
            <Placeholder
              src={after?.src}
              alt={after?.caption}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="h-[240px] rounded-lg border border-line lg:h-[380px]"
            >
              <span className="cd absolute left-5 top-5 rounded bg-brand px-3.5 py-2 text-xl font-extrabold text-white">
                {inProgress ? "Đang thi công" : "Sau"}
              </span>
            </Placeholder>
          </div>
          )}
        </Container>
      </section>

      {/* Phản hồi chủ nhà */}
      {project.quote && (
        <section className="bg-paper py-10 lg:pb-[100px] lg:pt-[50px]">
          <Container>
            <figure className="m-0 flex flex-col gap-4 rounded-lg bg-sand p-6 sm:flex-row sm:items-center sm:gap-12 lg:px-14 lg:py-12">
              <div aria-hidden="true" className="cd text-[90px] font-extrabold leading-[.6] text-brand lg:text-[140px]">
                “
              </div>
              <div className="flex flex-col gap-4">
                <blockquote className="m-0 text-lg font-medium leading-relaxed lg:text-[22px]">{project.quote.text}</blockquote>
                <figcaption className="text-[15px] text-muted">
                  <strong className="text-ink">{project.quote.name}</strong> · {project.quote.role}
                </figcaption>
              </div>
            </figure>
          </Container>
        </section>
      )}

      {/* Công trình tương tự */}
      <section className="bg-white pb-12 pt-14 lg:pb-[40px] lg:pt-[90px]">
        <Container className="flex flex-col gap-9">
          <SectionHead
            eyebrow="Xem thêm"
            size="md"
            title={
              <>
                Công trình <Hl>tương tự</Hl>
              </>
            }
            aside={
              <Link href="/cong-trinh" className="flex items-center gap-2.5 font-semibold text-brand hover:text-brand-dark">
                Tất cả công trình
                <Icon name="arrow" />
              </Link>
            }
          />
          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 [perspective:1400px] sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug} className="flex">
                <Link
                  href={`/cong-trinh/${p.slug}`}
                  className="pj flex w-full flex-col overflow-hidden rounded-lg border border-line bg-white text-ink"
                >
                  <Placeholder src={p.photos?.[0]?.src} alt={p.name} className="h-[190px] shrink-0" />
                  <div className="flex flex-col gap-2 px-5 py-[18px]">
                    <span className="mono text-[11px] text-brand">{p.cat}</span>
                    <h3 className="cd m-0 text-[26px] font-extrabold leading-none">{p.name}</h3>
                    <span className="text-[13px] text-muted">
                      {p.area} · {p.time}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}

/** Chú thích nằm dưới đáy ảnh */
function PhotoCaption({ text, small }: { text?: string; small?: boolean }) {
  if (!text) return null;
  return (
    <span
      className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent text-white ${
        small ? "hidden px-4 pb-3 pt-10 text-[13px] leading-snug sm:block" : "px-5 pb-4 pt-14 text-[15px] leading-snug lg:px-6 lg:pb-5"
      }`}
    >
      {text}
    </span>
  );
}
