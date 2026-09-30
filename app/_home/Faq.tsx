"use client";

import { useId, useState } from "react";
import { faqs } from "./data";

/** Accordion câu hỏi thường gặp — mở 1 câu mỗi lúc */
export function Faq() {
  const [open, setOpen] = useState(0);
  const uid = useId();

  return (
    <div className="flex grow flex-col self-start border-b border-line lg:w-auto">
      {faqs.map((f, i) => {
        const isOpen = i === open;
        const btnId = `${uid}-q${i}`;
        const panelId = `${uid}-a${i}`;
        return (
          <div key={f.q}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 border-0 border-t border-solid border-line bg-transparent py-[22px] text-left text-[17px] font-bold text-ink hover:text-brand lg:text-[19px]"
              >
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  className="cd flex size-9 shrink-0 items-center justify-center rounded-md bg-sand text-2xl text-brand"
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
              <p className="m-0 pb-[22px] text-base leading-[1.65] text-muted lg:pr-[60px]">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
