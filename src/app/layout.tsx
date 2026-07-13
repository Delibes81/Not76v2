import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notaría 76 | Ciudad de México",
  description: "Servicios profesionales en materia jurídica en el área notarial. El notario MARIO FERNANDO PÉREZ SALINAS Y RAMÍREZ es titular de la notaría 76 de la Ciudad de México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}
