"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";
import { areas } from "./data";
import { OfficeMap } from "./OfficeMap";

const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address)}`;

/** Khu vực phục vụ: thông tin văn phòng + bảng thời gian có mặt bên trái, bản đồ bên phải */
export function AreaMap() {
  const [active, setActive] = useState(0);
  const cur = areas[active];
  const line =
    cur.line ??
    `Đội thợ nhận khảo sát tại ${cur.name}, thời gian có mặt dự kiến ${cur.eta.replace("~ ", "khoảng ")} tùy lịch.`;

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-14">
      <div className="flex flex-col gap-8 lg:w-[360px] lg:shrink-0">
        <div className="flex flex-col gap-3">
          <span className="mono text-[11px] text-muted">Văn phòng chính</span>
          <address className="text-lg font-semibold not-italic leading-snug lg:text-xl">{site.address}</address>
          <span className="text-sm text-muted">Mở cửa {site.hours}</span>
          <span className="mt-1 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-bold">
            <a href={directionsHref} target="_blank" rel="noreferrer" className="inline-flex">
              <span className="flex items-center gap-1.5 text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">
                Chỉ đường
                <Icon name="arrow" size={16} />
              </span>
            </a>
            <a href={site.phoneHref} className="inline-flex">
              <span className="flex items-center gap-1.5 underline decoration-ink/20 underline-offset-4 hover:decoration-ink">
                <Icon name="phone" size={16} />
                {site.phone}
              </span>
            </a>
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="mono text-[11px] text-muted">Thời gian có mặt dự kiến</span>
          <ul className="m-0 flex list-none flex-col p-0">
            {areas.map((a, i) => {
              const on = i === active;
              return (
                <li key={a.name}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => setActive(i)}
                    className={`group flex w-full cursor-pointer items-end gap-3 py-2.5 text-left text-[17px] transition-colors ${
                      on ? "font-bold text-brand" : "font-medium text-ink hover:text-brand"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`size-2 rotate-45 transition-colors ${on ? "bg-accent" : "bg-line group-hover:bg-brand"}`}
                      />
                      {a.name}
                    </span>
                    <span
                      className={`mb-[5px] grow border-b-2 border-dotted transition-colors ${
                        on ? "border-accent" : "border-line"
                      }`}
                    />
                    <span className="mono text-[13px]">{a.eta.replace("~ ", "")}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p aria-live="polite" className="m-0 mt-2 text-sm leading-[1.6] text-muted">
            {line}
          </p>
        </div>
      </div>

      <div className="relative h-[380px] grow overflow-hidden rounded-lg border border-line bg-[#f2f1ee] sm:h-[440px] lg:h-[520px]">
        <OfficeMap active={active} onSelect={setActive} />
      </div>
    </div>
  );
}
