// import type { Metadata } from "next";
import { K2D, Kaushan_Script, League_Spartan, Sour_Gummy } from 'next/font/google'
import "./general.css";
import "./globals.css";
import Header from "@/components/Header";

export const kaushanScript = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
});
export const sourGummy = Sour_Gummy({
  weight: '900',
  subsets: ['latin'],
});


export const K2d = K2D({
  weight: '400',
  subsets: ['latin'],
});
export const leagueSpartan = League_Spartan({
  weight: '400',
  subsets: ['latin'],
});


// export const metadata: Metadata = {
//   title: "My Portfolio",
//   description: "I was designed & develop my portfolio with core css and self designed animation",
// };

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
