"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { marca } from "@/lib/fotos";
import { Container } from "@/components/ui";
import { MenuIcon, CloseIcon, WhatsAppIcon } from "@/components/icons";

const nav = [
  { href: "/", label: "Início" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/catalogo/fulget", label: "Fulget" },
  { href: "/catalogo/granilite", label: "Granilite" },
  { href: "/portfolio", label: "Obras" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Fundo petróleo: é o único fundo em que o logotipo oficial (amarelo +
    // branco) tem contraste. Ver /public/marca.
    <header
      className={`on-dark sticky top-0 z-50 bg-graphite text-sand-100 transition-shadow ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-4 lg:h-24">
        <Link href="/" aria-label={`${site.name} — página inicial`}>
          <Image
            src={marca.horizontal.src}
            alt={site.name}
            width={marca.horizontal.w}
            height={marca.horizontal.h}
            priority
            className="h-12 w-auto sm:h-14 lg:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition hover:text-amber ${
                  active ? "text-amber" : "text-sand-100/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-graphite transition hover:bg-amber-600"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg text-sand-100 hover:bg-white/10 lg:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-graphite lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-sand-100/90 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-semibold text-graphite"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
