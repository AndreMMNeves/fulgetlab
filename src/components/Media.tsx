import Image from "next/image";
import type { Foto } from "@/lib/fotos";

/**
 * Foto real de obra. Usa next/image com `fill` dentro de uma caixa com
 * proporção fixa (aspect-*), então a imagem sempre preenche o espaço sem
 * distorcer e sem causar layout shift.
 */
export function Photo({
  foto,
  aspect = "aspect-[4/3]",
  rounded = "rounded-2xl",
  className = "",
  imgClassName = "",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: {
  foto: Foto;
  /** Proporção da caixa via aspect-* do Tailwind (ex.: "aspect-[4/5]"). */
  aspect?: string;
  rounded?: string;
  className?: string;
  imgClassName?: string;
  /** Dica de largura para o Next escolher a resolução certa. */
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-sand-100 ${aspect} ${rounded} ${className}`}
    >
      <Image
        src={foto.src}
        alt={foto.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${foto.pos ?? ""} ${imgClassName}`}
      />
    </div>
  );
}
