import Script from "next/script";
import { site } from "@/lib/site";

/**
 * Integração com o chatbot Leadster.
 * Só carrega se você definir `leadsterId` em src/lib/site.ts.
 * Cole o ID que aparece no painel do Leadster (Instalação).
 */
export function Leadster() {
  if (!site.leadsterId) return null;
  return (
    <Script
      id="leadster-chat"
      strategy="afterInteractive"
      src={`https://cdn.leadster.com.br/neurologic.js?cliente=${site.leadsterId}`}
    />
  );
}
