import type { Metadata } from "next";
import { defaultOgImage, pageMeta } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/Icon";
import { Breadcrumbs, Container, CtaBanner, Placeholder } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import { articles, getArticle, getRelatedArticles } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getArticle(slug);
  if (!post) return { title: "Không tìm thấy bài viết" };
  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/tin-tuc/${slug}`,
    image: post.image,
    imageAlt: post.title,
    type: "article",
  });
}

export default async function BaiVietPage({ params }: Props) {
  const { slug } = await params;
  const post = getArticle(slug);
  if (!post) notFound();

  const related = getRelatedArticles(post.slug);
  const toc = post.sections.filter((s) => s.toc !== false);
  // "09/2026" -> "2026-09"
  const [month, year] = post.date.split("/");
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`${site.url}${post.image ?? defaultOgImage.url}`],
    datePublished: `${year}-${month}`,
    inLanguage: "vi",
    mainEntityOfPage: `${site.url}/tin-tuc/${post.slug}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}/logo.png` } },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <section className="bg-paper pb-10 pt-10 lg:pb-12 lg:pt-14">
        <Container className="flex flex-col gap-6 lg:gap-8">
          <div className="flex max-w-[900px] flex-col gap-[18px]">
            <Breadcrumbs
              crumbs={[{ href: "/", label: "Trang chủ" }, { href: "/tin-tuc", label: "Tin tức" }, { label: post.tag }]}
            />
            <span className="mono text-[12px] text-accent-dark">
              {post.tag} · {post.date} · {post.readTime}
            </span>
            <h1 className="cd m-0 text-[44px] font-extrabold leading-[.95] lg:text-[72px]">{post.title}</h1>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="cd flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-xl font-extrabold text-white"
              >
                A
              </span>
              <span className="text-[15px]">
                <strong>Đội kỹ thuật Duy Long Home</strong>
                <br />
                <span className="text-muted">{post.authorTeam}</span>
              </span>
            </div>
          </div>
          <Placeholder
            src={post.image}
            alt={post.title}
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="h-[240px] rounded-lg border border-line sm:h-[360px] lg:h-[520px]"
          />
        </Container>
      </section>

      <section className="bg-white pb-16 pt-10 lg:pb-20 lg:pt-[60px]">
        <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]">
          <article className="flex min-w-0 flex-col gap-[18px] lg:w-[820px] lg:shrink-0">
            {post.sections.map((s, i) => (
              <div key={s.id} className="flex flex-col gap-[18px]">
                <h2
                  id={s.id}
                  className="cd mb-0 mt-4 scroll-mt-6 text-[32px] font-extrabold leading-none lg:text-[40px]"
                >
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="m-0 text-[17px] leading-[1.8] text-[#333b47] lg:text-lg">
                    {p}
                  </p>
                ))}
                {i + 1 === post.ctaAfter && (
                  <aside className="my-3 flex flex-col gap-5 rounded-lg bg-sand p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:px-8 lg:py-7">
                    <div className="flex flex-col gap-1.5">
                      <span className="cd text-[26px] font-extrabold leading-none lg:text-[30px]">{post.cta.title}</span>
                      <span className="text-[15px] text-muted">{post.cta.text}</span>
                    </div>
                    <Link
                      href="/bao-gia"
                      className="bp flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-md px-[22px] font-bold"
                    >
                      Nhận tư vấn
                      <Icon name="arrow" size={16} />
                    </Link>
                  </aside>
                )}
              </div>
            ))}
          </article>

          <aside className="flex min-w-0 grow flex-col gap-5" aria-label="Thông tin thêm">
            {toc.length > 0 && (
              <nav aria-label="Mục lục" className="rounded-lg border border-line bg-white px-6 pb-2.5 pt-[22px]">
                <div className="mono pb-2 text-[12px] text-brand">Mục lục</div>
                <ol className="m-0 list-none p-0">
                  {toc.map((s) => (
                    <li key={s.id} className="border-t border-line">
                      <a href={`#${s.id}`} className="block py-2.5 text-[15px] leading-[1.4] hover:text-brand!">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <a href={site.phoneHref} className="bp flex items-center gap-4 rounded-lg px-6 py-[22px]">
              <Icon name="phone" size={30} className="shrink-0" />
              <span className="flex flex-col">
                <span className="text-[13px] text-brand-mist">{post.callLabel}</span>
                <span className="cd text-[34px] font-extrabold leading-none">{site.phone}</span>
              </span>
            </a>

            {related.length > 0 && (
              <div className="rounded-lg border border-line bg-white px-6 pb-2.5 pt-[22px]">
                <h2 className="mono m-0 pb-2 text-[12px] font-normal text-brand">Bài viết liên quan</h2>
                <ul className="m-0 list-none p-0">
                  {related.map((r) => (
                    <li key={r.slug} className="border-t border-line">
                      <Link href={`/tin-tuc/${r.slug}`} className="flex gap-3 py-3 hover:text-brand!">
                        <Placeholder src={r.image} sizes="84px" className="h-16 w-[84px] shrink-0 rounded-md" />
                        <span className="text-sm font-semibold leading-[1.4]">{r.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
