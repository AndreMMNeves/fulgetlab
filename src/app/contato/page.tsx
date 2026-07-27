import type { Metadata } from "next";
import { site, whatsappLink } from "@/lib/site";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  WhatsAppIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contato — peça seu orçamento de Fulget e Granilite",
  description: `Fale com a ${site.name} pelo WhatsApp, telefone ou e-mail. Orçamento sem compromisso para Fulget e Granilite em ${site.address.serviceArea}.`,
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const contatos = [
    {
      Icon: WhatsAppIcon,
      titulo: "WhatsApp",
      valor: site.whatsapp.display,
      href: whatsappLink(),
      external: true,
    },
    {
      Icon: PhoneIcon,
      titulo: "Telefone",
      valor: site.phone.display,
      href: site.phone.href,
      external: false,
    },
    // O e-mail só aparece quando estiver preenchido em site.ts.
    ...(site.email
      ? [
          {
            Icon: MailIcon,
            titulo: "E-mail",
            valor: site.email,
            href: `mailto:${site.email}`,
            external: false,
          },
        ]
      : []),
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos falar sobre a sua obra"
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Contato", href: "/contato" },
        ]}
      >
        Escolha o canal que preferir. Respondemos rápido e ajudamos você a
        escolher o melhor revestimento.
      </PageHeader>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          {/* Coluna de canais */}
          <div>
            <div className="grid gap-4">
              {contatos.map(({ Icon, titulo, valor, href, external }) => (
                <a
                  key={titulo}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-2xl border border-sand-200 bg-white p-5 transition hover:border-graphite"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber text-graphite">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-wide text-stone uppercase">
                      {titulo}
                    </span>
                    <span className="block text-base font-semibold text-ink">{valor}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-4 rounded-2xl bg-sand-100 p-6 text-sm text-graphite">
              <p className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-graphite" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city} — {site.address.state}, {site.address.zip}
                  <br />
                  <span className="text-stone">Atendemos {site.address.serviceArea}</span>
                </span>
              </p>
              <p className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-graphite" />
                <span>{site.hours}</span>
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div>
            <h2 className="text-2xl font-semibold text-ink">Peça um orçamento</h2>
            <p className="mt-2 text-sm text-stone">
              Preencha e enviamos uma proposta sem compromisso.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
