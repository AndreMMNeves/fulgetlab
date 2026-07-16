import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

/** Container central com largura máxima e gutter lateral. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "whatsapp";
  external?: boolean;
  className?: string;
  withArrow?: boolean;
};

const variants = {
  primary:
    "bg-amber text-white hover:bg-amber-600 shadow-sm",
  outline:
    "border border-sand-200 bg-white text-ink hover:border-graphite hover:text-graphite",
  ghost: "text-graphite hover:text-amber",
  whatsapp: "bg-[#25D366] text-white hover:brightness-95 shadow-sm",
};

/** Botão/CTA que pode ser link interno ou externo. */
export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  withArrow = false,
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {withArrow && <ArrowRightIcon className="h-4 w-4" />}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Cabeçalho de seção com sobretítulo, título e texto opcional. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-amber uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-tight font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {children && (
        <div className="mt-4 text-base leading-relaxed text-stone">{children}</div>
      )}
    </div>
  );
}
