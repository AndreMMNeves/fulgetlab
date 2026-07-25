"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const tipos = ["Fulget", "Granilite", "Ainda não sei"];
const escopos = ["Só material", "Só aplicação", "Material + aplicação"];

/**
 * Formulário que NÃO usa backend: monta uma mensagem e abre o WhatsApp
 * já preenchido. Simples, sem servidor e com alta taxa de resposta.
 */
export function ContactForm() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState(tipos[0]);
  const [escopo, setEscopo] = useState(escopos[2]);
  const [local, setLocal] = useState("");
  const [detalhes, setDetalhes] = useState("");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `Olá! Meu nome é ${nome || "(não informado)"}.`,
      `Tenho interesse em: ${tipo}.`,
      `Preciso de: ${escopo}.`,
      local ? `Local/cidade: ${local}.` : "",
      detalhes ? `Detalhes: ${detalhes}.` : "",
      "Podem me passar um orçamento?",
    ]
      .filter(Boolean)
      .join(" ");
    const url = `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-sand-200 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-graphite";
  const label = "text-sm font-medium text-graphite";

  return (
    <form onSubmit={enviar} className="rounded-3xl border border-sand-200 bg-white p-6 sm:p-8">
      <div className="grid gap-5">
        <div>
          <label htmlFor="nome" className={label}>Seu nome</label>
          <input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={field}
            placeholder="Como podemos te chamar?"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="tipo" className={label}>Revestimento</label>
            <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} className={field}>
              {tipos.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="escopo" className={label}>Você precisa de</label>
            <select id="escopo" value={escopo} onChange={(e) => setEscopo(e.target.value)} className={field}>
              {escopos.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="local" className={label}>Cidade / bairro da obra</label>
          <input
            id="local"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            className={field}
            placeholder="Ex.: São Paulo — Moema"
          />
        </div>

        <div>
          <label htmlFor="detalhes" className={label}>Detalhes (opcional)</label>
          <textarea
            id="detalhes"
            value={detalhes}
            onChange={(e) => setDetalhes(e.target.value)}
            rows={3}
            className={field}
            placeholder="Metragem aproximada, prazo, dúvidas..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition hover:brightness-95"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Enviar pelo WhatsApp
        </button>
        <p className="text-center text-xs text-stone">
          Ao enviar, abrimos o WhatsApp com sua mensagem já preenchida.
        </p>
      </div>
    </form>
  );
}
