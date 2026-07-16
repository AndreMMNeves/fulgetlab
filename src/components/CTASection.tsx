import { site, whatsappLink } from "@/lib/site";
import { Container, Button } from "@/components/ui";
import { WhatsAppIcon, PhoneIcon } from "@/components/icons";

/** Faixa de chamada para ação com WhatsApp + telefone. */
export function CTASection({
  title = "Vamos tirar sua obra do papel?",
  text = "Peça um orçamento sem compromisso. Respondemos rápido e ajudamos você a escolher o melhor revestimento.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="stone-grain relative overflow-hidden rounded-3xl bg-graphite px-8 py-14 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-sand-100/80">
            {text}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Orçamento no WhatsApp
            </a>
            <a
              href={site.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
