import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Container, Hl, PageHero, Placeholder, QuickContactCard } from "@/components/ui";
import { site } from "@/lib/site";
import { articles, postCategories, searchArticles, type Article } from "@/lib/posts";

export const metadata: Metadata = pageMeta({
  title: "Tin tức – Cẩm nang sửa nhà",
  description:
    "Kinh nghiệm thực tế từ đội thợ Duy Long Home: chống thấm, sơn nước, điện nước, cải tạo, điện lạnh và cách đọc báo giá sửa nhà.",
  path: "/tin-tuc",
});

const PAGE_SIZE = 6;

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function first(v: string | string[] | undefined): string {
  return (Array.isArray(v) ? v[0] : v) ?? "";
}

function listHref(params: { tag?: string; q?: string; page?: number }): string {
  const sp = new URLSearchParams();
  if (params.tag) sp.set("tag", params.tag);
  if (params.q) sp.set("q", params.q);
  if (params.page && params.page > 1) sp.set("page", String(params.page));
  const s = sp.toString();
  return s ? `/tin-tuc?${s}` : "/tin-tuc";
}

const pillBase =
  "flex h-11 items-center whitespace-nowrap rounded-md border px-[18px] text-[15px] font-semibold transition-colors";
const pillOff = "border-line bg-white text-ink! hover:border-brand";
const pillOn = "border-ink bg-ink text-white!";

export default async function TinTucPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const q = first(sp.q).trim();
  const tagParam = first(sp.tag);
  const activeTag = postCategories.find((c) => c.slug === tagParam)?.slug ?? "";
  const pageParam = Number.parseInt(first(sp.page), 10);

  const byTag = activeTag ? articles.filter((a) => a.tagSlug === activeTag) : articles;
  const results = searchArticles(byTag, q);
  const isFiltered = Boolean(activeTag || q);

  // Không lọc: bài mới nhất làm "Nổi bật", còn lại vào lưới
  const featured = !isFiltered ? results[0] : undefined;
  const gridAll = featured ? results.slice(1) : results;
  const totalPages = Math.max(1, Math.ceil(gridAll.length / PAGE_SIZE));
  const page = Number.isFinite(pageParam) ? Math.min(Math.max(pageParam, 1), totalPages) : 1;
  const grid = gridAll.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Trang chủ" }, { label: "Tin tức" }]}
        title={
          <>
            Cẩm nang <Hl>sửa nhà</Hl>
          </>
        }
        lead="Kinh nghiệm thực tế từ đội thợ Duy Long Home giúp bạn phát hiện hư hỏng sớm và sửa nhà đúng cách."
        aside={<QuickContactCard />}
      />

      <section className="bg-paper pb-5 pt-10 lg:pt-[60px]">
        <Container className="flex flex-col gap-6 lg:gap-8">
          <nav aria-label="Chuyên mục bài viết" className="-mx-5 overflow-x-auto px-5 lg:mx-0 lg:px-0">
            <ul className="m-0 flex list-none gap-2 p-0 lg:flex-wrap">
              <li>
                <Link
                  href={listHref({ q })}
                  aria-current={!activeTag ? "page" : undefined}
                  className={`${pillBase} ${!activeTag ? pillOn : pillOff}`}
                >
                  Tất cả
                </Link>
              </li>
              {postCategories.map((c) => {
                const on = c.slug === activeTag;
                return (
                  <li key={c.slug}>
                    <Link
                      href={listHref({ tag: c.slug, q })}
                      aria-current={on ? "page" : undefined}
                      className={`${pillBase} ${on ? pillOn : pillOff}`}
                    >
                      {c.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {q && (
            <div className="flex flex-wrap items-center gap-3 text-[15px] text-muted">
              <span>
                {results.length} kết quả cho <strong className="text-ink">“{q}”</strong>
              </span>
              <Link href={listHref({ tag: activeTag })} className="font-semibold text-brand! hover:text-brand-dark!">
                Xóa tìm kiếm
              </Link>
            </div>
          )}

          {results.length === 0 ? (
            <div className="flex flex-col items-center gap-3 rounded-lg border border-line bg-white px-6 py-16 text-center">
              <Icon name="search" size={32} className="text-muted" />
              <h2 className="cd m-0 text-[32px] font-extrabold leading-none lg:text-[40px]">
                Không tìm thấy bài viết
              </h2>
              <p className="m-0 max-w-[480px] text-[15px] leading-relaxed text-muted">
                Thử từ khóa khác hoặc xem tất cả bài viết trong cẩm nang sửa nhà.
              </p>
              <Link href="/tin-tuc" className="bp mt-2 flex h-11 items-center rounded-md px-5 font-bold">
                Xem tất cả bài viết
              </Link>
            </div>
          ) : (
            <>
              {featured && page === 1 && <FeaturedCard post={featured} />}

              {grid.length > 0 && (
                <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 [perspective:1400px] sm:grid-cols-2 lg:grid-cols-3">
                  {grid.map((p) => (
                    <li key={p.slug}>
                      <PostCard post={p} />
                    </li>
                  ))}
                </ul>
              )}

              {totalPages > 1 && (
                <nav aria-label="Phân trang" className="flex flex-wrap justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <Link
                      key={n}
                      href={listHref({ tag: activeTag, q, page: n })}
                      aria-current={n === page ? "page" : undefined}
                      className={`${pillBase} ${n === page ? pillOn : pillOff}`}
                    >
                      {n}
                    </Link>
                  ))}
                  {page < totalPages && (
                    <Link href={listHref({ tag: activeTag, q, page: page + 1 })} className={`${pillBase} ${pillOff}`}>
                      Trang sau →
                    </Link>
                  )}
                </nav>
              )}
            </>
          )}
        </Container>
      </section>

      <section className="bg-paper pb-16 pt-10 lg:pb-[90px]">
        <Container>
          <div className="flex flex-col gap-6 rounded-lg bg-ink p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-14 lg:py-12">
            <div className="flex flex-col gap-2">
              <h2 className="cd m-0 text-[34px] font-extrabold leading-none lg:text-[44px]">
                Nhận mẹo bảo trì nhà mỗi tháng
              </h2>
              <span className="text-fog-2">Kết bạn Zalo với chúng tôi để nhận các bài hướng dẫn mới nhất.</span>
            </div>
            <a
              href={site.zaloHref}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 shrink-0 items-center justify-center rounded-md bg-[#0068FF] px-7 hover:bg-[#0056d6]"
            >
              <span className="font-bold text-white">Kết bạn Zalo</span>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}

function FeaturedCard({ post }: { post: Article }) {
  return (
    <Link
      href={`/tin-tuc/${post.slug}`}
      className="pj grid grid-cols-1 overflow-hidden rounded-lg border border-line bg-white text-ink lg:min-h-[420px] lg:grid-cols-[1.2fr_1fr]"
    >
      <Placeholder src={post.image} alt={post.title} sizes="(min-width: 1024px) 55vw, 100vw" className="h-[220px] lg:h-auto">
        <span className="mono absolute left-5 top-5 rounded bg-brand px-2.5 py-1.5 text-[11px] text-white">
          Nổi bật
        </span>
      </Placeholder>
      <div className="flex flex-col justify-center gap-4 p-6 lg:p-10">
        <span className="mono text-[12px] text-accent-dark">
          {post.tag} · {post.date} · {post.readTime}
        </span>
        <h2 className="cd m-0 text-[34px] font-extrabold leading-[.98] lg:text-[48px]">{post.title}</h2>
        <p className="m-0 text-base leading-relaxed text-muted lg:text-[17px]">{post.excerpt}</p>
        <span className="flex items-center gap-2 font-bold text-brand">
          Đọc bài viết
          <Icon name="arrow" size={16} />
        </span>
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: Article }) {
  return (
    <Link
      href={`/tin-tuc/${post.slug}`}
      className="pj flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white text-ink lg:min-h-[380px]"
    >
      <Placeholder src={post.image} alt={post.title} className="h-[180px] shrink-0" />
      <div className="flex grow flex-col gap-2.5 p-5">
        <span className="mono text-[11px] text-accent-dark">{post.tag}</span>
        <h3 className="m-0 text-[19px] font-bold leading-[1.35]">{post.title}</h3>
        <p className="m-0 text-sm leading-normal text-muted">{post.excerpt}</p>
        <div className="mt-auto pt-2 text-[13px] text-muted">
          {post.date} · {post.readTime}
        </div>
      </div>
    </Link>
  );
}
