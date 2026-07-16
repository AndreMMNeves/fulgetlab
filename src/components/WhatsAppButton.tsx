import { whatsappLink, site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

/** Botão flutuante fixo de WhatsApp (canto inferior direito). */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp: ${site.whatsapp.display}`}
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-95 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">Fale conosco</span>
    </a>
  );
}
