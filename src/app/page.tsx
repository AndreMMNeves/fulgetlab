import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";
import { produtos, diferenciais, publicos, etapas, obras, faq } from "@/lib/content";
import { Container, Button, SectionHeading } from "@/components/ui";
import { Photo } from "@/components/Media";
import { fotosFulget, texturasGranilite } from "@/lib/fotos";
import { CTASection } from "@/components/CTASection";
import { FaqAccordion } from "@/components/Faq";
import { FaqJsonLd } from "@/components/JsonLd";
import {
  WhatsAppIcon,
  ArrowRightIcon,
  CheckIcon,
  ShieldIcon,
  LayersIcon,
  UsersIcon,
  SparkleIcon,
} from "@/components/icons";

const diferencialIcons = [ShieldIcon, UsersIcon, LayersIcon, SparkleIcon];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sand-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-graphite">
              <span className="h-2 w-2 rounded-full bg-amber" />
              {site.address.serviceArea}
            </p>
            <h1 className="text-4xl leading-[1.1] font-semibold text-ink sm:text-5xl lg:text-6xl">
              Pisos em{" "}
              <span className="underline decoration-amber decoration-[6px] underline-offset-[6px]">
                Fulget
              </span>{" "}
              e{" "}
              <span className="underline decoration-amber decoration-[6px] underline-offset-[6px]">
                Granilite
              </span>{" "}
              com acabamento de alto padrão
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone">
              Fabricamos, fornecemos e aplicamos revestimentos duráveis e
              sofisticados para obras residenciais, comerciais e industriais.
              Material, serviço ou os dois juntos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir orçamento
              </a>
              <Button href="/catalogo" variant="outline" withArrow>
                Ver catálogo
              </Button>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { n: "+25", l: "anos de experiência" },
                { n: "2", l: "produtos especializados" },
                { n: "100%", l: "obra no prazo" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="text-3xl font-semibold text-ink">{s.n}</dt>
                  <dd className="mt-1 text-xs leading-snug text-stone">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <Photo
              foto={fotosFulget.areaPiscina}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
              className="shadow-xl shadow-black/10"
            />
            <div className="absolute -bottom-5 -left-5 hidden w-44 rotate-[-4deg] sm:block">
              <Photo
                foto={texturasGranilite.ambar}
                aspect="aspect-square"
                rounded="rounded-xl"
                sizes="176px"
                className="border-4 border-sand shadow-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ PRODUTOS */}
      <section id="produtos" className="py-16">
        <Container>
          <SectionHeading
            eyebrow="O que fazemos"
            title="Dois revestimentos, infinitas possibilidades"
          >
            Escolha o acabamento ideal para cada ambiente. Vendemos o material e
            também aplicamos com equipe própria.
          </SectionHeading>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {produtos.map((p) => (
              <Link
                key={p.slug}
                href={`/catalogo/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-sand-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <Photo
                  foto={p.capa}
                  aspect="aspect-[4/3]"
                  rounded="rounded-none"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-semibold text-ink">{p.nome}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                    {p.resumo}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-graphite">
                    Ver detalhes
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------- DIFERENCIAIS */}
      <section className="bg-sand-100 py-20">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Por que a gente"
            title="Do material à entrega, tudo com a mesma equipe"
          >
            Menos intermediários, mais controle de qualidade. Você fala com quem
            fabrica e com quem aplica.
          </SectionHeading>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d, i) => {
              const Icon = diferencialIcons[i % diferencialIcons.length];
              return (
                <div key={d.titulo} className="rounded-2xl bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber text-graphite">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{d.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{d.texto}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------- PÚBLICOS */}
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Para quem" title="Atendemos empresas e pessoas">
            Da grande obra à reforma de casa, com a mesma dedicação.
          </SectionHeading>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {publicos.map((pub) => (
              <div
                key={pub.titulo}
                className="overflow-hidden rounded-3xl border border-sand-200 bg-white"
              >
                <Photo
                  foto={pub.foto}
                  aspect="aspect-[16/9]"
                  rounded="rounded-none"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-ink">{pub.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {pub.descricao}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {pub.itens.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-3 text-sm text-graphite"
                      >
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-graphite" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --------------------------------------------------------- COMO FUNCIONA */}
      <section className="bg-graphite py-20 text-sand-100">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Como funciona"
            title="Simples do começo ao fim"
            className="[&_h2]:text-white [&_p]:text-sand-100/70"
          >
            Um processo transparente, do primeiro contato à entrega da obra.
          </SectionHeading>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {etapas.map((e) => (
              <li key={e.numero} className="rounded-2xl bg-white/5 p-6">
                <span className="text-3xl font-bold text-amber">{e.numero}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{e.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-100/70">
                  {e.texto}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ------------------------------------------------------------ PORTFÓLIO */}
      <section className="py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Obras" title="Projetos que falam por nós" />
            <Button href="/portfolio" variant="ghost" withArrow>
              Ver todas as obras
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {obras.slice(0, 6).map((o) => (
              <figure key={o.titulo} className="group">
                <Photo
                  foto={o.foto}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="mt-3 flex items-start justify-between gap-3">
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

      {/* ------------------------------------------------------------------ FAQ */}
      <section className="pb-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes">
            Não achou o que procurava? Chame a gente no WhatsApp.
          </SectionHeading>
          <FaqAccordion items={faq} />
        </Container>
      </section>

      <CTASection />
      <FaqJsonLd items={faq} />
    </>
  );
}
