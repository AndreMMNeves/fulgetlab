import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui";

/** Cabeçalho de página interna com breadcrumb, título e subtítulo. */
export function PageHeader({
  eyebrow,
  title,
  children,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <section className="border-b border-sand-200 bg-sand-100">
      <Container className="py-14 sm:py-20">
        {breadcrumb && (
          <nav aria-label="Trilha de navegação" className="mb-5 text-xs text-stone">
            <ol className="flex flex-wrap items-center gap-1.5">
              {breadcrumb.map((b, i) => (
                <li key={b.href} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden>/</span>}
                  <Link href={b.href} className="hover:text-amber">
                    {b.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-amber uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold text-ink sm:text-5xl">
          {title}
        </h1>
        {children && (
          <div className="mt-5 max-w-2xl text-lg leading-relaxed text-stone">
            {children}
          </div>
        )}
      </Container>
    </section>
  );
}
