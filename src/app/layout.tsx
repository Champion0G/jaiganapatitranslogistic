import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jai Ganapati Translogistic | Reliable Road Transport Services",
  description: "B2B Logistics experts since 2018. Serving West Bengal, Odisha, and Andhra Pradesh with a self-owned fleet for steel and trading industries.",
  keywords: ["logistics", "road transport", "steel logistics", "Kolkata logistics", "West Bengal transport", "Odisha transport", "Andhra Pradesh transport"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
