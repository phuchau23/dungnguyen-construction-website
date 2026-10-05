import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import type { CSSProperties, ReactNode } from "react";
import { Icon, type IconName } from "@/components/Icon";
import { Container, Hl, PageHero, QuickContactCard, SectionHead } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Liên hệ",
  description:
    "Liên hệ Duy Long Home: hotline/Zalo 0869 577 686, email duylonghome@gmail.com, văn phòng 54/6A đường TTH 29, P. Tân Thới Hiệp, Quận 12, TP.HCM. Làm việc 7:00 – 21:00 cả tuần.",
  path: "/lien-he",
});

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

const channels: { icon: IconName; label: string; value: string; href?: string; external?: boolean }[] = [
  { icon: "phone", label: "Hotline", value: site.phone, href: site.phoneHref },
  { icon: "chat", label: "Zalo", value: site.phone, href: site.zaloHref, external: true },
  { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "clock", label: "Giờ làm việc", value: "7:00 – 21:00, cả tuần" },
];

const areas = [...site.areas, "Các khu vực lân cận"];

function ChannelCard({ icon, label, value, href, external }: (typeof channels)[number]) {
  const body: ReactNode = (
    <>
      <span className="flex size-[52px] items-center justify-center rounded-lg bg-brand-soft text-brand">
        <Icon name={icon} size={26} className="shrink-0" />
      </span>
      <span className="mono text-[11px] text-muted">{label}</span>
      <span className="break-words text-[17px] font-bold lg:text-[19px]">{value}</span>
    </>
  );
  const cls = "svc flex min-w-0 flex-col gap-3 rounded-lg border border-line bg-white p-6 text-ink";
  if (!href) return <div className={cls}>{body}</div>;
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {body}
    </a>
  );
}

/* Bản đồ minh họa 3D (placeholder) — thay bằng Google Maps embed khi có */
const gridBg: CSSProperties = {
  backgroundColor: "#F7F6F3",
  backgroundImage:
    "linear-gradient(rgba(31,78,150,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(31,78,150,.12) 1px,transparent 1px)",
  backgroundSize: "27px 27px",
  transform: "rotateX(58deg) rotateZ(-28deg)",
  transformStyle: "preserve-3d",
};

function MapIllustration() {
  return (
    <div aria-hidden="true" className="absolute inset-0 [perspective:1300px]">
      <div
        className="absolute left-1/2 top-[42%] -ml-[270px] -mt-[200px] h-[400px] w-[540px] border-2 border-ink shadow-[0_60px_60px_-30px_rgba(10,26,58,.4)] lg:top-1/2"
        style={gridBg}
      >
        <div className="absolute left-[70%] top-0 h-[400px] w-[22px] -skew-x-12 bg-fog" />
        <div className="absolute left-0 top-[36%] h-2.5 w-[540px] bg-[#DDD7CC]" />
        <div className="absolute left-[42%] top-0 h-[400px] w-2.5 bg-[#DDD7CC]" />
        <div className="absolute left-0 top-[70%] h-2 w-[380px] bg-[#DDD7CC]" />
        <div className="absolute left-[8%] top-[6%] h-[60px] w-[90px] border border-line-strong bg-line-soft" />
        <div className="absolute left-[52%] top-1/2 h-[50px] w-[70px] border border-line-strong bg-line-soft" />
        <div className="absolute left-[82%] top-[60%] h-[70px] w-[70px] border border-line-strong bg-line-soft" />
        <div className="absolute left-[34%] top-[22%] size-0 [transform-style:preserve-3d]">
          <div className="halo-anim absolute -left-10 -top-10 size-20 rounded-full border-2 border-brand" />
          <div
            className="absolute -left-0.5 bottom-0 h-[110px] w-1 bg-brand"
            style={{
              transformOrigin: "50% 100%",
              transform: "rotateZ(28deg) rotateX(-90deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute -left-2.5 -top-11 whitespace-nowrap rounded-md bg-brand px-3.5 py-2 text-[15px] font-bold text-white">
              Duy Long Home
            </div>
          </div>
          <div className="absolute -left-[9px] -top-[9px] size-[18px] rounded-full border-2 border-paper bg-brand" />
        </div>
      </div>
    </div>
  );
}

export default function LienHePage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Trang chủ" }, { label: "Liên hệ" }]}
        title={
          <>
            Liên hệ <Hl>Duy Long Home</Hl>
          </>
        }
        lead="Gọi điện, nhắn Zalo hoặc ghé văn phòng tại Quận 12. Làm việc 7:00 – 21:00, cả tuần."
        aside={<QuickContactCard />}
      />

      {/* Kênh liên hệ */}
      <section className="bg-paper pt-10 lg:pt-[50px]">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <ChannelCard key={c.label} {...c} />
            ))}
          </div>
        </Container>
      </section>

      {/* Bản đồ */}
      <section className="bg-paper pb-14 pt-10 lg:pb-[60px] lg:pt-[60px]">
        <Container>
          <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-line bg-sand lg:min-h-[480px]">
            <MapIllustration />
            <div className="absolute inset-x-4 bottom-4 flex flex-col gap-4 rounded-lg border border-line bg-white px-5 py-[18px] sm:flex-row sm:items-center sm:justify-between lg:inset-x-6 lg:bottom-6">
              <div className="flex items-center gap-3">
                <Icon name="pin" size={24} className="shrink-0 text-brand" />
                <address className="text-[15px] not-italic leading-normal">
                  <strong>Văn phòng</strong>
                  <br />
                  {site.address}
                </address>
              </div>
              <a
                className="bo flex h-11 shrink-0 items-center justify-center rounded-md px-4 text-sm font-bold"
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
              >
                Chỉ đường
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Khu vực phục vụ */}
      <section className="bg-white py-14 lg:pb-[70px] lg:pt-[70px]">
        <Container className="flex flex-col gap-9">
          <SectionHead
            eyebrow="Khu vực phục vụ"
            size="md"
            title={
              <>
                Nhận sửa chữa <Hl>tất cả quận huyện</Hl>
              </>
            }
          />
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {areas.map((a) => (
              <li
                key={a}
                className="flex h-12 items-center gap-2 rounded-md border border-line bg-white px-5 font-semibold"
              >
                <Icon name="pin" size={18} className="shrink-0 text-brand" />
                {a}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
