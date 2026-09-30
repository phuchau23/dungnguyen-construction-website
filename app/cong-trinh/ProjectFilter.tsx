"use client";

import Link from "next/link";
import { useState } from "react";
import { Placeholder } from "@/components/ui";
import type { ProjectCategory, ProjectStatus } from "@/lib/project-details";

export type ProjectCard = {
  slug: string;
  cat: ProjectCategory;
  name: string;
  area: string;
  size: string;
  time: string;
  status: ProjectStatus;
  /** Ảnh đại diện */
  image?: string;
};

const ALL = "Tất cả";

export function ProjectFilter({
  projects,
  categories,
}: {
  projects: ProjectCard[];
  categories: readonly ProjectCategory[];
}) {
  const [filter, setFilter] = useState<ProjectCategory | typeof ALL>(ALL);
  const tabs = [ALL, ...categories] as const;
  const items = filter === ALL ? projects : projects.filter((p) => p.cat === filter);

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Lọc theo danh mục" className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const on = t === filter;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(t)}
                className={`h-11 cursor-pointer whitespace-nowrap rounded-md border px-[18px] text-[15px] font-semibold ${
                  on ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-brand"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
        <span className="text-sm text-muted" aria-live="polite">
          {items.length} công trình
        </span>
      </div>

      <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 [perspective:1400px] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <li key={p.slug} className="flex">
            <Link
              href={`/cong-trinh/${p.slug}`}
              className="pj flex w-full flex-col overflow-hidden rounded-lg border border-line bg-white text-ink"
            >
              <Placeholder src={p.image} alt={p.name} className="h-[230px] shrink-0">
                <span className="mono absolute left-4 top-4 rounded bg-ink px-2.5 py-1.5 text-[11px] text-white">{p.cat}</span>
                <span className="mono absolute right-4 top-4 rounded bg-white px-2.5 py-1.5 text-[11px] text-ink">{p.status}</span>
              </Placeholder>
              <div className="flex flex-col gap-2.5 px-5 py-[18px]">
                <h2 className="cd m-0 text-[27px] font-extrabold leading-[1.05]">{p.name}</h2>
                <div className="flex flex-wrap gap-x-3.5 gap-y-1 text-[13px] text-muted">
                  <span>{p.area}</span>
                  <span aria-hidden="true">·</span>
                  <span>{p.size}</span>
                  <span aria-hidden="true">·</span>
                  <span>{p.time}</span>
                </div>
                <span className="text-sm font-bold text-brand">Xem chi tiết →</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
