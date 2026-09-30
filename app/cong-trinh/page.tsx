import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container, CtaBanner, Hl, PageHero, QuickContactCard } from "@/components/ui";
import { projectCategories, projectDetails } from "@/lib/project-details";
import { ProjectFilter, type ProjectCard } from "./ProjectFilter";

export const metadata: Metadata = pageMeta({
  title: "Công trình đã thực hiện",
  description:
    "Hình ảnh thực tế các công trình sửa chữa, cải tạo nhà, chống thấm, sơn nước, trần thạch cao, cửa sắt Duy Long Home đã thực hiện tại TP.HCM.",
  path: "/cong-trinh",
  image: "/son-op-go/1790740739263_751968165130597158_751968165130597158_f744a2d4b78a79096737a274dc3983e1.jpg",
  imageAlt: "Công trình sơn, lát gạch, ốp gỗ nhà phố",
});

export default function CongTrinhPage() {
  const cards: ProjectCard[] = projectDetails.map(({ slug, cat, name, area, size, time, status, photos }) => ({
    slug,
    image: photos?.[0]?.src,
    cat,
    name,
    area,
    size,
    time,
    status,
  }));

  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Trang chủ" }, { label: "Công trình" }]}
        title={
          <>
            Công trình <Hl>đã thực hiện</Hl>
          </>
        }
        lead="Hình ảnh thực tế từ các ngôi nhà chúng tôi đã sửa chữa, cải tạo tại TP.HCM."
        aside={<QuickContactCard />}
      />

      <section className="bg-paper pb-4 pt-10 lg:pt-[60px]">
        <Container>
          <ProjectFilter projects={cards} categories={projectCategories} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
