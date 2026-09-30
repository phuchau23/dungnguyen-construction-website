"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { priceCategories } from "./data";

/** Pill chọn danh mục + bảng hạng mục công việc */
export function PriceTable() {
  const [active, setActive] = useState(0);
  const cat = priceCategories[active];

  return (
    <>
      <div
        role="group"
        aria-label="Chọn danh mục báo giá"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {priceCategories.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.label}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(i)}
              className={`h-11 shrink-0 cursor-pointer whitespace-nowrap rounded-md border px-[18px] text-[15px] font-semibold ${
                on ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-brand"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-lg border border-ink bg-white" aria-live="polite">
        <div className="mono hidden h-[50px] grid-cols-[64px_minmax(0,1fr)_minmax(0,1.4fr)_180px] items-center gap-4 bg-ink px-6 text-xs text-white lg:grid">
          <span>STT</span>
          <span>Hạng mục công việc</span>
          <span>Nội dung thi công</span>
          <span />
        </div>
        <ul className="m-0 list-none p-0">
          {cat.rows.map((r, i) => (
            <li
              key={r.item}
              className={`grid grid-cols-[36px_minmax(0,1fr)] items-start gap-x-3 gap-y-2 border-b border-line-soft px-4 py-4 text-base last:border-b-0 lg:h-[62px] lg:grid-cols-[64px_minmax(0,1fr)_minmax(0,1.4fr)_180px] lg:items-center lg:gap-4 lg:px-6 lg:py-0 ${
                i % 2 ? "bg-paper-2" : ""
              }`}
            >
              <span className="mono pt-0.5 text-[13px] text-muted lg:pt-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-bold">{r.item}</span>
              <span className="col-start-2 text-[15px] text-muted lg:col-start-auto">{r.scope}</span>
              <a
                className="bo col-start-2 flex h-10 items-center gap-2 justify-self-start rounded-md px-4 text-sm font-bold lg:col-start-auto lg:justify-self-end"
                href="#lien-he"
              >
                Nhận báo giá
                <Icon name="arrow" size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
