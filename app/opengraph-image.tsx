import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const alt = "Hashbay. The right technology. A clearer way forward.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OpenGraphImage() {
  const [serif, sans] = await Promise.all([
    readFile(join(process.cwd(), "public/fonts/newsreader.ttf")),
    readFile(join(process.cwd(), "public/fonts/archivo.ttf")),
  ]);
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "50px 68px",
        background: "#eeeae2",
        color: "#173c38",
        fontFamily: "Archivo",
      }}
    >
      <div
        style={{
          display: "flex",
          fontFamily: "Newsreader",
          fontSize: 52,
          fontWeight: 500,
          letterSpacing: "-2px",
        }}
      >
        hashbay.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Newsreader",
          fontWeight: 500,
          fontSize: 88,
          lineHeight: 1.02,
          letterSpacing: "-3px",
          marginTop: 55,
        }}
      >
        <span>The right technology.</span>
        <span>A clearer way forward.</span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          paddingTop: 24,
          borderTop: "1px solid #c2c5b9",
          fontSize: 24,
        }}
      >
        IT services. Software. Practical training.
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: serif, weight: 500, style: "normal" },
        { name: "Archivo", data: sans, weight: 400, style: "normal" },
      ],
    },
  );
}
