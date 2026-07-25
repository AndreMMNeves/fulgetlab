import type { Metadata } from "next";
import { site } from "@/lib/site";
import { diferenciais } from "@/lib/content";
import { Container } from "@/components/ui";
import { Photo } from "@/components/Media";
import { fotosFulget, fotosGranilite } from "@/lib/fotos";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sobre a empresa — especialistas em Fulget e Granilite",
  description: `Conheça a ${site.name}: experiência, equipe própria e compromisso com a qualidade em revestimentos de Fulget e Granilite em ${site.address.serviceArea}.`,
  alternates: { canonical: "/sobre" },
};

const valores = [
  "Compromisso com o prazo e com a obra limpa",
  "Transparência do orçamento à entrega",
  "Qualidade do material à mão de obra",
  "Atendimento próximo e consultivo",
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre"
        title={`Especialistas em Fulget e Granilite`}
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Sobre", href: "/sobre" },
        ]}
      >
        Unimos tradição no ofício de revestimentos a um atendimento moderno e
        transparente, para empresas e pessoas.
      </PageHeader>

      {/* História */}
      <section className="py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid gap-4">
            <Photo
              foto={fotosGranilite.degrausSalao}
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
              className="shadow-lg shadow-black/5"
            />
            <div className="grid grid-cols-2 gap-4">
              <Photo
                foto={fotosFulget.deckGrafite}
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 22vw, 45vw"
              />
              <Photo
                foto={fotosGranilite.detalheLosango}
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 22vw, 45vw"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-ink">Nossa história</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-stone">
              <p>
                A {site.name} nasceu da especialização em dois dos revestimentos
                mais duráveis e sofisticados do mercado: o Fulget e o Granilite.
                Ao longo dos anos, atendemos obras residenciais, comerciais e
                industriais em {site.address.serviceArea}.
              </p>
              <p>
                Trabalhamos com material próprio e equipe de aplicação
                especializada, o que garante controle de qualidade do começo ao
                fim. Seja para comprar o material, contratar o serviço ou os dois
                juntos, você fala diretamente com quem entende do assunto.
              </p>
            </div>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {valores.map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-graphite">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-graphite" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Números / diferenciais */}
      <section className="bg-sand-100 py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d) => (
              <div key={d.titulo} className="rounded-2xl bg-white p-6">
                <h3 className="text-lg font-semibold text-ink">{d.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{d.texto}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
