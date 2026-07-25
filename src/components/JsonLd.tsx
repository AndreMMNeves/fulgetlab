import { site } from "@/lib/site";

/** Injeta um bloco JSON-LD (Schema.org) no HTML. */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** LocalBusiness — ajuda o Google a entender a empresa e o SEO local. */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: site.phone.display,
        ...(site.email ? { email: site.email } : {}),
        logo: `${site.url}/marca/fulgetlab-vertical-escuro.png`,
        image: `${site.url}/opengraph-image`,
        // Perfis oficiais — conecta o site às redes nos resultados de busca.
        sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: "BR",
        },
        areaServed: site.address.serviceArea,
        makesOffer: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aplicação de piso Fulget",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aplicação de piso Granilite",
            },
          },
        ],
      }}
    />
  );
}

/** Serviço específico (usado nas páginas de Fulget/Granilite). */
export function ServiceJsonLd({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        provider: { "@type": "GeneralContractor", name: site.name, url: site.url },
        areaServed: site.address.serviceArea,
        serviceType: "Revestimento de piso",
      }}
    />
  );
}

/** FAQ estruturado (rich result de perguntas frequentes). */
export function FaqJsonLd({
  items,
}: {
  items: { pergunta: string; resposta: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
          "@type": "Question",
          name: f.pergunta,
          acceptedAnswer: { "@type": "Answer", text: f.resposta },
        })),
      }}
    />
  );
}
