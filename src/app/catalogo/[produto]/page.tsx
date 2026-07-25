import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { produtos } from "@/lib/content";
import { site } from "@/lib/site";
import { Container, Button } from "@/components/ui";
import { Photo } from "@/components/Media";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { ServiceJsonLd } from "@/components/JsonLd";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return produtos.map((p) => ({ produto: p.slug }));
}

function getProduto(slug: string) {
  return produtos.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ produto: string }>;
}): Promise<Metadata> {
  const { produto } = await params;
  const p = getProduto(produto);
  if (!p) return {};
  return {
    title: `${p.nome} — piso e revestimento em São Paulo`,
    description: `${p.resumo} Venda de material e aplicação profissional de ${p.nome} em ${site.address.serviceArea}.`,
    alternates: { canonical: `/catalogo/${p.slug}` },
    openGraph: {
      title: `${p.nome} | ${site.name}`,
      description: p.resumo,
    },
  };
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ produto: string }>;
}) {
  const { produto } = await params;
  const p = getProduto(produto);
  if (!p) notFound();

  const outro = produtos.find((x) => x.slug !== p.slug);

  return (
    <>
      <PageHeader
        eyebrow="Produto"
        title={p.nome}
        breadcrumb={[
          { label: "Início", href: "/" },
          { label: "Catálogo", href: "/catalogo" },
          { label: p.nome, href: `/catalogo/${p.slug}` },
        ]}
      >
        {p.resumo}
      </PageHeader>

      {/* Intro + imagem */}
      <section className="py-16">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <Photo
            foto={p.capa}
            aspect="aspect-[4/3]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="shadow-lg shadow-black/5"
          />
          <div>
            <h2 className="text-2xl font-semibold text-ink">O que é o {p.nome}</h2>
            <p className="mt-4 text-base leading-relaxed text-stone">{p.descricao}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contato" withArrow>Pedir orçamento</Button>
              <Button href="/portfolio" variant="outline">Ver obras com {p.nome}</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Aplicações + Benefícios */}
      <section className="bg-sand-100 py-16">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8">
            <h3 className="text-xl font-semibold text-ink">Onde aplicar</h3>
            <ul className="mt-5 space-y-3">
              {p.aplicacoes.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-graphite">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-graphite" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8">
            <h3 className="text-xl font-semibold text-ink">Vantagens</h3>
            <ul className="mt-5 space-y-3">
              {p.beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-graphite">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-graphite" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Acabamentos */}
      <section className="py-16">
        <Container>
          <h3 className="text-2xl font-semibold text-ink">Acabamentos disponíveis</h3>
          <p className="mt-3 max-w-2xl text-stone">
            Personalizamos cor, textura e granulometria de acordo com o seu projeto.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.acabamentos.map((a) => (
              <div
                key={a.nome}
                className="rounded-2xl border border-sand-200 bg-white p-5"
              >
                <Photo
                  foto={a.foto}
                  aspect="aspect-square"
                  rounded="rounded-xl"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="mb-4"
                />
                <p className="text-sm font-medium text-ink">{a.nome}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Galeria de obras do produto */}
      <section className="bg-sand-100 py-16">
        <Container>
          <h3 className="text-2xl font-semibold text-ink">
            Obras executadas em {p.nome}
          </h3>
          <p className="mt-3 max-w-2xl text-stone">
            Fotos reais de aplicações da nossa equipe.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.galeria.map((foto) => (
              <Photo
                key={foto.src}
                foto={foto}
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Link para o outro produto */}
      {outro && (
        <section className="pb-16">
          <Container>
            <Link
              href={`/catalogo/${outro.slug}`}
              className="group flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-sand-200 bg-white p-8 transition hover:shadow-lg hover:shadow-black/5"
            >
              <div>
                <p className="text-xs font-semibold tracking-wide text-graphite uppercase">
                  Conheça também
                </p>
                <p className="mt-1 text-xl font-semibold text-ink">{outro.nome}</p>
                <p className="mt-1 max-w-lg text-sm text-stone">{outro.resumo}</p>
              </div>
              <ArrowRightIcon className="h-6 w-6 text-graphite transition-transform group-hover:translate-x-1" />
            </Link>
          </Container>
        </section>
      )}

      <CTASection title={`Vamos aplicar ${p.nome} na sua obra?`} />
      <ServiceJsonLd name={`Aplicação de piso ${p.nome}`} description={p.descricao} />
    </>
  );
}
