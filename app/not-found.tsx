import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-paper py-20 lg:py-32">
      <Container className="flex flex-col items-start gap-6">
        <span className="mono text-[13px] text-brand">Lỗi 404</span>
        <h1 className="cd m-0 text-[48px] font-extrabold leading-[.92] lg:text-[84px]">
          Không tìm thấy <span className="text-brand">trang này</span>
        </h1>
        <p className="m-0 max-w-[560px] text-base leading-relaxed text-muted lg:text-lg">
          Trang bạn tìm có thể đã được đổi địa chỉ. Quay về trang chủ hoặc gọi {site.phone} để được tư vấn.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className="bp flex h-[56px] items-center gap-2.5 rounded-lg px-6 font-bold" href="/">
            Về trang chủ
            <Icon name="arrow" />
          </Link>
          <a className="bo flex h-[56px] items-center gap-2.5 rounded-lg px-6 font-bold" href={site.phoneHref}>
            <Icon name="phone" />
            Gọi {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
