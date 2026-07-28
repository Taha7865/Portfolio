import type { Metadata } from "next";
import "./globals.css";

const origin =
  process.env.URL ??
  (process.env.NODE_ENV === "production"
    ? "https://taha-ahmed-portfolio.taha-ahmed1786.chatgpt.site"
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: "Taha Ahmed — Product & Engineering",
  description: "Product and engineering at Level2 in New York City.",
  applicationName: "Taha Ahmed Portfolio",
  openGraph: {
    title: "Taha Ahmed — Product & Engineering",
    description: "Explore Taha Ahmed’s experience across product and engineering.",
    type: "website",
    url: origin,
    images: [
      {
        url: `${origin}/og-editorial.png`,
        width: 1536,
        height: 1024,
        alt: "Taha Ahmed — Product and Engineering in New York City",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Ahmed — Product & Engineering",
    description: "Product and engineering at Level2 in New York City.",
    images: [`${origin}/og-editorial.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
