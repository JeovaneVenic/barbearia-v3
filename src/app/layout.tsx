import type { Metadata } from "next";
import localFont from "next/font/local";
import "./Styles/globals.css";
import Navbar from "./components/navbar";
import Rodape from "./components/Rodape"; // Importação do novo componente Rodape

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Criar Aplicação Next",
  description: "Gerado pela aplicação Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <div className="page">
          {children}
        </div>
        <Rodape /> {/* Adicionando o Rodape aqui */}
      </body>
    </html>
  );
}
