import type { Metadata } from "next";
import Link from "next/link";
import { produtos, publicos } from "@/lib/content";
import { Container, Button } from "@/components/ui";
import { Photo } from "@/components/Media";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Catálogo de Fulget e Granilite — material e aplicação",
  description:
    "Conheça nosso catálogo de revestimentos Fulget e Granilite. Venda de material e aplicação profissional para obras residenciais, comerciais e industriais em São Paulo.",
  alternates: { canonical: "/catalogo" },
};

export default function CatalogoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catálogo"
        title="Revestimentos que unem beleza e resistência"
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Catálogo", href: "/catalogo" },
        ]}
      >
        Trabalhamos com dois revestimentos de alto padrão. Você pode comprar
        apenas o material, contratar a aplicação ou fechar o serviço completo.
      </PageHeader>

      {/* Produtos */}
      <section className="py-16">
        <Container className="grid gap-8">
          {produtos.map((p, i) => (
            <div
              key={p.slug}
              className="grid items-center gap-8 rounded-3xl border border-sand-200 bg-white p-6 sm:p-8 lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Photo
                  foto={p.capa}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  priority={i === 0}
                />
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {p.acabamentos.map((a) => (
                    <Photo
                      key={a.nome}
                      foto={a.foto}
                      aspect="aspect-square"
                      rounded="rounded-lg"
                      sizes="120px"
                    />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-ink">{p.nome}</h2>
                <p className="mt-4 text-base leading-relaxed text-stone">
                  {p.descricao}
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {p.beneficios.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-graphite">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-graphite" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button href={`/catalogo/${p.slug}`} withArrow>
                    Conhecer o {p.nome}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Modelo: material, serviço ou os dois */}
      <section className="bg-sand-100 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-graphite uppercase">
              Para quem
            </p>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Da grande obra à reforma de casa
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone">
              Em qualquer um dos casos você escolhe: só o material, só a
              aplicação, ou os dois juntos.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {publicos.map((pub) => (
              <div key={pub.titulo} className="rounded-3xl bg-white p-8">
                <h3 className="text-xl font-semibold text-ink">{pub.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {pub.descricao}
                </p>
                <ul className="mt-6 space-y-3">
                  {pub.itens.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-graphite">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-graphite" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Quer o catálogo completo com cores e valores?"
        text="Envie o tipo de obra e a metragem pelo WhatsApp que preparamos uma proposta sob medida."
      />
    </>
  );
}
