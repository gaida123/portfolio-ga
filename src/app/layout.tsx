import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const siteUrl = "https://portfolio-ga.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gaida Amzar — Full-Stack Developer Portfolio",
  description:
    "Full-stack developer & UBC Computer Science student building scalable web apps, mobile experiences, and secure systems.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Gaida Amzar — Full-Stack Developer",
    description:
      "Portfolio of web apps, Lockout, and data projects built for students and small businesses.",
    url: siteUrl,
    siteName: "Gaida Amzar Portfolio",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaida Amzar — Full-Stack Developer",
    description:
      "Showcase of scalable web apps, Lockout, and data projects.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
