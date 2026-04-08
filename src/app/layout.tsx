import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sutim Healthcare Services Ltd | Compassionate Home Care in Pembrokeshire",
  description:
    "Person-centred non-regulated care services in Pembrokeshire. Companionship, domestic support, meal preparation, shopping assistance, and more. Available 24/7.",
  keywords:
    "home care, Pembrokeshire, Narberth, elderly care, companionship, domestic support, sitting service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased font-[var(--font-inter)]">{children}</body>
    </html>
  );
}
