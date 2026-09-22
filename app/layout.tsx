import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-manrope", weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-playfair", weight: "400" });

export const metadata: Metadata = {
  title: "Sheera Mae Beltran — Front-end Developer",
  description: "Portfolio of Sheera Mae Beltran, a front-end developer, web design specialist, and WordPress developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body className={`${roboto.variable} ${montserrat.variable}`}>{children}</body></html>;
}
