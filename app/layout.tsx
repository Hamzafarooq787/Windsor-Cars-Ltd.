// src/app/layout.tsx
import type { Metadata } from "next";
import { Gotu, Manrope } from "next/font/google";
import "./globals.css";

const gotu = Gotu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gotu",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Windsor Cars Ltd. | Luxury Executive Travel & Airport Transfers",
  description:
    "Founded 1991. Over 250 cars and 3,000+ weekly airport transfers. 24/7 service with no extra charges after midnight.",
  icons: {
    icon: "/Windsor Cars Site-Icon.webp",
    shortcut: "/Windsor Cars Site-Icon.webp",
    apple: "/Windsor Cars Site-Icon.webp",
  },
  openGraph: {
    title: "Windsor Cars Ltd. | Luxury Executive Travel & Airport Transfers",
    description:
      "Founded 1991. Over 250 cars and 3,000+ weekly airport transfers. 24/7 service with no extra charges after midnight.",
    images: [
      {
        url: "/Windsor Cars Open Graph.webp",
        width: 1200,
        height: 630,
        alt: "Windsor Cars Ltd. – Luxury Executive Chauffeur Service",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windsor Cars Ltd. | Luxury Executive Travel & Airport Transfers",
    description:
      "Founded 1991. Over 250 cars and 3,000+ weekly airport transfers. 24/7 service with no extra charges after midnight.",
    images: ["/Windsor Cars Open Graph.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gotu.variable} ${manrope.variable}`}>
      <head>
        {/* Material Symbols (Google Icons) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
