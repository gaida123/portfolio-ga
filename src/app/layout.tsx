import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://gaidaamzar.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gaida Amzar — Software Developer",
  description:
    "Computer Science student at UBC. I build web platforms, e-commerce systems, and data tools.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Gaida Amzar — Software Developer",
    description:
      "Portfolio of web platforms, mobile apps, and data projects by Gaida Amzar.",
    url: siteUrl,
    siteName: "Gaida Amzar",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaida Amzar — Software Developer",
    description:
      "Portfolio of web platforms, mobile apps, and data projects by Gaida Amzar.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
