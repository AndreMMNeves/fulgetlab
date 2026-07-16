"use client";

import { useState } from "react";

type Item = { pergunta: string; resposta: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.pergunta}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            >
              <span className="text-base font-semibold text-ink">
                {item.pergunta}
              </span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-sand-200 text-amber transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-stone">
                {item.resposta}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
