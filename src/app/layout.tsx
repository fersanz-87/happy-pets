import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Pets | Clínica Veterinaria en Celaya, Guanajuato",
  description:
    "Clínica veterinaria de confianza en Celaya, Guanajuato. Consultas, vacunación, cirugía, urgencias 24hrs, estética y más. Cuidamos a tu mejor amigo como parte de nuestra familia.",
  openGraph: {
    title: "Happy Pets | Clínica Veterinaria en Celaya, Guanajuato",
    description:
      "Clínica veterinaria de confianza en Celaya, Guanajuato. Consultas, vacunación, cirugía, urgencias 24hrs y más.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
