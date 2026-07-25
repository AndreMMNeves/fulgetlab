import Link from "next/link";
import Image from "next/image";
import { site, whatsappLink } from "@/lib/site";
import { marca } from "@/lib/fotos";
import { Container } from "@/components/ui";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";

export function Footer() {
  const year = 2026; // Atualize conforme necessário

  return (
    <footer className="on-dark mt-24 bg-graphite text-sand-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src={marca.verticalClaro.src}
            alt={site.name}
            width={marca.verticalClaro.w}
            height={marca.verticalClaro.h}
            className="h-24 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sand-100/70">
            {site.tagline}. Atendemos {site.address.serviceArea}.
          </p>
          <div className="mt-5 flex gap-3">
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Instagram da FulgetLab"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Facebook da FulgetLab"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-100/70">
            <li><Link href="/catalogo" className="hover:text-white">Catálogo</Link></li>
            <li><Link href="/catalogo/fulget" className="hover:text-white">Fulget</Link></li>
            <li><Link href="/catalogo/granilite" className="hover:text-white">Granilite</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Obras</Link></li>
            <li><Link href="/sobre" className="hover:text-white">Sobre</Link></li>
            <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-sand-100/70">
            <li className="flex items-start gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <a href={site.phone.href} className="hover:text-white">{site.phone.display}</a>
            </li>
            {site.email && (
              <li className="flex items-start gap-2.5">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            )}
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <span>{site.address.street}, {site.address.city} — {site.address.state}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            Peça um orçamento
          </h3>
          <p className="mt-4 text-sm text-sand-100/70">
            Resposta rápida pelo WhatsApp, sem compromisso.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {site.whatsapp.display}
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-sand-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. Todos os direitos reservados.</p>
          <p>Fulget e Granilite — venda de material e aplicação profissional.</p>
        </Container>
      </div>
    </footer>
  );
}
