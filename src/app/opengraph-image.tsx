import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.name;

/** Lê um arquivo de /public e devolve como data URI (padrão do next/og). */
async function dataUri(relativePath: string, mime: string) {
  const bytes = await readFile(join(process.cwd(), "public", relativePath));
  return `data:${mime};base64,${Buffer.from(bytes).toString("base64")}`;
}

export default async function OpengraphImage() {
  const [logo, foto] = await Promise.all([
    dataUri("marca/fulgetlab-horizontal.png", "image/png"),
    dataUri("fotos/granilite-degraus-salao.jpg", "image/jpeg"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#003333",
          fontFamily: "sans-serif",
        }}
      >
        {/* Foto de obra ao fundo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={foto}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
          }}
        />
        {/* Véu petróleo para o texto ter contraste */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            background:
              "linear-gradient(100deg, #003333 0%, #003333 44%, rgba(0,51,51,0.88) 58%, rgba(0,51,51,0.25) 84%, rgba(0,51,51,0.1) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 72,
            width: 820,
            color: "#f6f5f2",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt={site.name} width={340} height={97} />

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                display: "flex",
                fontSize: 62,
                fontWeight: 700,
                lineHeight: 1.05,
                maxWidth: 660,
              }}
            >
              Pisos em Fulget e Granilite de alto padrão
            </div>
            <div style={{ display: "flex", fontSize: 28, color: "#c2d1cf", maxWidth: 640 }}>
              Material e aplicação profissional · {site.address.serviceArea}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 24 }}>
            <div
              style={{
                display: "flex",
                background: "#ffcc00",
                color: "#003333",
                padding: "10px 24px",
                borderRadius: 999,
                fontWeight: 700,
              }}
            >
              Orçamento no WhatsApp
            </div>
            <div style={{ display: "flex", color: "#c2d1cf" }}>
              {site.url.replace("https://", "")}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
