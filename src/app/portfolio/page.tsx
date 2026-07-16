import type { Metadata } from "next";
import { obras } from "@/lib/content";
import { Container } from "@/components/ui";
import { Media } from "@/components/Media";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Obras — projetos em Fulget e Granilite",
  description:
    "Veja projetos realizados em Fulget e Granilite: áreas de piscina, fachadas, halls, escolas, lojas e ambientes industriais em São Paulo e região.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Obras"
        title="Projetos que mostram nosso acabamento"
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Obras", href: "/portfolio" },
        ]}
      >
        Uma seleção de trabalhos em Fulget e Granilite. As imagens abaixo são
        exemplos — substitua pelas fotos reais das suas obras.
      </PageHeader>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {obras.map((o) => (
              <figure
                key={o.titulo}
                className="group overflow-hidden rounded-2xl border border-sand-200 bg-white"
              >
                <Media label={o.titulo} tom={o.tom} aspect="aspect-[4/3]" rounded="rounded-none" />
                <figcaption className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-sm font-semibold text-ink">{o.titulo}</p>
                    <p className="text-xs text-stone">{o.local}</p>
                  </div>
                  <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-graphite">
                    {o.tipo}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Quer ver sua obra nessa lista?"
        text="Conte o que você precisa e transformamos seu projeto em realidade."
      />
    </>
  );
}
