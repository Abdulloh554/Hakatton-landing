import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";

const description =
  "Yer yuzasidagi Mars va Oyga o‘xshash real hududlarni ilmiy manbalar bilan ko‘rsatuvchi ochiq atlas.";

export const metadata: Metadata = {
  title: "Terra Analog — Yerni kuzating, kosmosni tushuning",
  description,
  applicationName: "Terra Analog",
  openGraph: { title: "Terra Analog", description, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz-Latn">
      <body>{children}</body>
    </html>
  );
}