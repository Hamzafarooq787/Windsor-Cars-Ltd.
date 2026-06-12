// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter font using next/font (self-hosted, better performance)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Fonts for Metropolis (not available on next/font easily) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Metropolis:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols (Google Icons) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}