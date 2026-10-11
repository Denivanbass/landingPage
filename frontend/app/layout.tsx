
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "Millanes | Sites, Sistemas e Lojas Virtuais",
  description:
    "Desenvolvimento de sites profissionais, lojas virtuais e sistemas web personalizados para pequenos negócios e profissionais autônomos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
