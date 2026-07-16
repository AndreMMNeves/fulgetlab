import { ImageIcon } from "@/components/icons";

const tons: Record<string, string> = {
  areia: "from-[#d8cbb6] to-[#b9a888]",
  grafite: "from-[#1a5560] to-[#0e3a42]", // petróleo
  terracota: "from-[#e07a53] to-[#c0492a]", // coral (harmoniza com o CTA)
  cristal: "from-[#cdd8d7] to-[#9aabab]",
};

type MediaProps = {
  /** Texto que descreve a foto que vai entrar aqui (também vira alt real). */
  label?: string;
  tom?: keyof typeof tons | string;
  className?: string;
  /** Proporção via aspect-* do Tailwind (ex.: "aspect-[4/3]"). */
  aspect?: string;
  rounded?: string;
};

/**
 * Placeholder de imagem com textura de pedra. Substitua por <Image /> do
 * next/image quando as fotos reais estiverem disponíveis, mantendo o alt.
 */
export function Media({
  label = "Foto da obra",
  tom = "grafite",
  className = "",
  aspect = "aspect-[4/3]",
  rounded = "rounded-2xl",
}: MediaProps) {
  const gradient = tons[tom] ?? tons.grafite;
  return (
    <div
      role="img"
      aria-label={label}
      className={`stone-grain relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${aspect} ${rounded} ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center text-white/80">
        <ImageIcon className="h-7 w-7 opacity-70" />
        <span className="text-xs font-medium tracking-wide uppercase opacity-80">
          {label}
        </span>
      </div>
    </div>
  );
}
