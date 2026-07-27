import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
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
}

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
