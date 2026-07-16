import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container className="text-center">
        <p className="text-sm font-semibold tracking-[0.18em] text-amber uppercase">
          Erro 404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-md text-stone">
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" withArrow>Voltar para o início</Button>
          <Button href="/catalogo" variant="outline">Ver catálogo</Button>
        </div>
      </Container>
    </section>
  );
}
