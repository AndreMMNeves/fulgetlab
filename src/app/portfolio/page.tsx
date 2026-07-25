import type { Metadata } from "next";
import { obras } from "@/lib/content";
import { Container } from "@/components/ui";
import { Photo } from "@/components/Media";
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
        Uma seleção de trabalhos executados pela nossa equipe em Fulget e
        Granilite — de áreas de piscina e calçadas a halls, escadarias e
        pisos com desenho sob medida.
      </PageHeader>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {obras.map((o) => (
              <figure
                key={o.titulo}
                className="group overflow-hidden rounded-2xl border border-sand-200 bg-white"
              >
                <Photo
                  foto={o.foto}
                  aspect="aspect-[4/3]"
                  rounded="rounded-none"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="flex items-start justify-between gap-3 p-5">
                  <div>
                    <p className="text-sm font-semibold text-ink">{o.titulo}</p>
                    <p className="text-xs text-stone">{o.contexto}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-graphite">
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
