import { leagueSpartan } from "@/app/fonts";
import "./general.css";
import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "I was designed & develop my portfolio with core css and self designed animation",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${leagueSpartan.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
