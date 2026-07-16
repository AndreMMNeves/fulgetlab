import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.name;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0e3a42 0%, #12474f 55%, #0a2c33 100%)",
          padding: "72px",
          color: "#f5f3f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#e2603b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {site.shortName.charAt(0)}
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 600 }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Pisos em Fulget e Granilite de alto padrão
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#c7d3d3", maxWidth: 820 }}>
            Material e aplicação profissional · {site.address.serviceArea}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26 }}>
          <div
            style={{
              display: "flex",
              background: "#e2603b",
              padding: "10px 24px",
              borderRadius: 999,
              fontWeight: 600,
            }}
          >
            Orçamento no WhatsApp
          </div>
          <div style={{ display: "flex", color: "#c7d3d3" }}>
            {site.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}
